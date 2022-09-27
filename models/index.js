const User = require('./User');
const History = require('./History');
const Wishlist = require('./Wishlist');



User.hasMany(History, Wishlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

History.belongsTo(User, {
    foreignKey: 'user_id',
});

Wishlist.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = {User, History, Wishlist};
