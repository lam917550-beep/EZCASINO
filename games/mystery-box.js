export const game={id:'mystery-box',name:'Hộp Bí Ẩn',category:'Hộp'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
