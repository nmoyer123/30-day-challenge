document.addEventListener('DOMContentLoaded', () => {
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
  