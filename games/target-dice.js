export const game = { id: 'target-dice', name: 'Bắn Trúng Mục Tiêu', category: 'Xúc xắc', mechanic: 'dice', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Bắn Trúng Mục Tiêu: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
