export const game={id:'rainbow-reels',name:'Rainbow Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
