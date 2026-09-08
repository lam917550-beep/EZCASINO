export const game = { id: 'bingo', name: 'Bingo', category: 'Lô tô', mechanic: 'keno', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Bingo: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
