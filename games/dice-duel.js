export const game={id:'dice-duel',name:'Đấu Xúc Xắc',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
