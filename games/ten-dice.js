export const game={id:'ten-dice',name:'Mười Xúc Xắc',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
