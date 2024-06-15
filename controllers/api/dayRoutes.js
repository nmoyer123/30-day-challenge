const express = require('express');
const router = express.Router();
const { Day } = require('../../models');

// GET day data
router.get('/:day', async (req, res) => {
    try {
        const day = req.params.day;
        const dayData = await Day.findOne({ where: { day } });
        res.render('day', { day, ...dayData?.dataValues });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    }
});

// POST day data
router.post('/:day', async (req, res) => {
    try {
        const day = req.params.day;
        const dayData = req.body;

        await Day.upsert({ day, ...dayData });
        res.status(200).send('Data saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving data');
    }
});

module.exports = router;

