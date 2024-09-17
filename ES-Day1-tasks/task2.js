function calculate(operator, ...numbers) {
    let result;
    if (operator === 'sum') {
        result = numbers.reduce((acc, num) => acc + num, 0);
    } else if (operator === 'multiply') {
        result = numbers.reduce((acc, num) => acc * num, 1);
    } else {
        console.log('Unsupported operation');
        return;
    }
    console.log(`Result of ${operator} operation for ${numbers.join(', ')} is ${result}`);
}

calculate('sum', 3, 1, 6, 3); 
calculate('multiply', 3, 1, 6, 3);
