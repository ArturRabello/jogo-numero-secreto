function exibeChuteNaTela(chute){
    elementoChute.innerHTML =
    `<div>Você disse: </div>
    <span class="box">${chute}</span>`
}

function verificarValidadeChute(chute){
    const numero = +chute;

    chutarInvalido(numero)? elementoChute.innerHTML = 
    `<div>Você disse: </div>
        <span class="box">${chute}</span>
    <div>valor inválido</div> `
    : ""

    numeroMaiorOuMenorQuePermitido(numero)? 
    elementoChute.innerHTML = 
    `<div>Você disse: </div>
        <span class="box">${chute}</span>
    <div>Valor inválido: O número secreto precisa está entre ${menorValor} e ${maiorValor}</div>`
    :""

    verificarIgualdadeNumSecreto(numero);
    
}

function chutarInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero < menorValor || numero > maiorValor
}

function removerPalavraNumero(numero) {
    const palavras = numero.split(' ');
    if(palavras[0] == "número"){
        return palavras[1];    
    }
    return numero;
    
}

function verificarIgualdadeNumSecreto(numero){
    if(numero == numeroSecreto){
        recognition.addEventListener('end', () => recognition.stop())
        return document.body.innerHTML = `
        <h2>Bom trabalho, você acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto} </h3>
        <button id="btn-start" class="btnStart">Jogar Novamente</button>`
    }else if(numero > numeroSecreto){
        return elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else if(numero < numeroSecreto){
        return elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}