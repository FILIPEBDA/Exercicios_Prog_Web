let peso
let altura
let imc

function calcularImc(peso,altura) {
  return peso/(altura*altura);
}

peso = parseFloat(prompt("Digite o valor do peso em kg separado por ponto"))
altura = parseFloat(prompt("Digite o valor da altura em metros separado por ponto"))

imc = calcularImc(peso,altura)
console.log("O valor do imc dessa pessoa é:",imc)


if (imc>18.50 && imc<24.99){
    console.log("Peso Normal")}

    else if(imc>25.00 && imc<29.99){
    console.log("Peso Pré-obesidade")}

    else if (imc>30.00 && imc<34.99){
    console.log("Peso Obesidade Gral I")}

    else if (imc>35.00 && imc<39.99){
    console.log("Peso Obesidade Gral II")}

    else if (imc>40.00){
    console.log("Peso Obesidade Gral III")}