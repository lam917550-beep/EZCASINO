export const game={id:'pick-a-door',name:'Chọn Cửa',category:'Cửa'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
