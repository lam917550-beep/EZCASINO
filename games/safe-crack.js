export const game={id:'safe-crack',name:'Phá Két',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
