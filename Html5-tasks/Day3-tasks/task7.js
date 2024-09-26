const div = document.getElementById('myDiv');

div.style.width = window.innerWidth + 'px';
div.style.height = window.innerHeight + 'px';

function getSingleColor() {
    return '#000000'; // Single color
}

function drawRectangle(x, y) {
    const rect = document.createElement('div');
    rect.style.position = 'absolute';
    rect.style.left = (x - 25) + 'px';
    rect.style.top = (y - 25) + 'px';
    rect.style.width = '50px';
    rect.style.height = '50px';
    rect.style.backgroundColor = getSingleColor();
    div.appendChild(rect);
}

let isDrawing = false;

div.addEventListener('mousedown', function (event) {
    isDrawing = true;
    drawRectangleAtEvent(event);
});

div.addEventListener('mousemove', function (event) {
    if (isDrawing) {
        drawRectangleAtEvent(event);
    }
});

div.addEventListener('mouseup', function () {
    isDrawing = false;
});

div.addEventListener('mouseleave', function () {
    isDrawing = false;
});

function drawRectangleAtEvent(event) {
    const rect = div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    drawRectangle(x, y);
}

window.addEventListener('resize', function () {
    div.style.width = window.innerWidth + 'px';
    div.style.height = window.innerHeight + 'px';
});
