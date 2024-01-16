let questionButtons = document.querySelectorAll(".question-text");
let answerTexts = document.querySelectorAll(".faq-answer");

// Add ID to answer texts after HTML has finished loading
window.onload = function() {
    answerTexts.forEach((answer, index) => {
        answer.id = `answer-${index + 1}`;
    });
}

questionButtons.forEach((button, index) => {
    button.id = `button-${index + 1}`;
    button.addEventListener("click", () => displayAnswer(index));
});

function displayAnswer(index) {
    let correspondingAnswer = document.getElementById(`answer-${index + 1}`);
    correspondingAnswer.classList.toggle("closed");
    console.log(`question button ${index + 1} clicked`);
    console.log(correspondingAnswer);
}

