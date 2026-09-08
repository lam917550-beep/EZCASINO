export const game = { id: 'moon-run', name: 'Chạy Trăng', category: 'Hệ số', mechanic: 'crash', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Chạy Trăng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
