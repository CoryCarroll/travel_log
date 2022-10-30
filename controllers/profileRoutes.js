const router = require('express').Router();
const { History, Wishlist } = require('../models');
const withAuth = require('../utils/auth');

// used to tie history and wishlist data to the user
router.get('/', withAuth, async (req, res) => {
    try{
      const historyData = await History.findAll({
        where: {user_id: req.session.user_id},
      })
      const historyLog = historyData.map((history) => history.get({ plain:true }));
      res.render('profile', { 
        historyLog,
        loggedIn: req.session.loggedIn 
      });
  } catch (err) {
    res.status(500).json(err);
  }
  });

  router.get('/', withAuth, async (req, res) => {
    try{
      const wishlistData = await Wishlist.findAll({
        where: {user_id: req.session.user_id},
      })
      const wishlistLog = wishlistData.map((wishlist) => wishlist.get({ plain:true }));
      res.render('profile', { 
        wishlistLog,
        loggedIn: req.session.loggedIn 
      });
  } catch (err) {
    res.status(500).json(err);
  }
  });

// router.get('/', async (req, res) => {
//   try {
//     // Get history and wishlist data to tie to a user
//     const historyData = await History.findAll({
//       // attributes: { exclude: ['password'] },
//       // order: [['destination', 'ASC']],
//       include: [
//         {
//           model: User,
//           attributes: ['name']
//         },
//       ],
//     });

//     const historyLog = historyData.map((history) => history.get({ plain: true }));


//     const wishlistData = await Wishlist.findAll({
//       // attributes: { exclude: ['password'] },
//       // order: [['destination', 'ASC']],
//       include: [
//         {
//           model: User,
//           attributes: ['name']
//         },
//       ],
//     });

//     // Serialize user data so templates can read it
//     const wishlistLog = wishlistData.map((wishlist) => wishlist.get({ plain: true }));

//     // Pass serialized data into Handlebars.js template
//     res.render('profile', { 
//       historyLog,
//       wishlistLog,
//       logged_in: req.session.logged_in });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


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



  

module.exports = router;
