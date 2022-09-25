const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        destination: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cost: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        events: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        landmarks: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    },    
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'History',
        }
);

module.exports = History;