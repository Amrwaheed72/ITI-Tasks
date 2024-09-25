const draggables = document.querySelectorAll('.draggable');
const dropSection = document.querySelector('.section-drop');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
        setTimeout(() => {
            e.target.classList.add('dragging');
        }, 0);
    });

    draggable.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

dropSection.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropSection.classList.add('active');
});

dropSection.addEventListener('dragleave', () => {
    dropSection.classList.remove('active');
});

dropSection.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    dropSection.appendChild(draggableElement);
    dropSection.classList.remove('active');

    // Keep the same styles as in the original section
    draggableElement.style.transform = "none";
});
