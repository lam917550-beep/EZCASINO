export const game = { id: 'double-or-nothing', name: 'Gấp Đôi Hay Mất', category: 'Lật', mechanic: 'coin', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Gấp Đôi Hay Mất: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
