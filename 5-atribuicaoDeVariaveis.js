console.log("Trabalhando com atribuição variáveis");

const idade = 29;
const primeiroNome = "Viviane";
const sobrenome = "Antonio";

//console.log(nome + sobrenome); // concatena sem espaço
//console.log(nome + " " + sobrenome); // concatena variaveis + espaço
console.log(primeiroNome,sobrenome); // exibe de forma concatenada com espaço
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); // interpolação utilizando crase, cifrão e chaves

const nomeCompleto = primeiroNome + sobrenome; 
// nome = 2;    // erro ao tentar atribuir uma variável a uma constante
console.log(nomeCompleto);

let contador = 0;    // usar let para variaveis
contador = contador +1;
console.log(contador);

let sexo; // declarando
sexo = "f";  // atribuindo valor
sexo = "m";
console.log(sexo);


