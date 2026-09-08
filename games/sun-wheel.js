export const game = {"id":"sun-wheel","name":"Vòng Mặt Trời","category":"Vòng quay","mechanic":"crash","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
