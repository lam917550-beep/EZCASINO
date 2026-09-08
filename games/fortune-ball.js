export const game = { id: 'fortune-ball', name: 'Quả Cầu Tiên Tri', category: 'Quả cầu', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Quả Cầu Tiên Tri: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
