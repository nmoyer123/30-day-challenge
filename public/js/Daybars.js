  const newFormHandler = async (event) => {
    event.preventDefault();

      // const formData = new FormData(form);
      // const data = {
      //     run_check: formData.get('run_check') === 'on',
      //     water_check: formData.get('water_check'),
      //     page_check: formData.get('page_check'),
      //     alcohol_check: formData.get('alcohol_check') === 'on',
      //     workout_check: formData.get('workout_check'),
      //     sleep_check: formData.get('sleep_check')
      // };

      const runCheck = document.querySelector('#run-check').value.trim();
      const waterCheck = document.querySelector('#water-check').value.trim();
      const pageCheck = document.querySelector('#page-check').value.trim();
      const alcoholCheck = document.querySelector('#alcohol-check').value.trim();
      const workoutCheck = document.querySelector('#workout-check').value.trim();
      const sleepCheck = document.querySelector('#sleep-check').value.trim();

      if (runCheck && waterCheck && pageCheck && alcoholCheck && workoutCheck && sleepCheck) {
        const response = await fetch(`/api/day`, {
          method: 'POST',
          body: JSON.stringify({runCheck, waterCheck, pageCheck, alcoholCheck, workoutCheck, sleepCheck}),
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