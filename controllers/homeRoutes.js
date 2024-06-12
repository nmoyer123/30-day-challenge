const router = require('express').Router();
const { User, Challenge } = require('../models'); // Ensure these models are correctly defined in your models directory

router.get('/', async (req, res) => {
  res.render('homepage', {
    title: "30-Day Challenge",
    rules: [
      "Run/Walk for 30 minutes",
      "Drink a Gallon of Water a day",
      "Read 8 pages of a book",
      "No Alcohol",
      "Workout 45 minutes a day",
      "More than 7 hours of sleep"
    ]
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/profile', async (req, res) => {
  try {
    const userId = req.session.userId;

    // Fetch the user and challenges
    const user = await User.findByPk(userId, {
      include: [{ model: Challenge }]
    });

    const days = [];
    for (let i = 1; i <= 30; i++) {
      const challenges = user.Challenges.filter(challenge => challenge.day === i).map(challenge => challenge.description);
      days.push({ day: i, challenges });
    }

    res.render('profile', { days });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
