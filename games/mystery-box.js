export const game = { id: 'mystery-box', name: 'Hộp Bí Ẩn', category: 'Hộp', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Hộp Bí Ẩn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
