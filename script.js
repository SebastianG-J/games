const questions = [
    {
        question: "What's the best flavor of ice cream?",
        options: ["Chocolate", "Vanilla", "Strawberry", "Pickle"],
        correctAnswer: "Pickle",
        comments: {
            correct: "You have an adventurous palate!",
            incorrect: "Well, everyone has their own taste..."
        }
    },
    // Add more questions with options and correct answers
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;

    // Clear previous answers
    answersElement.innerHTML = "";

    // Display answer options
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("answer");
        button.textContent = option;
        button.onclick = function() {
            checkAnswer(this);
        };
        answersElement.appendChild(button);
    });

    // Clear result message
    resultElement.textContent = "";
}

function checkAnswer(selectedButton) {
    const resultElement = document.getElementById("result");

    if (selectedButton.textContent === questions[currentQuestion].correctAnswer) {
        resultElement.textContent = questions[currentQuestion].comments.correct;
    } else {
        resultElement.textContent = questions[currentQuestion].comments.incorrect;
        setTimeout(function () {
            resultElement.textContent = "Game Over!";
            document.getElementById("play-again").style.display = "block";
        }, 2000); // Display "Game Over!" after 2 seconds
    }

    // Move to the next question or end the game
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(displayQuestion, 2000); // Display next question after 2 seconds
    } else {
        setTimeout(function () {
            resultElement.textContent = "Game Over!";
            document.getElementById("play-again").style.display = "block";
        }, 2000); // Display "Game Over!" after 2 seconds
    }
}

// Start the game
displayQuestion();

function playAgain() {
    currentQuestion = 0;
    displayQuestion();
    document.getElementById("result").textContent = "";
    document.getElementById("play-again").style.display = "none";
}
