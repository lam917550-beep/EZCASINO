export const game = { id: 'range-pick', name: 'Chọn Khoảng', category: 'Số', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Chọn Khoảng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
