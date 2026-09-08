export const game = { id: 'heads-tails', name: 'Ngửa / Sấp', category: 'Đồng xu', mechanic: 'coin', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Ngửa / Sấp: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
