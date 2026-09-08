export const game = { id: 'cung-hoang-dao', name: '12 Cung Hoàng Đạo', category: 'Cung hoàng đạo', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = '12 Cung Hoàng Đạo: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
