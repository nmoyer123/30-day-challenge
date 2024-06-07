// Handle login form submission
document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); 
  
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    if (response.ok) {
      window.location.href = '/layouts/main'; // Redirect to the main page on successful login
    } else {
      alert('Login failed. Please try again.'); // Show an alert on login failure
    }
  });
  
  // Handle signup form submission
  document.querySelector('.signup-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const username = document.getElementById('username-signup').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
  
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });
  
    if (response.ok) {
      window.location.href = '/layout/main'; // Redirect to the main page on successful signup
    } else {
      alert('Signup failed. Please try again.'); // Show an alert on signup failure
    }
  });
  