const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const postRoutes = require('./postRoutes');
const wishlistRoute = require('./wishlistRoute');
const historyRoute = require('./historyRoute');


router.use("/user", userRoutes);
router.use('/wishlistLog', wishlistRoute);
router.use('/historyLog', historyRoute);

// router.use('/post', postRoutes);

module.exports = router;