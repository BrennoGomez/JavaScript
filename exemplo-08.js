var idade = 13
console.log(`Você tem ${idade} anos!`)

//condições alinhadas (if, else if e else)
if(idade < 16) {
    console.log("Infelizmente você não pode votar nesta eleição.")
} else if (idade < 18 || idade > 65){
    console.log("Seu voto na próxima eleição é opcional.")
} else {
    console.log("Voto obrigatório na próxima eleição.")
}