const router = require('express').Router();
const routinesRoutes = require('./routine-routes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workout-routes');
const workoutInst = require('./instructions');

router.use('/routines', routinesRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('./instructions', workoutInst);

module.exports = router;