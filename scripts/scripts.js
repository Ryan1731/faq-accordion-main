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
    button.addEventListener("click", () => displayAnswer(button, index));
});

function displayAnswer(button, index) {
    toggleAnsVisibility(index);
    toggleIcon(button);
}

function toggleAnsVisibility(index) {
    let correspondingAnswer = document.getElementById(`answer-${index + 1}`);
    correspondingAnswer.classList.toggle("closed");
}

function toggleIcon(button) {
    let openIndicator = button.querySelector("#open-indicator");
    if (openIndicator.classList.contains("icon-minus")) {
        openIndicator.classList.remove("icon-minus");  
        openIndicator.classList.add("icon-plus");  
    } 
    else if (openIndicator.classList.contains("icon-plus")) {
        openIndicator.classList.remove("icon-plus");  
        openIndicator.classList.add("icon-minus");  
    } 
}
