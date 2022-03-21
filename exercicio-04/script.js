alert("Bem-vindo ao teste!")

function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    // verificando se contém dados nos inputs
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        
        //convertendo as strings recebidas através dos inputs em number
        let _inicio = Number(inicio.value)
        let _fim = Number(fim.value)
        let _passo = Number(passo.value)

        if(_passo <= 0) {
            alert("Passo inválido! Considerando como PASSO = 1")
            _passo = 1
        }

        if(_inicio < _fim){
            //contagem crescente
            for(let contador = _inicio; contador <= _fim; contador += _passo){
                resultado.innerHTML += `${contador} \u{1F449} `
            }
        } else {
            //contagem decrescente
            for(let contador = _inicio; contador >= _fim; contador -= _passo){
                resultado.innerHTML += `${contador} \u{1F449} `
            }
        }
        //finalizando contagem com emoji
        resultado.innerHTML += `\u{1F3C1}` 
    }
}           