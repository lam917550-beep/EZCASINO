# QA V16 — 5 PASS

PASS 1 — `node --check` server.js/app.js + all game modules.
PASS 2 — Structural checks: games, pets, package, render, assets, feature catalog.
PASS 3 — Money precision: BigInt helpers, 75% max-bet, bank, gift/event/admin money paths.
PASS 4 — Pet persistence: activePet + activePetBonus rehydrated on bootstrap/session/equip.
PASS 5 — Archive integrity and required-file checks.

Verified invariants:
- 75% max bet is unbounded by a fixed currency ceiling.
- 1.5x and 2x settlement use integer BigInt arithmetic.
- Player balances are serialized as decimal strings.
