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

