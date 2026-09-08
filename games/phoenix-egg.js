export const game = { id: 'phoenix-egg', name: 'Trứng Phượng', category: 'Trứng', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Trứng Phượng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
