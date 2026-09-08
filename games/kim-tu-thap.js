export const game = { id: 'kim-tu-thap', name: 'Kim Tự Tháp Vàng', category: 'Kim tự tháp', mechanic: 'grid', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Kim Tự Tháp Vàng: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
