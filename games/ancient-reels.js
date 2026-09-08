export const game={id:'ancient-reels',name:'Ancient Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
