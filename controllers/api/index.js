const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const wishlistRoute = require('./wishlistRoute');
const historyRoute = require('./historyRoute');


router.use("/user", userRoutes);
router.use('/user/wishlist', wishlistRoute);
router.use('/user/history', historyRoute);

router.use('/post', postRoutes);

module.exports = router;