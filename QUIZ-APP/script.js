const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text:  "Shark", correct: false},
            { text:  "Blue whale", correct: true},
            { text:  "Elephant", correct: false},
            { text:  "Cat", correct: false},
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text:  "Maharashtra", correct: false},
            { text:  "Gujrat", correct: false},
            { text:  "New Delhi", correct: true},
            { text:  "Bihar", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text:  "Neptune", correct: false},
            { text:  "Sun", correct: false},
            { text:  "Juipyter", correct: false},
            { text:  "Mars", correct: true},
        ]
    },
    {
        question: "How many continents are there in the world?",
        answers: [
            { text:  "1", correct: false},
            { text:  "5", correct: false},
            { text:  "9", correct: false},
            { text:  "7", correct: true},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion
    question;
}