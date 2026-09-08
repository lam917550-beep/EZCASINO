export const game={id:'find-gem',name:'Tìm Ngọc',category:'Ô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
