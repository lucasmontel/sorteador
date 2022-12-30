/*O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).*/
function calcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;    
    let resultado = parseInt(peso / (altura*altura));
    resultadoString = resultado.toString();

    let linha = document.getElementById("resposta");
    linha.innerHTML = "Seu IMC é: " + resultadoString;       
}



