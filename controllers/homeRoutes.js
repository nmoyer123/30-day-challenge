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

router.get('/day', async (req, res) => {
  res.render('day')
})

module.exports = router;