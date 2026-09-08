export const game = { id: 'lucky-symbol', name: 'Biểu Tượng May Mắn', category: 'Biểu tượng', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Biểu Tượng May Mắn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
