const sequelize = require('../config/connection');
const { User } = require('../models');
const { Workouts } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Workouts.bulkCreate(workoutData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();