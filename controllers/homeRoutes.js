const router = require('express').Router();
const {Day, User} = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Day }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('profile', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;