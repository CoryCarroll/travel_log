const router = require("express").Router();
const {Wishlist} = require("../../models");
// const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
      const wishlist = await Wishlist.findAll();
      res.status(200).json(wishlist);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newWish = await Wishlist.create({
        ...req.body,
        destination: req.session.destination,
      });
  
      res.status(200).json(newWish);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:destination', async (req, res) => {
    try {
      const updateWish = await Wishlist.update(req.body, {
        where: {
          destination: req.params.destination,
        },
      });
      res.status(200).json(updateWish);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:destination', async (req, res) => {
    try {
      const wishData = await Wishlist.destroy({
        where: {
          id: req.params.id,
          destination: req.session.destination,
        },
      });  
      res.status(200).json(wishData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;