class Shape {
    constructor(color) {
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    drawShape() {
        console.log(`Shape color is: ${this._color}`);
    }
}
export default Shape