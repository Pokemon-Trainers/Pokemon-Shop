const router = require("express").Router();
const { Pokemon } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findAll();
    res.json(pokemon);
  } catch (err) {
    next(err);
  }
});
