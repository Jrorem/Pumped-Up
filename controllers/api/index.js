const router = require('express').Router();
const routinesRoutes = require('./routine-routes');
const userRoutes = require('./user-routes');
const workoutRoutes = require('./workout-routes');

// router.use('/routines', routinesRoutes);
router.use('/user', userRoutes);
// router.use('/workouts', workoutRoutes);

module.exports = router;