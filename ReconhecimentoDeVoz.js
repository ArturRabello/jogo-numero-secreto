const SpeechRecognition = window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');
const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){

    chute = e.results[0][0].transcript;
    chute = removerPalavraNumero(chute);
    exibeChuteNaTela(chute);
    verificarValidadeChute(chute);
    
    
}

recognition.addEventListener('end', () => recognition.start())
