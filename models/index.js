const User = require('./User');
const History = require('./History');
const Wishlist = require('./Wishlist');



User.hasMany(History, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Wishlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

History.belongsTo(User, {
    foreignKey: 'user_id',
});

Wishlist.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = {User, History, Wishlist};
