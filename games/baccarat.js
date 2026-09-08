export const game = { id: 'baccarat', name: 'Baccarat', category: 'Bài', mechanic: 'baccarat', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Baccarat: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
