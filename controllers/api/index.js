const router = require('express').Router();
const routinesRoutes = require('./routine-routes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workout-routes');
const workoutInst = require('./instructions');
const progressRoutes = require('./progress-routes');

router.use('/routines', routinesRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/instructions', workoutInst);
router.use('/progress', progressRoutes);

module.exports = router;