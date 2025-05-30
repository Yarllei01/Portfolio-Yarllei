// script.js

// Banco de perguntas para o quiz
const questions = [
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek", "Pedro II"], answer: 0 },
    { question: "Em que ano ocorreu a Proclamação da República no Brasil?", options: ["1822", "1889", "1945", "1964"], answer: 1 },
    { question: "Quem foi o líder da Inconfidência Mineira?", options: ["Tiradentes", "Dom Pedro I", "Zumbi dos Palmares", "Joaquim Nabuco"], answer: 0 },
    { question: "Em que ano começou a Primeira Guerra Mundial?", options: ["1905", "1914", "1939", "1945"], answer: 1 },
    { question: "Qual desses países não participou da Segunda Guerra Mundial?", options: ["Brasil", "Japão", "Suíça", "Itália"], answer: 2 }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Embaralha a ordem das perguntas
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Inicia o jogo e exibe a primeira pergunta
function startGame() {
    shuffleQuestions();
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    loadQuestion();
}

// Carrega a pergunta atual e exibe as alternativas
function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
document.getElementById('question-number').innerText = currentQuestionIndex + 1;
    document.getElementById('question-text').innerText = questionObj.question;
    document.getElementById('feedback').innerText = '';
    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('btn-enviar').classList.remove('hidden'); // Mostra o botão Enviar
    document.querySelectorAll('input[name="option"]').forEach(input => input.disabled = false);

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Cria as opções de resposta como radio buttons
    questionObj.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = index;
        input.id = `option${index}`;
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.innerText = option;
        
        optionElement.appendChild(input);
        optionElement.appendChild(label);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById('feedback').innerText = '';
}

function enviarResposta() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma alternativa.");
        return;
    }
    
    const answer = parseInt(selectedOption.value);
    const questionObj = questions[currentQuestionIndex];
    
    // Verifica se a resposta está correta
    if (answer === questionObj.answer) {
        correctAnswers++;
        document.getElementById('feedback').innerText = "Resposta correta!";
        // Desabilita as opções após acertar
        document.querySelectorAll('input[name="option"]').forEach(input => input.disabled = true);
        // Mostra o botão "Próxima" e esconde o "Enviar"
        document.getElementById('btn-next').classList.remove('hidden');
        document.getElementById('btn-enviar').classList.add('hidden');
    } else {
        wrongAnswers++;
        document.getElementById('feedback').innerText = "Resposta incorreta. Tente novamente!";
        // Permite tentar novamente: mantém as opções habilitadas e o botão "Enviar" visível
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('btn-enviar').classList.remove('hidden');
        // Desabilita apenas a opção errada selecionada
        selectedOption.disabled = true;
    }
}

function nextQuestion() {
    // Verifica condições de vitória ou derrota
    if (correctAnswers >= 5) {
        endGame(true);
    } else if (wrongAnswers >= 5) {
        endGame(false);
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endGame(correctAnswers >= 5);
        }
    }
}

// Finaliza o jogo e exibe o resultado
function endGame(won) {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('result-message').innerText = won ? "Parabéns! Você venceu o jogo!" : "Que pena! Você perdeu o jogo.";
}

// Reinicia o jogo e embaralha as perguntas
function restartGame() {
    shuffleQuestions();
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}
