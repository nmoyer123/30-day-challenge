document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    for (let i = 1; i <= 30; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = `Day ${i}`;
        box.addEventListener('click', () => {
            localStorage.setItem('selectedDay', i);
            window.location.href = `/day?day=${i}`;
        });
        container.appendChild(box);
        
    }
  });
