import Shape from "./Shape.js";

class Circle extends Shape {
    constructor(color, radius, x, y) {
        super(color);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    drawCircle() {
        super.drawShape();
        console.log(`Circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
    }
}

export default Circle