export const game = { id: 'sao-bang', name: 'Sao Băng', category: 'Thiên thạch', mechanic: 'crash', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Sao Băng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
