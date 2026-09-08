export const game = { id: 'xoc-dia', name: 'Xóc Đĩa', category: 'Đồng xu', mechanic: 'coin', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Xóc Đĩa: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
