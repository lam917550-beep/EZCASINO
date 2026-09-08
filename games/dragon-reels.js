export const game={id:'dragon-reels',name:'Dragon Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
