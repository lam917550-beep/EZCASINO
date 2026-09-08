export const game = { id: 'hiep-khach', name: 'Hiệp Khách May Mắn', category: 'Hiệp khách', mechanic: 'cards', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Hiệp Khách May Mắn: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
