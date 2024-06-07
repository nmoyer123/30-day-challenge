document.getElementById('logout-btn').addEventListener('click', async () => {
    const response = await fetch('/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/'); // Redirect to the homepage or login page after logout
    } else {
      alert('Logout failed. Please try again.'); // Show an alert if the logout request fails
    }
  });
  