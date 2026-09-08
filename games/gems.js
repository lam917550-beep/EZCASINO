export const game={id:'gems',name:'Kho Báu Ngọc',category:'Ô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
