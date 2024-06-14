document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.container');
  const modal = document.getElementById('challenge-modal');
  const closeModal = document.querySelector('.close');
  const dayTitle = document.getElementById('day-title');
  const submitButton = document.getElementById('submit-tasks');
  
  const challenges = [
      "Run/Walk for 30 minutes",
      "Drink a Gallon of Water a day",
      "Read 8 pages of a book",
      "No Alcohol",
      "Workout 45 minutes a day",
      "More than 7 hours of sleep"
  ];
  
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

  submitButton.addEventListener('click', () => {
      const completedTasks = [];
      for (let i = 1; i <= challenges.length; i++) {
          const task = document.getElementById(`task${i}`);
          if (task.checked) {
              completedTasks.push(challenges[i-1]);
          }
      }
      console.log("Completed tasks for the day:", completedTasks);
      modal.style.display = 'none';
      alert("Tasks submitted!");
  });
});

    const showChallenges = (day) => {
      const challengesDiv = document.getElementById(`challenges-${day}`);
      if (challengesDiv.classList.contains('d-none')) {
        challengesDiv.classList.remove('d-none');
      } else {
        challengesDiv.classList.add('d-none');
      }
    };
    window.showChallenges = showChallenges;
  });
  
