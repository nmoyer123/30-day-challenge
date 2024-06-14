const router = require('express').Router();
const {Day, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async ( req, res ) => {
    try {
        // Find the logged in user based on the session ID
        if(!User) { 
            res.render('homepage');     
        } else {
            const userData = await User.findByPk(req.session.user_id, {
                attributes: { exclude: ['password'] },
                include: [{ model: Day }],
              });
          
              const user = userData.get({ plain: true });
          
              res.render('homepage', {
                ...user,
                logged_in: true,
              });
        }
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

module.exports = router;