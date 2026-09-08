export const game = { id: 'shell-game', name: 'Ba Vỏ Sò', category: 'Vỏ sò', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Ba Vỏ Sò: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
