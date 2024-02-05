// Funções em JS

let rebeca =
{
    nome: "Rebeca",
    idade: 16,
    altura: 1.56
}; // definir propriedades e valores

rebeca.peso = 50; // quando não há uma propriedade, ela se autocria se chamada na sintaxe

//chamada para o console
console.log(rebeca)

// atribuição de um novo objeto
let carolina = new Object();

carolina.nome = "Carolina",
carolina.idade = 16,
carolina.altura = 1.56,
carolina.peso = 50;

console.log(carolina)

let nomes  = [rebeca,carolina]

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i].nome)
    }