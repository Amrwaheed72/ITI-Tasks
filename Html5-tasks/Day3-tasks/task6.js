const div = document.getElementById('myDiv');

div.style.width = window.innerWidth + 'px';
div.style.height = window.innerHeight + 'px';

function getSingleColor() {
    return '#000000'; 
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

div.addEventListener('click', function (event) {
    const rect = div.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    drawRectangle(x, y);
});

window.addEventListener('resize', function () {
    div.style.width = window.innerWidth + 'px';
    div.style.height = window.innerHeight + 'px';
});
