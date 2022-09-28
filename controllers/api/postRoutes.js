const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        destination: req.session.destination,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:destination', withAuth, async (req, res) => {
    try {
      const updatePost = await Post.update(req.body, {
        where: {
          destination: req.params.destination,
        },
      });
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:destination', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          destination: req.session.destination,
        },
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;