export const game={id:'slot-machine',name:'Slot Machine',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
