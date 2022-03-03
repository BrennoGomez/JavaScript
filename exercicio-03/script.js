alert("Bem-vindo!")

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = document.getElementById("txtano")
    var resultado = document.getElementById("resultado")

    if(formAno.value.length == 0 || formAno.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var formSexo = document.getElementsByName("radsexo")
        var idade = ano - Number(formAno.value)
        
        var genero = ''

        //criando um elemento 'img' com o 'id=foto' no HTML via JavaScript
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formSexo[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }

        } else {
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }

        resultado.innerHTML = `Você é ${genero} e tem ${idade} anos de idade <br>`
        resultado.appendChild(img)
    }
}