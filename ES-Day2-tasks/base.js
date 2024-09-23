import Rectangle from './Rectangle.js';
import Square from './Square.js'
import Circle from './Circle.js';

const rectangle = new Rectangle('Red', 5, 10);
const square = new Square('Blue', 4);
const circle = new Circle('Green', 7, 0, 0);

console.log(`Rectangle Area: ${rectangle.getArea()}`);
console.log(`Square Area: ${square.getArea()}`);
console.log(`Circle Area: ${circle.getArea()}`);
