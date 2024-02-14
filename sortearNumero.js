
const elementoMenor = document.getElementById('menor-valor');
const elementoMaior = document.getElementById('maior-valor');
const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio(){
    return parseInt(Math.random()* maiorValor + 1);
}


elementoMenor.innerHTML = menorValor
elementoMaior.innerHTML = maiorValor