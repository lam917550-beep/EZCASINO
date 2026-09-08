export const game={id:'phoenix-reels',name:'Phoenix Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
