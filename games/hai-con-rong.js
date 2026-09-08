export const game = { id: 'hai-con-rong', name: 'Hai Con Rồng', category: 'Rồng', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Hai Con Rồng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
