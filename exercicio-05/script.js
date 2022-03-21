alert("Bem-vindo ao teste!")

function gerarTabuada() {
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('seltabuada')

    if(numero.value.length == 0) {
        alert("[ERRO] Por favor, digite um número!")
    } else{
        //convertendo a string recebida do input em number
        let _numero = Number(numero.value)

        //solução para limpar o seletor da tabuada a cada novo número recebido
        tabuada.innerHTML = ''

        for(contador = 1; contador <= 10; contador++){
            let item = document.createElement('option')
            item.text = `${_numero} x ${contador} = ${_numero * contador}`
            item.value = `tabuada${contador}` //adiciona value ao option
            tabuada.appendChild(item)
        }
    }

}