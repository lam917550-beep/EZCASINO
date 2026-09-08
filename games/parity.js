export const game={id:'parity',name:'Chẵn Lẻ',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
