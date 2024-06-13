const router = require('express').Router();
const dayRoutes = require('./dayRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/day', dayRoutes);

module.exports = router;