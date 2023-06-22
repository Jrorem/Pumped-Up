const router = require('express').Router();
const routinesRoutes = require('./routine-routes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workout-routes');

router.use('/routines', routinesRoutes);
router.use('/users', userRoutes);
// router.use('/workouts', workoutRoutes);

module.exports = router;