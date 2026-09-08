export const game={id:'target-21',name:'Mục Tiêu 21',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
