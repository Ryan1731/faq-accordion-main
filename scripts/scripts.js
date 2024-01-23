const questionButtons = document.querySelectorAll(".question-text");

questionButtons.forEach((button, index) => {
    button.id = `button-${index + 1}`;
    button.addEventListener("click", () => displayAnswer(button, index));
});

function displayAnswer(button, index) {
    toggleAnsVisibility(index);
    toggleIcon(button);
}

function toggleAnsVisibility(index) {
    let correspondingQuestionButton = document.getElementById(`button-${index + 1}`).parentElement;
    correspondingQuestionButton.classList.toggle("toggleFAQ");
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
