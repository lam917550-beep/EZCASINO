export const game = { id: 'chu-tuoc', name: 'Chu Tước', category: 'Phượng đỏ', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Chu Tước: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
