const questions = [
    {
        question: "What is the capital of France?",
        answer: "paris",
        image: "https://wallpaperaccess.com/full/1192224.jpg"
    },
    {
        question: "What is the capital of Japan?",
        answer: "tokyo",
        image: "https://www.fodors.com/wp-content/uploads/2020/04/11_UltimateTokyofromHome__HERO_jezael-melgoza-_noSmX8Kgoo-unsplash.jpg"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        answer: "riyadh",
        image: "https://cdn.britannica.com/14/189714-050-0A674D18/Kingdom-Centre-Riyadh-Saudi-Arabia.jpg"
    }
];
let questionIndex = 0;
let score = 0;
let timer = 30;



const correctAnswer = "Paris";
const displyResult = document.querySelector('#result1');
const scoreDisplay = document.querySelector('#score')
const timeRoaming = document.querySelector('#time')

function StartQuiz() {
    document.getElementById('nextButton').addEventListener('click', checkAnswer);
}

function checkAnswer() {
    const userInput = document.getElementById('answerInput').value.toLowerCase();
    const correctAnswer = questions[questionIndex].answer;

    if (userInput === correctAnswer) {
        displyResult.textContent = "Correct Answer !";

        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        displyResult.textContent = "Wrong Answer !";
    }
}

StartQuiz();