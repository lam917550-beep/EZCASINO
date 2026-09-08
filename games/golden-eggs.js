export const game = { id: 'golden-eggs', name: 'Trứng Vàng', category: 'Trứng', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Trứng Vàng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
