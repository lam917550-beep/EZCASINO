export const game = { id: 'kho-bau-hai-tac', name: 'Kho Báu Hải Tặc', category: 'Hải tặc', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Kho Báu Hải Tặc: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
