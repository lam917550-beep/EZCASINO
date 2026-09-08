export const game={id:'phoenix-egg',name:'Trứng Phượng',category:'Trứng'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
