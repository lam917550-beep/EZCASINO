export const game = { id: 'target-21', name: 'Mục Tiêu 21', category: 'Số', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Mục Tiêu 21: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
