export const game = { id: 'forest-wheel', name: 'Bánh Xe Rừng', category: 'Vòng quay', mechanic: 'wheel', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Bánh Xe Rừng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
