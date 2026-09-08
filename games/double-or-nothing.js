export const game={id:'double-or-nothing',name:'Gấp Đôi Hay Mất',category:'Lật'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
