export const game={id:'fortune-tree',name:'Cây Phú Quý',category:'Cây'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
