// Praticando funções

//1. exemplo do número par ou ímpar:

function parOuImpar(numero) {
    if(numero % 2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}

console.log(parOuImpar(6))

//2. exemplo de somar entre dois números

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(13, 10))

//3. exemplo colocando um função dentro de uma variável. Exemplo do dobro de um número.

let variavel = function(x) {
    return x * 2
}

console.log(variavel(11))