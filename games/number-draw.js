export const game={id:'number-draw',name:'Rút Số',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
