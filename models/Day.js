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
            type: DataTypes.INTEGER
        },
        page_check: {
            type: DataTypes.INTEGER
        },
        alcohol_check: {
            type: DataTypes.BOOLEAN
        },
        workout_check: {
            type: DataTypes.INTEGER
        },
        sleep_check: {
            type: DataTypes.INTEGER
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