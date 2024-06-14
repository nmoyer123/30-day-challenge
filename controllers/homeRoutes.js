const router = require('express').Router();
const {Day, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async ( req, res ) => {
    try {
        // Get all projects and JOIN with user data
        const Daydata = await Day.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
    
        // Serialize data so the template can read it
        const Days = Daydata.map((day) => day.get({ plain: true }));
          
              res.render('homepage', {
                ...Days,
                logged_in: req.session.logged_in,
              });
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', (req, res) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  res.render('profile', { days });
});

router.get('/day', async (req, res) => {
  const day = req.query.day;

  // Replace with the actual data retrieval logic
  const userChallenges = await UserChallenges.findOne({
    where: {
      day: day,
      user_id: req.session.user_id
    }
  });

  const challengesData = {
    day,
    run_check: userChallenges ? userChallenges.run_check : false,
    water_check: userChallenges ? userChallenges.water_check : 0,
    page_check: userChallenges ? userChallenges.page_check : 0,
    alcohol_check: userChallenges ? userChallenges.alcohol_check : false,
    workout_check: userChallenges ? userChallenges.workout_check : 0,
    sleep_check: userChallenges ? userChallenges.sleep_check : 0
  };

  res.render('day', challengesData);
});

module.exports = router;