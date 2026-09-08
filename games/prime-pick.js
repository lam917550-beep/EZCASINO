export const game={id:'prime-pick',name:'Chọn Số Nguyên Tố',category:'Số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
