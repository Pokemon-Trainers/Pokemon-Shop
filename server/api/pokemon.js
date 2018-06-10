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

router.post("/", async (req, res, next) => {
  try {
    const newPokemon = await Pokemon.create({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      level: req.body.level,
      price: req.body.price
    });
    res.json(newPokemon);
  } catch (err) {
    next(err);
  }
});
