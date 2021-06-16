const startButton = document.getElementById("start_button");
const questionEl = document.getElementById("question_container")
startButton.addEventListener("click", startGame);



function startGame() {
    startButton.classList.add("hide");
    questionEl.classList.remove("hide");
    nextQuestion();
}


function nextQuestion() {
    
}

function selectAnswer() {
    
}