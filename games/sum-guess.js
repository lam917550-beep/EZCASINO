export const game={id:'sum-guess',name:'Đoán Tổng',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
