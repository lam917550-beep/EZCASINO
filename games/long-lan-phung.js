export const game = { id: 'long-lan-phung', name: 'Long Lân Phụng', category: 'Tứ linh', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Long Lân Phụng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
