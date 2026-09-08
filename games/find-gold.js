export const game={id:'find-gold',name:'Tìm Vàng',category:'Ô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
