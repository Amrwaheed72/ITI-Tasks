import Rectangle from './Rectangle.js'

export class Square extends Rectangle {
    constructor(color, side) {
        super(color, side, side);
    }

    drawSquare() {
        super.drawRectangle();
        console.log(`Square with side ${this.width}`);
    }
}

export default Square