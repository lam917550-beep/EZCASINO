export const game = { id: 'number-draw', name: 'Rút Số', category: 'Số', mechanic: 'keno', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Rút Số: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
