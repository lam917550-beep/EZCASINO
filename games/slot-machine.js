export const game = { id: 'slot-machine', name: 'Slot Machine', category: '3 cột', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Slot Machine: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
