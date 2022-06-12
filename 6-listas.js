console.log(`Trabalhando com listas`);

// não é uma boa prática;
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro` ;
//console.log(salvador,saoPaulo,rioDeJaneiro);

// Boa prática
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Goiania`) // adicionando um item à lista

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // remove item da lista (posição,número de itens)
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[3]); // exibe apenas oa índicea da lista


