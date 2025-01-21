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
    },
    {
        question: "What is the value",
        answer: "25",
        image: "/assets/image2.png"
    },
    {
        question: "What is the value",
        answer: "100",
        image: "/assets/image3.png"
    },
    {
        question: "What is the value",
        answer: "0.25",
        image: "/assets/image1.png"
    }
];

let questionIndex = 0;
let score = 0;

const displayResult = document.querySelector('#result1');
const displayResult1 = document.querySelector('#result2');
const scoreDisplay = document.querySelector('#score');
const questionText = document.querySelector('#question');
const questionImage = document.querySelector('#question-image');
const pageDisplay = document.querySelector('#page');

let limitQestion = [];
const checkquiz = 'geo'; 


function StartQuiz(checkquiz) {

    if (checkquiz === 'math') {
        limitQestion = questions.slice(3, 6);
    } else if (checkquiz === 'geo') {
        limitQestion = questions.slice(0, 3);
    }

    document.getElementById('nextButton').addEventListener('click', checkAnswer);
    document.getElementById('subButton').addEventListener('click', displayQuestion);
    displayQuestion();
}

function displayQuestion() {
    if (questionIndex < limitQestion.length) {
        questionText.textContent = limitQestion[questionIndex].question;
        questionImage.src = limitQestion[questionIndex].image;
        pageDisplay.textContent = `${questionIndex + 1}/${limitQestion.length}`;
        document.getElementById('answerInput').value = '';
        displayResult1.textContent = '';
        displayResult.textContent = '';
    } else {
        displayResult1.textContent = `Quiz Over! Your final score is:  ${score}`;
        document.getElementById('nextButton').disabled = true;
        document.getElementById('subButton').disabled = true;
    }
}

function checkAnswer() {
    const userInput = document.getElementById('answerInput').value.toLowerCase();
    const correctAnswer = limitQestion[questionIndex].answer;

    if (userInput === correctAnswer) {
        displayResult.textContent = "Correct Answer!";
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        displayResult.textContent = "Wrong Answer!";
    }

    questionIndex++;
}

StartQuiz(checkquiz); 