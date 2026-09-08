export const game = { id: 'kiem-hiep', name: 'Kiếm Hiệp', category: 'Kiếm', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Kiếm Hiệp: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
