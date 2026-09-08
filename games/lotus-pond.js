export const game = { id: 'lotus-pond', name: 'Ao Sen', category: 'Ô', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Ao Sen: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
