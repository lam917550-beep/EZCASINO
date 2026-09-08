export const game={id:'mega-wheel',name:'Mega Wheel',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
