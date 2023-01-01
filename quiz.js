const quizForm = document.querySelectorAll(".question-container");
const submitAnswerBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output');

const correctAnswers = ["90°","right angled", "isosceles"];

function calculateScore() {
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);


}
submitAnswerBtn.addEventListener('click',calculateScore);
