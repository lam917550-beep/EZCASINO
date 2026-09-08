export const game={id:'dragon-egg',name:'Trứng Rồng',category:'Trứng'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
