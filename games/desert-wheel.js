export const game={id:'desert-wheel',name:'Bánh Xe Sa Mạc',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
