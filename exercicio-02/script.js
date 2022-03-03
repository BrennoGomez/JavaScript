alert("Bem-vindo!")

function carregar() {

    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora}h.` 

    if(hora >= 0 && hora < 12) {
        //bom dia
        imagem.src = 'manha.jpg'
        document.body.style.background = "#e2cd9f"
    } else if(hora >= 12 && hora <= 18){
        //boa tarde
        imagem.src = 'tarde.jpg'
        document.body.style.background = "#b9846f"
    } else {
        //boa noite
        imagem.src = 'noite.jpg'
        document.body.style.background = "#515154"
    }
}
