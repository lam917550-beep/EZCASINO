export const game = { id: 'tower', name: 'Tháp May Mắn', category: 'Tháp', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Tháp May Mắn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
