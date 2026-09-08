export const game = { id: 'joker-draw', name: 'Rút Joker', category: 'Bài', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Rút Joker: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
