const router = require("express").Router();
// Need to create a connectin in the routes between history and user
const { History } = require("../../models");
// const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
      const history = await History.findAll();
      res.status(200).json(history);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const history = await History.findOne();
      res.status(200).json(history);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });


  router.post('/', async (req, res) => {
    try {
      const newHistory = await History.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newHistory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const updateHistory = await History.update(
        {
          destination: req.body.destination,
          cost: req.body.cost,
          landmarks: req.body.landmarks,
          duration: req.body.duration,
        },
        {
        where: {
          id: req.params.id,
          // user_id: req.session.user_id, Add in if we create "withAuth" functionality
        },
      });
      res.status(200).json(updateHistory);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const historyData = await History.destroy({
        where: {
          id: req.params.id,
          // user_id: req.session.user_id, Add in if we create "withAuth" functionality
        },
      });  
      res.status(200).json(historyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;