export const game = { id: 'thuy-van', name: 'Thủy Vân', category: 'Bình minh', mechanic: 'wheel', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Thủy Vân: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
