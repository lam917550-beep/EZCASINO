export const game = { id: 'phu-thuy-khong-gian', name: 'Phù Thủy Không Gian', category: 'Không gian', mechanic: 'reels', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Phù Thủy Không Gian: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
