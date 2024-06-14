document.addEventListener('DOMContentLoaded', () => {
  const day = localStorage.getItem('selectedDay'); // Retrieve the selected day from localStorage
  if (day) {
      document.getElementById('day').textContent = `Day ${day}`; // Set the day in the page content
  }


document.querySelector('.day-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const day = document.getElementById('day').textContent.split(' ')[1];
  const data = {
    day: day,
    run_check: document.getElementById('run-check').checked,
    water_check: document.getElementById('water-check').value,
    page_check: document.getElementById('page-check').value,
    alcohol_check: document.getElementById('alcohol-check').checked,
    workout_check: document.getElementById('workout-check').value,
    sleep_check: document.getElementById('sleep-check').value
  };

  const response = await fetch(`/api/challenges/day`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert('Challenges saved successfully!');
  } else {
    alert('Failed to save challenges.');
    }
  });
});
