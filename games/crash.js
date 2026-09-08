export const game = { id: 'crash', name: 'Crash Game', category: 'Hệ số', mechanic: 'crash', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Crash Game: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
