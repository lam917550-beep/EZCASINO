export const game = { id: 'wheel-7', name: 'Vòng 7', category: 'Vòng quay', mechanic: 'wheel', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Vòng 7: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
