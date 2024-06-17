const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections'); 

class Day extends Model {}

Day.init(
    {
        day_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        run_check: {
            type: DataTypes.BOOLEAN
        },
        water_check: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        page_check: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        alcohol_check: {
            type: DataTypes.BOOLEAN
        },
        workout_check: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sleep_check: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Day',
        tableName: 'day'
      }
);

module.exports = Day;