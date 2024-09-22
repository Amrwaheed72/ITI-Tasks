class Shape {
    constructor(color) {
        this.color = color;
    }

    get color() {
        return this.color;
    }

    set color(newColor) {
        this.color = newColor;
    }

    drawShape() {
        console.log(`Shape color is: ${this.color}`);
    }
}

export default Shape;