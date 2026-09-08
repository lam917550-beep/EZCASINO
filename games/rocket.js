export const game={id:'rocket',name:'Tên Lửa',category:'Hệ số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
