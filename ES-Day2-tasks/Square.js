import Shape from './Shape.js';

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    drawRectangle() {
        super.drawShape();
        console.log(`Rectangle with width ${this.width} and height ${this.height}`);
    }
}

class Square extends Rectangle {
    constructor(color, side) {
        super(color, side, side);
    }

    drawSquare() {
        super.drawRectangle();
        console.log(`Square with side ${this.width}`);
    }
}

export { Rectangle, Square };