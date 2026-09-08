export const game={id:'range-pick',name:'Chọn Khoảng',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
