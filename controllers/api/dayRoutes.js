const express = require('express');
const router = express.Router();
const { Day } = require('../../models');
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
router.post('/:day_id', withAuth, async (req, res) => {
    try {
        const day = req.params.day;

        const newDay = await Day.create({
                ...req.body,
                id: req.params.id,
                user_id: req.session.user_id,
        });
        res.status(200).json(newDay);
        // await Day.upsert({ day, ...dayData });
        // res.status(200).send('Data saved successfully');
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;

