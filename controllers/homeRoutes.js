const router = require('express').Router();
const { User, Wishlist, History } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    // Get history and wishlist data to tie to a user
    const historyData = await History.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['destination', 'ASC']],
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ],
    });

    const historyLog = historyData.map((history) => history.get({ plain: true }));


    const wishlistData = await Wishlist.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['destination', 'ASC']],
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ],
    });

    // Serialize user data so templates can read it
    const wishlistLog = wishlistData.map((wishlist) => wishlist.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('profile', { 
      historyLog,
      wishlistLog,
      logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/history/:id', async (req, res) => {
  try {
    const historyData = await History.findOne(req.params.id, {
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'destination',
        'cost',
        'landmarks',
        'duration',
      ],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const history = historyData.get({ plain: true });

    res.render('history', {
      ...history,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/wishlist/:id', async (req, res) => {
  try {
    const wishlistData = await Wishlist.findOne(req.params.id, {
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'destination',
        'budget',
        'landmarks',
        'duration',
      ],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const wishlist = wishlistData.get({ plain: true });

    res.render('wishlist', {
      ...wishlist,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Wishlist, History }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
