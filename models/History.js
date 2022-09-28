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
          allowNull: true,
        },
        events: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        landmarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        duration: {
            type: DataTypes.STRING,
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
        modelName: 'History',
        }
);

module.exports = History;