export const game = {"id":"fire-wheel","name":"Bánh Xe Lửa","category":"Vòng quay","mechanic":"keno","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
