export const game={id:'cat-fortune',name:'Mèo Phú Quý',category:'Mèo'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
