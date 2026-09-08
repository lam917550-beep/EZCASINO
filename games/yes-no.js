export const game = {"id":"yes-no","name":"Có / Không","category":"Quả cầu","mechanic":"keno","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
