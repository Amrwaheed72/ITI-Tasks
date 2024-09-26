const square = document.getElementById('square');
const squareContainer = document.getElementById('squareContainer');
let animationFrame;
let moving = false;
let paused = false;
let hovered = false;
let position = { top: 0, left: 0 }; 
let speed = 2;
let direction = 'right'; 

const startMovement = () => {
    if (!moving || paused) {
        moving = true;
        paused = false;
        animateSquare();
    }
};

const stopMovement = () => {
    cancelAnimationFrame(animationFrame);
    moving = false;
    paused = false;
    resetPosition();
};

const pauseMovement = () => {
    cancelAnimationFrame(animationFrame);
    paused = true;
    moving = false;
};

const resetPosition = () => {
    position = { top: 0, left: 0 };
    square.style.top = position.top + 'px';
    square.style.left = position.left + 'px';
};

const hoverPause = () => {
    if (moving) {
        hovered = true;
        cancelAnimationFrame(animationFrame); 
    }
};

const hoverResume = () => {
    if (hovered && moving) {
        hovered = false;
        animateSquare(); 
    }
};

const animateSquare = () => {
    if (direction === 'right') {
        position.left += speed;
        if (position.left >= 550) direction = 'down'; 
    } else if (direction === 'down') {
        position.top += speed;
        if (position.top >= 410) direction = 'left'; 
    } else if (direction === 'left') {
        position.left -= speed;
        if (position.left <= 0) direction = 'up';
    } else if (direction === 'up') {
        position.top -= speed;
        if (position.top <= 0) direction = 'right';
    }

    square.style.top = position.top + 'px';
    square.style.left = position.left + 'px';

    if (moving && !hovered) { 
        animationFrame = requestAnimationFrame(animateSquare);
    }
};

document.getElementById('startBtn').addEventListener('click', startMovement);
document.getElementById('pauseBtn').addEventListener('click', pauseMovement);
document.getElementById('stopBtn').addEventListener('click', stopMovement);

square.addEventListener('mouseover', hoverPause);
square.addEventListener('mouseout', hoverResume);

resetPosition();