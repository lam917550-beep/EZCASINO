export const game = { id: 'blackjack', name: 'Xì Dách', category: 'Bài', mechanic: 'cards', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Xì Dách: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
