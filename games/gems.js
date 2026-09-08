export const game = {"id":"gems","name":"Kho Báu Ngọc","category":"Ô","mechanic":"wheel","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
