export const game={id:'lucky-number',name:'Con Số May Mắn',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
