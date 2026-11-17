# JonahCraft

Original browser voxel game for Jonah’s Games. This public repository contains source code only. Passwords, accounts, session tokens and saved worlds are created on the private server and are never included in this repository.

The complete game source, documentation, original pixel artwork, MIT licenses and tests are in **JonahCraft.zip**. Extract the ZIP to inspect or run the project locally. Its `README.md` lists controls, owner setup, security, hosting instructions and unfinished features.

Render builds this repository with Node.js 24 and `node unpack.mjs`, then starts `node server.mjs`. The small build script extracts the vetted source archive; it rejects runtime databases and private environment files. There are no package dependencies to download. The build log records the source archive’s SHA-256.

Use one Node web service with a persistent disk mounted at `/var/data`. Set HOST=0.0.0.0, DATA_DIR=/var/data, NODE_ENV=production and TRUST_PROXY=1. The server uses Render’s own HTTPS URL automatically, or PUBLIC_URL when a custom domain is supplied. Its health check is `/api/status`.

Complete the initial Jonah owner setup privately with `node owner-setup.mjs` in the service’s private shell. Never put a password in a source file, environment variable, command argument or public chat.

The source game and Three.js have MIT licenses included in the ZIP. This project is not Minecraft or Eaglercraft and does not use their code or assets.
