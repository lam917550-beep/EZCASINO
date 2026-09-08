export const game = { id: 'coin-flip', name: 'Tung Đồng Xu', category: 'Đồng xu', mechanic: 'coin', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Tung Đồng Xu: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
