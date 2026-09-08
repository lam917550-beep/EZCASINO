export const game={id:'sun-wheel',name:'Vòng Mặt Trời',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
