const router = require('express').Router();
const { UserChallenges } = require('../../models'); // Assuming you have a UserChallenges model

router.post('/day', async (req, res) => {
  try {
    const { day, run_check, water_check, page_check, alcohol_check, workout_check, sleep_check } = req.body;

    const userChallenges = await UserChallenges.findOne({
      where: {
        day: day,
        user_id: req.session.user_id
      }
    });

    if (userChallenges) {
      // Update existing record
      await userChallenges.update({
        run_check,
        water_check,
        page_check,
        alcohol_check,
        workout_check,
        sleep_check
      });
    } else {
      // Create new record
      await UserChallenges.create({
        day,
        run_check,
        water_check,
        page_check,
        alcohol_check,
        workout_check,
        sleep_check,
        user_id: req.session.user_id
      });
    }

    res.status(200).json({ message: 'Challenges updated successfully.' });
  } catch (error) {
    console.error('Error updating challenges:', error);
    res.status(500).json({ message: 'Failed to update challenges.' });
  }
});

module.exports = router;