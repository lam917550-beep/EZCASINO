export const game={id:'fortune-stamp',name:'Con Dấu May Mắn',category:'Con dấu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
