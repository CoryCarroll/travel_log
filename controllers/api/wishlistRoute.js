const router = require("express").Router();
const { Wishlist } = require("../../models");
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

  router.get("/:id", async (req, res) => {
    try {
      const wishlist = await Wishlist.findOne();
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
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newWish);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const updateWish = await Wishlist.update(
        {
          destination: req.body.destination,
          budget: req.body.budget,
          landmarks: req.body.landmarks,
          duration: req.body.duration,
        },
        {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(updateWish);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const wishData = await Wishlist.destroy({
        where: {
          id: req.params.id,
          // user_id: req.session.user_id, for "withAuth"
        },
      }); 
      
      if (!wishData) {
        res.status(404).json({ message: 'No wish found with this id!' });
        return;
      }
      res.status(200).json(wishData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;