export const game = { id: 'bau-cua', name: 'Bầu Cua Tôm Cá', category: 'Đồ hình', mechanic: 'baucua', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Bầu Cua Tôm Cá: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
