document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    for (let i = 1; i <= 30; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = `Day ${i}`;
        box.addEventListener('click', () => {
            window.location.href = `/day/${i}`;
        });
        container.appendChild(box);
    }
});
