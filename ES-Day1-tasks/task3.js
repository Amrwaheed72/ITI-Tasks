const form = document.getElementById('projectForm');
const inputFieldsContainer = document.getElementById('inputFieldsContainer');
const outputContainer = document.getElementById('outputContainer');
const errorMsg = document.getElementById('errorMsg');

const keyPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
const project = {};

document.getElementById('addPairBtn').addEventListener('click', () => {
    const keyInput = document.getElementById('key').value.trim();
    const valueInput = document.getElementById('value').value.trim();

    if (!keyPattern.test(keyInput)) {
        errorMsg.innerText = "Invalid key name. Key must start with a letter, $, or _ and contain only alphanumeric characters.";
        return;
    }

    if (!valueInput) {
        errorMsg.innerText = "Value cannot be empty.";
        return;
    }

    project[keyInput] = valueInput;

    document.getElementById('key').value = '';
    document.getElementById('value').value = '';
    errorMsg.innerText = ''; // Clear error message

    alert(`Key-Value pair added: ${keyInput}: ${valueInput}`);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Object.keys(project).length === 0) {
        errorMsg.innerText = "Please add at least one key-value pair.";
        return;
    }

    project.printData = function () {
        let output = '<h3>Project Details:</h3>';
        for (const [key, value] of Object.entries(this)) {
            if (typeof value !== 'function') {
                output += `<p>${key}: ${value}</p>`;
            }
        }
        outputContainer.innerHTML = output;
    };

    project.printData();

    document.getElementById('key').value = '';
    document.getElementById('value').value = '';
    errorMsg.innerText = ''; 
});