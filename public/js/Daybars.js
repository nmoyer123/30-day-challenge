  const newFormHandler = async (event) => {
    event.preventDefault();

      const run_check = document.querySelector('#run-check').value.trim();
      const water_check = document.querySelector('#water-check').value.trim();
      const page_check = document.querySelector('#page-check').value.trim();
      const alcohol_check = document.querySelector('#alcohol-check').value.trim();
      const workout_check = document.querySelector('#workout-check').value.trim();
      const sleep_check = document.querySelector('#sleep-check').value.trim();

      if (run_check && water_check && page_check && alcohol_check && workout_check && sleep_check) {
        const response = await fetch(`/api/day`, {
          method: 'POST',
          body: JSON.stringify({run_check, water_check, page_check, alcohol_check, workout_check, sleep_check}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to send data');
        }
      }
  };


document.querySelector('.day-form').addEventListener('submit', newFormHandler)