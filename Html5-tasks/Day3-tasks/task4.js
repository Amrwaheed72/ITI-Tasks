function changeNumber(id, delta) {
    const element = document.getElementById(id);
    let number = parseInt(element.textContent);
    number = Math.max(0, number + delta); // Ensure the number doesn't go below 0
    element.textContent = number;
    updateResults();
}

function updateResults() {
    const addNum1 = parseInt(document.getElementById('add-num1').textContent);
    const addNum2 = parseInt(document.getElementById('add-num2').textContent);
    document.getElementById('add-result').textContent = `= ${addNum1 + addNum2}`;

    const mulNum1 = parseInt(document.getElementById('mul-num1').textContent);
    const mulNum2 = parseInt(document.getElementById('mul-num2').textContent);
    document.getElementById('mul-result').textContent = `= ${mulNum1 * mulNum2}`;
}