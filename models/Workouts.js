const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workouts extends Model { }

Workouts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        muscle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        offset: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        routine_id: {  
            type: DataTypes.INTEGER,
            references: {
                model: 'routines', 
                key: 'routine_id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workouts',
    }
);

module.exports = Workouts;