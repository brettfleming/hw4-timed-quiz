const questions = [
    {question: "The best soccer player of all time?",
        answers: [ { text: "Messi", correct: true }, { text: "Neymar", correct: false }, { text: "Ronaldo", correct: false }, { text: "Pele", correct: false } ]
    },
    { question: "Which country has won the most World Cups?",
        answers: [ { text: "Italy", correct: false }, { text: "Germany", correct: false }, { text: "Spain", correct: false }, { text: "Brazil", correct: true } ]
    },
    { question: "Which player has the most ballon d'or awards?",
        answers: [ { text: "Ronaldinho", correct: false }, { text: "Johan Cruyff", correct: false }, { text: "Ronaldo", correct: false }, { text: "Messi", correct: true } ]
    },
    { question: "which team has won the most trebles?",
        answers: [ { text: "F.C. Bayern Munich", correct: true }, { text: "FC Barcelona", correct: true }, { text: "Manchester United F.C", correct: false }, { text: "Inter Milan", correct: false } ]
    },
    { question: "Which team has won the most FA cups?",
        answers: [ { text: "Liverpool", correct: false }, { text: "Chelsea", correct: false }, { text: "Manchester United", correct: false }, { text: "Arsenal", correct: true } ]
    },
    { question: "which goal keeper is the only the only one to win the ballon d'or?",
        answers: [ { text: "Peter Schmeichel", correct: false }, { text: "Lev Yashin", correct: true }, { text: "Manuel Neuer", correct: false }, { text: "Gianluigi Buffon", correct: false } ]
    },
    { question: "How many Champions league wins to AC Milan have?",
        answers: [ { text: "10", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }, { text: "4", correct: false } ]
    }
]
const  timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const startButton = document.getElementById("start_button");
const nextButton = document.getElementById("next_button");


// question elements 
const questionBoxEl = document.getElementById("question_container");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers");

let currentScore = 0;
let timeLeft = 30;

// current question is the index of the question being asked
let selectedQuestion 
let currentQuestion
let highscore = localStorage.getItem("highscore"); 
scoreEl.innerText = "Score: " + currentScore;
// highscore code still a work in progress
// function init() {
// if(highscore !== null){
//     if (score > highscore) {
//         localStorage.setItem("highscore", score);      
//     }
// }
// else{
//     localStorage.setItem("highscore", score);
// }
// }

function start() {
    startButton.classList.add("hidden");
    selectedQuestion = questions
    currentQuestion = 0;
    questionBoxEl.classList.remove("hidden");
    startTimer();
    nextQuestion();
}
function startTimer() {
   
    var timer = setInterval(function(){
    timerEl.innerHTML = "timer: " + timeLeft + " secs";
    timeLeft --;
    if (timeLeft < 0) {
        clearInterval(timer);
        gameOver();
    }
}, 1000);
}

function nextQuestion() {
    reset() 
    showQuestion(selectedQuestion[currentQuestion]);
    
}
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerEl.appendChild(button)
    });
}

    
   
function selectAnswer(event) {
    const selectedButton = event.target
    if (selectedButton.dataset.correct) {
        currentScore = currentScore + 10;
        scoreEl.innerText = "Score: " + currentScore;
    }
    if (selectedQuestion.length > currentQuestion) {
        nextButton.classList.remove("hidden") 
    } else {
        gameOver();
    }
    
}

function gameOver() {
    answerEl.classList.add("hidden");
    questionEl.innerText = "Game Over";
    
    
}

function reset() {
    nextButton.classList.add("hidden")
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

// init();

startButton.addEventListener("click", start);
nextButton.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
});