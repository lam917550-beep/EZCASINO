export const game = { id: 'tet-fortune', name: 'Tết May Mắn', category: 'Tết', mechanic: 'wheel', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Tết May Mắn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
