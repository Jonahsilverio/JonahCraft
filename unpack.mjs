// Build-time extraction of this repository's vetted source archive. No dependencies.
import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {inflateRawSync} from 'node:zlib';
import {resolve,dirname,sep} from 'node:path';
import {createHash} from 'node:crypto';
const zip=readFileSync(new URL('./JonahCraft.zip',import.meta.url));
const destination=resolve(process.argv[2]||process.cwd());
let eocd=-1;for(let p=zip.length-22;p>=Math.max(0,zip.length-65557);p--)if(zip.readUInt32LE(p)===0x06054b50){eocd=p;break;}
if(eocd<0)throw Error('Source archive is invalid.');
const entries=zip.readUInt16LE(eocd+10);let position=zip.readUInt32LE(eocd+16),total=0;
if(entries>200)throw Error('Unexpected source archive file count.');
for(let i=0;i<entries;i++){
 if(zip.readUInt32LE(position)!==0x02014b50)throw Error('Invalid ZIP directory.');
 const flags=zip.readUInt16LE(position+8),method=zip.readUInt16LE(position+10),compressed=zip.readUInt32LE(position+20),size=zip.readUInt32LE(position+24),nameLength=zip.readUInt16LE(position+28),extraLength=zip.readUInt16LE(position+30),commentLength=zip.readUInt16LE(position+32),localOffset=zip.readUInt32LE(position+42);
 const name=zip.subarray(position+46,position+46+nameLength).toString('utf8').replaceAll('\\','/');position+=46+nameLength+extraLength+commentLength;
 if(flags&1||![0,8].includes(method)||name.split('/').some(p=>p==='..')||name.startsWith('/')||name.includes(':'))throw Error('Unsafe source archive entry.');
 if(/(^|\/)(data|node_modules)\//.test(name)||/\.sqlite|(^|\/)\.env$/.test(name))throw Error('Runtime data must never be in the source repository.');
 const target=resolve(destination,name);if(!target.startsWith(destination+sep))throw Error('Invalid archive path.');
 if(name.endsWith('/')){mkdirSync(target,{recursive:true});continue;}
 if(zip.readUInt32LE(localOffset)!==0x04034b50)throw Error('Invalid ZIP file record.');
 const start=localOffset+30+zip.readUInt16LE(localOffset+26)+zip.readUInt16LE(localOffset+28),bytes=zip.subarray(start,start+compressed),content=method===8?inflateRawSync(bytes,{maxOutputLength:4*1024*1024}):bytes;
 total+=content.length;if(content.length!==size||total>8*1024*1024)throw Error('Source archive length mismatch.');
 mkdirSync(dirname(target),{recursive:true});writeFileSync(target,content);
}
console.log(`Prepared ${entries} game source files; archive SHA-256 ${createHash('sha256').update(zip).digest('hex')}.`);
