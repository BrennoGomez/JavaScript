var dataAtual = new Date()
var diaDaSemana = dataAtual.getDay()

/*
0 - domingo 
1 - segunda-feira
2 - terça-feira
3 - quarta-feira
4 - quinta-feira
5 - sexta-feira
6 - sábado
*/

//console.log(diaDaSemana) comando ao lado traz o resultado em formato numérico, por conta do uso do método getDay()

switch (diaDaSemana) {
    case 0:
        console.log("domingo")
        break
    case 1:
        console.log("segunda-feira")
        break
    case 2:
        console.log("terça-feira")
        break
    case 3:
        console.log("quarta-feira")
        break
    case 4:
        console.log("quinta-feira")
        break
    case 5:
        console.log("sexta-feira")
        break
    case 6:
        console.log("sábado")
        break
    default:
        console.log("[Erro] Dia inválido")
}