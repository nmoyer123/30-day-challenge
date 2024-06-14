// Handle login form submission
document.querySelector('.login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      window.location.href = '/profile'; // Redirect to the profile page on successful login
    } else {
      const errorData = await response.json();
      console.error('Login failed:', errorData);
      alert(`Login failed: ${errorData.message}`); // Show an alert on login failure
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login. Please try again.');
  }
});

// Handle signup form submission
document.querySelector('.signup-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
      window.location.href = '/profile'; // Redirect to the profile page on successful signup
    } else {
      const errorData = await response.json();
      console.error('Signup failed:', errorData);
      alert(`Signup failed: ${errorData.message}`); // Show an alert on signup failure
    }
  } catch (error) {
    console.error('Error during signup:', error);
    alert('An error occurred during signup. Please try again.');
  }
});
