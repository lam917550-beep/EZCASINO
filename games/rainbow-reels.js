export const game = { id: 'rainbow-reels', name: 'Rainbow Reels', category: '3 cột', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Rainbow Reels: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
