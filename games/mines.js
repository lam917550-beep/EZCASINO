export const game = { id: 'mines', name: 'Dò Mìn', category: 'Ô bí mật', mechanic: 'mines', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Dò Mìn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
