export const game = { id: 'number-21', name: 'Số 21', category: 'Số', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Số 21: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
