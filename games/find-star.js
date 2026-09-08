export const game = { id: 'find-star', name: 'Tìm Ngôi Sao', category: 'Ô', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Tìm Ngôi Sao: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
