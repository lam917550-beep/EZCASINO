export const game={id:'three-cups',name:'Ba Cốc',category:'Cốc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
