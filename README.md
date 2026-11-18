# JonahCraft 0.2.0

Original browser voxel game for Jonah’s Games. The full source, original art, tests, licenses and hosting instructions are in JonahCraft.zip. Runtime accounts, password hashes, tokens, private keys and worlds are never part of this repository.

This update adds authenticated private singleplayer worlds with saved progress and menu pausing. Multiplayer remains shared. Singleplayer needs internet; it is not an offline mode. Existing seeds and shared worlds remain compatible. The visual update adds original pixel block textures, ambient corner shading, warm emitted light, mining cracks and a chunky original title.

Stay on Render Free and Turso Free. Existing private Render variables connect the persistent database; do not add a paid disk or billing plan. Render can sleep and take about a minute to wake. Read FREE-HOSTING.md inside the source archive.

The build command is node unpack.mjs && npm ci --omit=dev. It starts node server.mjs. Node 24 and libSQL 0.5.29 are pinned. Owner commands still check the authenticated owner account ID on the server. The separate initial Jonah owner password must be entered privately during setup; none is embedded in source.

All 10 local tests passed, including private-world denial, pause/resume, save/restart, gameplay, Nether travel, account and owner security, and worker geometry. Production verification is recorded in the delivery status.

This is an independent game, not Minecraft, Eaglercraft, or a compatible Minecraft client/server. Code and original art: MIT. Three.js and libSQL: MIT. Tiny5 font: SIL Open Font License.
