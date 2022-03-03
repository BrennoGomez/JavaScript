var dataAtual = new Date()
var hora = dataAtual.getHours()
console.log(`Agora são exatamente ${hora}h!`)

if (hora >= 5 && hora < 12) {
    console.log("Bom dia!")
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!")
} else if (hora > 18 && hora < 24){
    console.log("Boa noite!")
} else {
    console.log("É madrugada!")
}