export const game={id:'mines',name:'Dò Mìn',category:'Ô bí mật'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
