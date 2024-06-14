// Handle login form submission
  const loginFormHandler = async (event) => {
    event.preventDefault(); 
  
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    if (response.ok) {
      document.location.replace('/profile'); // Redirect to the profile page on successful login
    } else {
      alert('Login failed. Please try again.'); // Show an alert on login failure
    }
  };
  
  // Handle signup form submission
  const signupFormHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const username = document.getElementById('username-signup').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');; // Redirect to the profile page on successful signup
    } else {
      alert('Signup failed. Please try again.'); // Show an alert on signup failure
    }
  };

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);