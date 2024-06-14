const router = require('express').Router();
const { User } = require('../../models');

// Signup route
router.post('/', async (req, res) => {
  try {
    // Check if email or username already exists
    const existingUser = await User.findOne({ where: { email: req.body.email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use. Please use a different email.' });
    }

    const existingUsername = await User.findOne({ where: { username: req.body.username } });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username already in use. Please use a different username.' });
    }

    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(400).json({ message: 'Failed to sign up. Please try again.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    console.log('Login request body:', req.body); // Log request body
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(400).json({ message: 'Failed to log in. Please try again.' });
  }
});

module.exports = router;
