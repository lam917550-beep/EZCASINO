# QA V19 — 5 PASS

1. Syntax: PASS — every JS file checked with `node --check`.
2. Structure/data: PASS — 75 active games, 100 pets, 100+ feature entries, required deployment files.
3. Contract/security: PASS — Telegram/session routes, web login, public profile, admin command markers, x2-only normal payout.
4. Runtime smoke: PASS — server boot, `/api/bootstrap`, `/api/play`, public profile route and cooldown path checked with an Express stub.
5. Economy/game invariants: PASS — Lucky Spin visual layout is 16 slots (4 X2, 2 refund, 1 X5, 9 empty); probability bands 27% X2 / 10% refund / 3% X5 / 60% empty; normal scheduler is 42%; `/taopet` has no old 1000% ceiling.

ZIP integrity is checked after packaging with `unzip -t`.
