export const game={id:'five-dice',name:'Năm Xúc Xắc',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
