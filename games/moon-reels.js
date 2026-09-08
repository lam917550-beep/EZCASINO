export const game={id:'moon-reels',name:'Moon Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
