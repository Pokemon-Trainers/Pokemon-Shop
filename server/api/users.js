const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ["id", "email", "admin"]
  })
    .then(users => res.json(users))
    .catch(next);
});

router.patch("/:id", async (req, res, next) => {
  const foundUser = await User.findById(req.params.id);
  try {
    if (!foundUser) {
      res.sendStatus(404);
    } else {
      const update = await foundUser.update({
        admin: req.body.user.admin,
        email: req.body.user.email
      });

      res.json(update);
    }
  } catch (err) {
    next(err);
  }
});
