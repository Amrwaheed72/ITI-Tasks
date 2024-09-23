import Shape from "./Shape.js";
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

export default Rectangle