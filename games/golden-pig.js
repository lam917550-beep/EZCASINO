export const game = { id: 'golden-pig', name: 'Heo Vàng', category: 'Heo', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Heo Vàng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
