const container = document.querySelector('.container');

container.addEventListener('click', () => {
    container.classList.remove('hover-enabled');

    container.classList.add('shrink');

    setTimeout(() => {
        container.classList.remove('shrink');
        container.classList.add('hover-enabled');
    }, 5000); 
});
document.querySelectorAll('.image-gallery img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('active');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.image-gallery img').forEach(img => {
            img.classList.remove('active');
        });
    }
});

document.querySelector('.container').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        event.currentTarget.classList.toggle('active');
    }
});
