# JonahCraft 0.4.0

Original browser voxel game. Full source, original art, licenses, tests and hosting instructions are in JonahCraft.zip. Runtime accounts, credentials and saved worlds are excluded.

This release fixes collision during walking, jumping, sprinting, flying and client/server position corrections. It preserves newer block edits when a delayed chunk arrives, rejects unloaded-chunk results, waits for nearby collision data and recovers older saves embedded slightly in blocks. Terrain generation and inventory remain compatible. Visual improvements include original grass/wildflowers, creature contact shadows and held-item lighting.

Seventeen automated cases passed across the suite and integration rerun. Browser walking/sprinting/flying stopped before the solid test wall. Eighteen generated chunks match the previous release byte for byte. Production verification is recorded in the delivery notes.

Private singleplayer uses authenticated cloud saves and needs internet. Shared multiplayer remains available. Passwords accept 8–128 characters with salted scrypt hashing. Every owner command checks the server account ID. The initial Jonah owner password must be entered privately; none is embedded in source.

Keep the existing Render Free and Turso Free services. No paid disk or billing plan is needed. Render may sleep and take a minute to wake. Build: node unpack.mjs && npm ci --omit=dev. Start: node server.mjs. Node 24 and libSQL 0.5.29 are pinned.

Independent game, not Minecraft, Eaglercraft or a compatible client/server. No Mojang assets are used. Code/art/Three.js/libSQL: MIT. Tiny5: SIL Open Font License.
