let numbers = [50, 30, 80, 10, 20, 55, 23, 78, 45, 90, 12, 67];

let ascending = numbers.sort((a, b) => a - b);
console.log('Ascending:', ascending);

let descending = numbers.sort((a, b) => b - a);
console.log('Descending:', descending);



let filteredNumbers = numbers.filter(number => number > 50);
console.log('Numbers larger than 50:', filteredNumbers);

let maxNumber = Math.max(...numbers);

let minNumber = Math.min(...numbers);

console.log('Max Number:', maxNumber);
console.log('Min Number:', minNumber);
