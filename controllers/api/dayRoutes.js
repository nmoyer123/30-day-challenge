const router = require('express').Router();
const { Day, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET day data
router.get('/:day_id', async (req, res) => {
    try {
        const dayData = await Day.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });
    
        const Days = dayData.get({ plain: true });
    
        res.render('day', {
          ...Days,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

// POST day data
router.post('/', withAuth, async (req, res) => {
    // try {
      const newDay = await Day.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newDay);
    // } catch (err) {
    //   res.status(400).json(err);
    // }
  });

module.exports = router;

