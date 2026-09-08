export const game = { id: 'three-card', name: 'Ba Lá', category: 'Bài', mechanic: 'cards', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Ba Lá: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
