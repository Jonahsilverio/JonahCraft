# JonahCraft — free hosting update

Original browser voxel game for Jonah’s Games. This public repository contains code only. Accounts, password hashes, tokens, inventory and saved worlds belong in the private cloud database, never in this repository.

**No paid hosting is selected.** Version 0.1.2 adapts the game to Render Free plus Turso Free. The game source, tests, original art, licenses and full instructions are in **JonahCraft.zip**. Read `FREE-HOSTING.md` inside it before deployment.

Render builds with Node.js 24.22.1 and `node unpack.mjs && npm ci --omit=dev`, then starts `node server.mjs`. The build script extracts the vetted source package and rejects runtime databases or private environment files. It prints the archive's SHA-256 for verification. libSQL 0.5.29 is pinned in the package lock; it provides a local read replica with writes committed to the remote primary.

The free server has no persistent disk. Set `REQUIRE_REMOTE_DB=1`, supply the database-scoped `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` through Render's private runtime variables, and use `DATA_DIR=/tmp/jonahcraft`. Never commit those credentials. The server refuses a temporary-only save configuration when remote storage is required.

Free Render sleeps after inactivity and has traffic/build quotas. Stay on the Free compute plan, do not attach a paid disk or add payment details, and leave paid database overages disabled. The remote database preserves game records when the server restarts; live cloud schema, remote writes, transactions and fresh-replica persistence checks have passed.

The private HTTPS owner setup requires a one-time `OWNER_SETUP_TOKEN` held in private server configuration. Enter the initial owner password privately on the setup form. The setup locks permanently once the authenticated Jonah owner account exists. No owner password or setup secret is printed in server logs or included in source.

Verification so far: all eight tests pass with the libSQL driver locally, including gameplay, secure accounts, every owner permission, saving/restarting, mining/crafting/combat, Nether return travel, database-backed backups and guarded owner setup. Public cloud deployment and both arcade Play links remain pending deployment verification and private owner setup.

Game code/art: MIT. Three.js and libSQL: MIT; notices are included in the source package. This is an independent original game, not Minecraft or Eaglercraft.


Pixel UI update: original gray beveled menus, Tiny5 pixel lettering, pixel health and hunger, a nine-slot hotbar, gray inventory, brighter pixel terrain, stone-backed ores and an original first-person arm with held blocks and tools. Tiny5 uses the SIL Open Font License included in the source package.
