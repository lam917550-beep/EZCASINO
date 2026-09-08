export const game = { id: 'tai-xiu', name: 'Tài Xỉu', category: 'Xúc xắc', mechanic: 'dice', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Tài Xỉu: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
