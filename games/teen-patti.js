export const game = { id: 'teen-patti', name: 'Teen Patti', category: 'Bài', mechanic: 'poker', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Teen Patti: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
