export const game={id:'yes-no',name:'Có / Không',category:'Quả cầu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
