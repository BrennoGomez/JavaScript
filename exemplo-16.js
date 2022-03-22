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

//4. exemplo calculando o fatorial de um número

function fatorial(numero) {
    let fatorial = 1
    for(let contador = numero; contador > 1; contador --){
        fatorial *= contador
    }
    return fatorial
}

console.log(fatorial(5))

//5. exemplo utilizando a recursividade de uma função:

function calcularFatorial(numero) {
    if(numero == 1) {
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

console.log(calcularFatorial(5))