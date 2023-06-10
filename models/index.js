const User = require('./User');
const Workouts = require('./Workouts');

Workouts.belongsTo(User, {
    foreignKey: 'id',
});

User.hasMany(Workouts, {
    foreignKey: 'id',
});

module.exports = { User, Workouts };