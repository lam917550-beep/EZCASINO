export const game={id:'vault',name:'Hầm Vàng',category:'Ô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
