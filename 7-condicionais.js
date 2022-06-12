console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // remove item da lista (posição,número de itens)
// } else if (estaAcompanhada) {

//     console.log("Comprador está acompanhado de um adulto");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador não é maior de idade e não posso vender a passagem");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); // remove item da lista (posição,número de itens)
} else {
    console.log("Comprador não é maior de idade e não posso vender a passagem");
}

console.log("Embarque \n\n");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem!");
} else{
    console.log("Você não pode embarcar.");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);