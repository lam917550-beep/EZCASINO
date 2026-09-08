export const game = { id: 'bamboo-fortune', name: 'Tre May Mắn', category: 'Tre', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Tre May Mắn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
