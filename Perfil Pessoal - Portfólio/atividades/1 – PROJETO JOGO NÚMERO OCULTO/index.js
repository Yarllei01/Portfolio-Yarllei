const num_random = parseInt(Math.random() * (100 + 1)); 
const msg = document.getElementById("msg");
const msg2 = document.getElementById("msg2");
let tentativas = 5;

function adivinhar() {
    const num = parseInt(document.getElementById('palpite').value);
    
    if (tentativas > 0) {
        tentativas--;
        
        if (num === num_random) {
            msg.innerHTML = `Parabéns! Você acertou o número: ${num_random}.`;
            msg2.innerHTML = ''; // Limpa a mensagem de tentativas
            document.getElementById('palpite').disabled = true; // Desativa o input
        } else if (num > num_random) {
            msg.innerHTML = `Errou! O número é menor. Você tem ${tentativas} tentativas restantes.`;
        } else {
            msg.innerHTML = `Errou! O número é maior. Você tem ${tentativas} tentativas restantes.`;
        }
        
        if (tentativas === 0 && num !== num_random) {
            msg.innerHTML = `Tente novamente! O número era: ${num_random}.`;
            document.getElementById('palpite').disabled = true; // Desativa o input
        }
    }
}
