export const game = { id: 'fortune-stamp', name: 'Con Dấu May Mắn', category: 'Con dấu', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Con Dấu May Mắn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
