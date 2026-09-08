export const game={id:'golden-eggs',name:'Trứng Vàng',category:'Trứng'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
