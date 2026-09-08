export const game={id:'lucky-777',name:'Lucky 777',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
