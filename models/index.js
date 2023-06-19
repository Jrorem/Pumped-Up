const User = require('./User');
const Workouts = require('./Workouts');
const Routines = require('./Routines');
const Progress = require('./Progress');

User.hasOne(Progress, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Progress.belongsTo(User, {
    foreignKey: 'id',
});

User.hasMany(Routines, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Routines.belongsTo(User, {
    foreignKey: 'id',
});

Routines.hasMany(Workouts, {
    foreignKey: 'routine_id',
    
});

Workouts.belongsTo(Routines, {
    foreignKey: 'routine_id',
});

module.exports = { User, Workouts, Routines, Progress };