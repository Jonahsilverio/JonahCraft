# JonahCraft 0.3.1

Original browser voxel game. Full source, original artwork, licenses, tests and hosting instructions are in JonahCraft.zip. Runtime accounts, credentials and saved worlds are excluded.

This release rebuilds the original pixel block and item art, adds a gradient sky, square sun/moon, stars, merged block clouds, daylight propagation below trees and at cave mouths, underwater fog, isometric inventory cubes, thick held tools and a larger classic hotbar. Field of view and optional view bobbing are adjustable. F3 shows coordinates. Existing terrain seeds, saves, block IDs and multiplayer permissions are unchanged. Private singleplayer uses authenticated cloud saves and requires internet.

Account creation and private owner setup accept passwords of 8–128 characters. Passwords remain salted and scrypt-hashed. Jonah ownership is tied only to the server account ID. The initial owner password must be entered privately by Jonah; none is embedded in source.

All 11 automated tests passed, covering saving/restart, private singleplayer, accounts and owner authorization, multiplayer, mining, crafting, furnace, combat, Nether and mesh geometry. Browser and live-deployment verification is recorded in the delivery notes.

Use the existing Render Free and Turso Free services. Do not enable paid disks or plans. Render may sleep and take a minute to wake. Build: node unpack.mjs && npm ci --omit=dev. Start: node server.mjs. Node 24 and libSQL 0.5.29 are pinned.

Independent game, not Minecraft, Eaglercraft or a compatible client/server. No Mojang assets are used. Code/art/Three.js/libSQL: MIT. Tiny5: SIL Open Font License.
