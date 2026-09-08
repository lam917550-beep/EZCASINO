export const game={id:'dice-low',name:'Xúc Xắc Thấp',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
