export const game = { id: 'dice-high', name: 'Xúc Xắc Cao', category: 'Xúc xắc', mechanic: 'dice', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Xúc Xắc Cao: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
