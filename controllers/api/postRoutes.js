const router = require("express").Router();
const {Post} = require("../../models");
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
        history_id: req.session.history_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          history_id: req.session.history_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;