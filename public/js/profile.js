function showChallenges(day) {
    const challenges = document.getElementById(`challenges-${day}`);
    if (challenges.classList.contains('d-none')) {
      challenges.classList.remove('d-none');
    } else {
      challenges.classList.add('d-none');
    }
  }
  