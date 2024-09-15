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
                        display:inline-block
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
                </style>
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
                            <label><input type="radio" name="answer1" value=""> answer1</label>
                            <label><input type="radio" name="answer1" value=""> answer2</label>
                            <label><input type="radio" name="answer1" value=""> answer3</label>
                            <label><input type="radio" name="answer1" value=""> answer4</label>
                        </div>
                    </div>
                    <div class="question">
                        <p>Question 2: Title</p>
                        <div class="answers">
                            <label><input type="radio" name="answer2" value=""> answer1</label>
                            <label><input type="radio" name="answer2" value=""> answer2</label>
                            <label><input type="radio" name="answer2" value=""> answer3</label>
                            <label><input type="radio" name="answer2" value=""> answer4</label>
                        </div>
                    </div>
                    <div class="question">
                        <p>Question 3: Title</p>
                        <div class="answers">
                            <label><input type="radio" name="answer3" value=""> answer1 </label>
                            <label><input type="radio" name="answer3" value=""> answer2</label>
                            <label><input type="radio" name="answer3" value=""> answer3</label>
                            <label><input type="radio" name="answer3" value=""> answer4</label>
                        </div>
                    </div>
                    <button class="submit-button" onclick="window.close()">Submit</button>
                </div>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
}