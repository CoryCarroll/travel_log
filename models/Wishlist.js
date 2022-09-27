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
<<<<<<< HEAD
        modelName: 'Wishlist',
=======
        modelName: 'user',
>>>>>>> fa4e175d4a0f7cdea221946917e64e1f84747c02
        }
);

module.exports = Wishlist;