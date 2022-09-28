const sequelize = require('../config/connection');
const wishlistData = require('./wishlistData.json');
const historyData = require('./historyData.json');
const userData = require('./userData.json');

const { User, Wishlist, History } = require('../models');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const wishlist of wishlistData) {
    await Wishlist.create({
      ...wishlist,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const history of historyData) {
    await History.create({
      ...history,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();
