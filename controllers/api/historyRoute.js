const router = require("express").Router();
const {History} = require("../../models");
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

  router.post('/', async (req, res) => {
    try {
      const newHistory = await History.create({
        ...req.body,
        destination: req.session.destination,
      });
  
      res.status(200).json(newHistory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:destination', async (req, res) => {
    try {
      const updateHistory = await History.update(req.body, {
        where: {
          destination: req.params.destination,
        },
      });
      res.status(200).json(updateHistory);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:destination', async (req, res) => {
    try {
      const historyData = await History.destroy({
        where: {
          id: req.params.id,
          destination: req.session.destination,
        },
      });  
      res.status(200).json(historyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;