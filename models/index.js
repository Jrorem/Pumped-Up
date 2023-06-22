const User = require('./User');
const Workouts = require('./Workouts');
const Routines = require('./Routines');
const Progress = require('./Progress');

User.hasOne(Progress, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Progress.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Routines, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    as: 'routines'
});

Routines.belongsTo(User, {
    foreignKey: 'user_id',
});

Routines.hasMany(Workouts, {
    foreignKey: 'routine_id',
    
});

Workouts.belongsTo(Routines, {
    foreignKey: 'routine_id',
});

module.exports = { User, Workouts, Routines, Progress };