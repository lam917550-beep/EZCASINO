export const game={id:'treasure-chest',name:'Rương Kho Báu',category:'Rương'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
