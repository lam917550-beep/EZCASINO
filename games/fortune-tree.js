export const game = { id: 'fortune-tree', name: 'Cây Phú Quý', category: 'Cây', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Cây Phú Quý: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
