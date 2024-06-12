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

router.get('/profile', (req, res) => {
    res.render('profile');
});

module.exports = router;