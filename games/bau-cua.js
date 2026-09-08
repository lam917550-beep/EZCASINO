export const game={id:'bau-cua',name:'Bầu Cua Tôm Cá',category:'Đồ hình'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
