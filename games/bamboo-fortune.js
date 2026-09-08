export const game={id:'bamboo-fortune',name:'Tre May Mắn',category:'Tre'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
