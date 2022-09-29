const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
// const destinationRoute = require('./destinationRoute');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/destination', destinationRoute);

module.exports = router;
