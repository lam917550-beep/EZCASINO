export const game = { id: 'memory-card', name: 'Lật Cặp Bài', category: 'Bài', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Lật Cặp Bài: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
