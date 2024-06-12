//show challenges for a specific day
async function showChallenges(day) {
    // get  container element for challenges 
    const challengesContainer = document.getElementById(`challenges-${day}`);
  
    // check if container is hidden
    if (challengesContainer.classList.contains('d-none')) {
      // GET request to fetch challenges
      const response = await fetch(`/challenges/${day}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      //if the request was successful
      if (response.ok) {
        //parse JSON response to get challenges
        const challenges = await response.json();
        
        // get the list element inside the challenges container
        const challengesList = challengesContainer.querySelector('ul');
        
        //clear any existing challenges
        challengesList.innerHTML = '';
  
        //populate the list 
        challenges.forEach(challenge => {
          const li = document.createElement('li');
          li.textContent = challenge;
          challengesList.appendChild(li);
        });
  
        // make challenges visible
        challengesContainer.classList.remove('d-none');
      } else {
        // shows alert if request failed
        alert('Failed to load challenges. Please try again.');
      }
    } else {
      // hide the challenges container if it is currently visible
      challengesContainer.classList.add('d-none');
    }
  }
  