export const game = { id: 'prime-pick', name: 'Chọn Số Nguyên Tố', category: 'Số', mechanic: 'pick', minBet: 100, maxDurationMs: 45000 };
export const rules = 'Chọn Số Nguyên Tố: chọn cược, chờ hoạt ảnh và nhận kết quả do máy chủ settlement quyết định.';
export function createPresentation(seed = 0) { return { seed, mechanic: game.mechanic, headline: game.name }; }
