const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Routines extends Model { }

Routines.init(
    {
        routine_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        routine_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: { 
            type: DataTypes.INTEGER,
            references: {
                model: 'user', 
                key: 'id'
            },
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'routines',
    });

module.exports = Routines;
