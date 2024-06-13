document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const modal = document.getElementById('challenge-modal');
  const closeModal = document.querySelector('.close');
  const dayTitle = document.getElementById('day-title');
  
  for (let i = 1; i <= 30; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.textContent = `Day ${i}`;
      box.addEventListener('click', () => {
          dayTitle.textContent = `Challenges for Day ${i}`;
          modal.style.display = 'flex';
      });
      container.appendChild(box);
  }

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
