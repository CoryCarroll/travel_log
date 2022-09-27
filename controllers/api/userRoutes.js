const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require('bcrypt');

// CREATE new user
router.post("/", async (req, res) => {
  console.log('something funny');
  try {
    const dbUserData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.name = dbUserData.name;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "Incorrect username" });
      return;
    }
    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.name = user.name;
      req.session.user_id = user.id;
      console.log(req.session.cookie);

      res.status(200).json({ user, message: "You are now logged in!" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(200).json({ msg: "No users in DB" });
      return;
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.destroy({ where: { id: req.params.id } });
    if (!deletedUser)
      res.status(404).json({ msg: "No user by that ID exists" });
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;