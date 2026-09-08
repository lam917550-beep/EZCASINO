export const game = { id: 'roulette', name: 'Cò quay', category: 'Bánh xe', mechanic: 'roulette', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Cò quay: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
