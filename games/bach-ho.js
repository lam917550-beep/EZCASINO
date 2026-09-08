export const game = { id: 'bach-ho', name: 'Bạch Hổ', category: 'Hổ trắng', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Bạch Hổ: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
