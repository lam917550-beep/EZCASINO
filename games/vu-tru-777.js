export const game = { id: 'vu-tru-777', name: 'Vũ Trụ 777', category: 'Vũ trụ', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Vũ Trụ 777: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
