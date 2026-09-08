export const game = { id: 'than-tai', name: 'Thần Tài Gõ Cửa', category: 'Thần tài', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Thần Tài Gõ Cửa: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
