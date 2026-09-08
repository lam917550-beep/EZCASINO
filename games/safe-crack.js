export const game = { id: 'safe-crack', name: 'Phá Két', category: 'Số', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Phá Két: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
