const botao = document.querySelector("div.box button"); //Aqui temos o endereço
var NumeroSorteado = document.querySelector("div.box h1");
var roleta = []; //Onde  ficará a nosssa lista de valores para sortear 

for(i = 0;i <= 50 ;i++){ //Aqui fazemos o for adicionar 50 numeros ao fim de "roleta" usando "roleta.push(i)" selecionamos o i para adicionar , se  não , não tem resultado 
    roleta.push(i);
}

botao.addEventListener('click', () => {
    NumeroSorteado.innerHTML = 'O numero sorteado :' + roleta[Math.floor(Math.random() * roleta.length)]
});

//Como selecionaos o botão lá atrás , quando o botaõ for clicado , ele irá chamar uma arrow function e adcionar ao seu HTML "numero sorteado e:" e mais a roleta com o seu sistema de sortear com MathRandom e Mathfloor para arrendondar para baixo

//sintaxe:"(Math.random() * roleta.length)]" vezes a roleta que você quer sortear





