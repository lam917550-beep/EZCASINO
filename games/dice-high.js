export const game={id:'dice-high',name:'Xúc Xắc Cao',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
