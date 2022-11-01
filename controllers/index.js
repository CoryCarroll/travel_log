const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const profileRoutes = require('./profileRoutes');
// const destinationRoute = require('./destinationRoute');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
// router.use('/destination', destinationRoute);

module.exports = router;
