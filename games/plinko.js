export const game={id:'plinko',name:'Plinko',category:'Rơi bóng'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
