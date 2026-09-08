export const game={id:'lantern-fest',name:'Đèn Lồng May Mắn',category:'Đèn'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
