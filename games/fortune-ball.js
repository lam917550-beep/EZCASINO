export const game={id:'fortune-ball',name:'Quả Cầu Tiên Tri',category:'Quả cầu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
