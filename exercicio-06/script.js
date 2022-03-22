alert("Bem-vindo ao teste!")

let numero = document.getElementById("formNumero")
let lista = document.getElementById("formLista")

let resposta = document.querySelector('div#resposta')

let valores = []

// verificação se número é válido e está entre 1 e 100
function isNumero(_numero) {
    if(Number(_numero) >= 1 && Number(_numero) <= 100) {
        return true
    } else {
        return false
    }
}

// buscando um número válido na lista. 
function inLista(_numero, _lista) {
    if(_lista.indexOf(Number(_numero)) != -1) {
        return true
    } else {
        return false
    }
} 

function adicionarNumero() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)){  // verifica se número é válido e não está na lista
        valores.push(Number(numero.value))                          // inserindo o número no array
        let item = document.createElement("option")                 // criando a option para exibição 
        item.text = `Valor ${numero.value} foi adicionado.`         // exibindo o valor na option do select
        lista.appendChild(item)                                     // adicionando o valor na option do select
        numero.innerHTML = ''                                     // limpando o resultado após nova inserção
    } else {
        alert("Valor inválido ou já encontrado na lista.")
    }

    numero.value = ''       //apagando o número anterior do input 
    numero.focus()          // deixando o campo clicável novamente
}

function finalizar() {
    if(valores.length == 0) {
        alert("Adicione valores para análise!")
    } else {
        let totalNumeros = valores.length
        //verificação do menor e maior número, a soma dos números e a média
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let posicao in valores){
            soma += valores[posicao]

            if(valores[posicao] > maior)
                maior = valores[posicao]

            if(valores[posicao] < menor)
                menor = valores[posicao]

        }
        media = soma / totalNumeros 
        
        resposta.innerHTML = ``         //zerando a resposta.
        resposta.innerHTML += `<p>Ao todo temos ${totalNumeros} números cadastrados.</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resposta.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
        resposta.innerHTML += `<p>A média entre os números informados é ${media}.</p>`
    }
}