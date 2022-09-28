const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model {}

Wishlist.init(
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
        budget: {
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
        modelName: 'Wishlist',
        }
);

module.exports = Wishlist;