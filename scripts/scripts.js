document.addEventListener("DOMContentLoaded", () => {
    const faqContainer = document.querySelector(".faq-container");

    faqContainer.addEventListener("click", (event) => {
        const button = event.target.closest(".faq-question");
        if (button) {
            toggleAnsVisibility(button);
            toggleIcon(button);
            closeOtherButtons(button);
        }
    });
});

function toggleAnsVisibility(button) {
    const answer = button.querySelector(".faq-answer");
    const newHeight = answer.offsetHeight + 100; //add 100px to account for original max height (75px) and original bottom padding (25px).

    button.classList.toggle("toggleFAQ");

    if (button.classList.contains("toggleFAQ")) {
        button.style.maxHeight = newHeight + "px";
    }
    else {
        button.style.maxHeight = "75px";
    } 
}

function toggleIcon(button) {
    const iconIndicator = button.querySelector(".icon-indicator");
    iconIndicator.classList.toggle("icon-plus");
    iconIndicator.classList.toggle("icon-minus");
}

function closeOtherButtons(currentButton) {
    const allButtons = document.querySelectorAll(".faq-question");
    allButtons.forEach(button => {
        if (button !== currentButton && button.classList.contains("toggleFAQ")) {
            toggleAnsVisibility(button);
            toggleIcon(button);
        }
    })
}