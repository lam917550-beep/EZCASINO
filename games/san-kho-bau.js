export const game = { id: 'san-kho-bau', name: 'Săn Kho Báu', category: 'Kho báu', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Săn Kho Báu: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
