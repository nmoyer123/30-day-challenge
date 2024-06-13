const router = require('express').Router();

router.get('/', async ( req, res ) => {
    res.render('homepage', {
        title: "30-Day Challenge", // Render the 'homepage' handlebars template with the given data, then 'title' and 'rules' are pased to be displayrd
        rules: [
            "Run/Walk for 30 minutes",
            "Drink a Gallon of Water a day",
            "Read 8 pages of a book",
            "No Alcohol",
            "Workout 45 minutes a day",
            "More than 7 hours of sleep"
        ]
    })
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', async (req, res) => {
  try {
    // basic data structure for days
    const days = [
      { day: 1, challenges: ["Challenge 1", "Challenge 2"] },
      { day: 2, challenges: ["Challenge 3", "Challenge 4"] },
      // Add more days 
    ];

    res.render('profile', { days });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



module.exports = router;