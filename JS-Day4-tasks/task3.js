function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const examType = document.getElementById('examType').value;
    const location = document.getElementById('location').value;

    const newWindow = window.open('', '', 'width=600,height=600');
    if (newWindow) {
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Exam Details</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        padding: 20px;
                    }
                    .header {
                        font-size: 24px;
                        margin-bottom: 20px;
                    }
                    .details {
                        font-size: 18px;
                        margin-bottom: 20px;
                        display: inline-block;
                    }
                    .question {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    .answers {
                        text-align: left;
                        display: inline-block;
                        margin-bottom: 20px;
                    }
                    .answers label {
                        display: block;
                        margin-bottom: 5px;
                    }
                    .submit-button:disabled {
                        background-color: gray;
                        cursor: not-allowed;
                    }
                    .result {
                        font-size: 20px;
                        margin-top: 20px;
                        font-weight: bold;
                    }
                    .correct {
                        color: green;
                    }
                    .incorrect {
                        color: red;
                    }
                </style>
                <script>
                    const correctAnswers = ['answer2', 'answer3', 'answer1']; // Correct answers for questions

                    function checkAnswers() {
                        const question1Answered = document.querySelector('input[name="answer1"]:checked') !== null;
                        const question2Answered = document.querySelector('input[name="answer2"]:checked') !== null;
                        const question3Answered = document.querySelector('input[name="answer3"]:checked') !== null;
                        const submitButton = document.querySelector('.submit-button');
                        
                        submitButton.disabled = !(question1Answered && question2Answered && question3Answered);
                    }

                    function calculateScore() {
                        let score = 0;
                        const userAnswers = [
                            document.querySelector('input[name="answer1"]:checked').value,
                            document.querySelector('input[name="answer2"]:checked').value,
                            document.querySelector('input[name="answer3"]:checked').value
                        ];

                        const resultDiv = document.querySelector('.result');
                        resultDiv.innerHTML = '';

                        for (let i = 0; i < correctAnswers.length; i++) {
                            if (userAnswers[i] === correctAnswers[i]) {
                                score++;
                                resultDiv.innerHTML += '<p class="correct">Question ' + (i + 1) + ': Correct</p>';
                            } else {
                                resultDiv.innerHTML += '<p class="incorrect">Question ' + (i + 1) + ': Incorrect</p>';
                            }
                        }

                        resultDiv.innerHTML += '<p>Your final score: ' + score + ' out of ' + correctAnswers.length + '</p>';
                    }
                </script>
            </head>
            <body>
                <div class="container">
                    <div class="header">The ${examType} Exam </div>
                    <div class="details">
                        <p>Name: ${name}</p> <p>Type of Exam: ${examType}</p>
                        <p>Duration: 2 hours</p>
                    </div>
                    <div class="question">
                        <p>Question 1: Title</p>
                        <div class="answers">
                            <label><input type="radio" name="answer1" value="answer1" onclick="checkAnswers()"> answer1</label>
                            <label><input type="radio" name="answer1" value="answer2" onclick="checkAnswers()"> answer2</label>
                            <label><input type="radio" name="answer1" value="answer3" onclick="checkAnswers()"> answer3</label>
                            <label><input type="radio" name="answer1" value="answer4" onclick="checkAnswers()"> answer4</label>
                        </div>
                    </div>
                    <div class="question">
                        <p>Question 2: Title</p>
                        <div class="answers">
                            <label><input type="radio" name="answer2" value="answer1" onclick="checkAnswers()"> answer1</label>
                            <label><input type="radio" name="answer2" value="answer2" onclick="checkAnswers()"> answer2</label>
                            <label><input type="radio" name="answer2" value="answer3" onclick="checkAnswers()"> answer3</label>
                            <label><input type="radio" name="answer2" value="answer4" onclick="checkAnswers()"> answer4</label>
                        </div>
                    </div>
                    <div class="question">
                        <p>Question 3: Title</p>
                        <div class="answers">
                            <label><input type="radio" name="answer3" value="answer1" onclick="checkAnswers()"> answer1</label>
                            <label><input type="radio" name="answer3" value="answer2" onclick="checkAnswers()"> answer2</label>
                            <label><input type="radio" name="answer3" value="answer3" onclick="checkAnswers()"> answer3</label>
                            <label><input type="radio" name="answer3" value="answer4" onclick="checkAnswers()"> answer4</label>
                        </div>
                    </div>
                    <button class="submit-button" disabled onclick="calculateScore()">Submit</button>
                    <div class="result"></div>
                </div>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
}
