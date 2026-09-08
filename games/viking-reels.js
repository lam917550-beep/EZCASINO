export const game={id:'viking-reels',name:'Viking Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
