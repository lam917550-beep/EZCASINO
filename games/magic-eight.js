export const game={id:'magic-eight',name:'Magic 8',category:'Quả cầu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
