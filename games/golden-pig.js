export const game={id:'golden-pig',name:'Heo Vàng',category:'Heo'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
