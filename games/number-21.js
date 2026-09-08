export const game={id:'number-21',name:'Số 21',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
