export const game={id:'tower',name:'Tháp May Mắn',category:'Tháp'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
