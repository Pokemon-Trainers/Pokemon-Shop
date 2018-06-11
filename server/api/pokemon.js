const router = require("express").Router();
const { Pokemon } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const pokemon = await Pokemon.findAll();
    res.json(pokemon);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log("body", req.body);
  console.log(req.body.level);

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

router.put("/:id", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id, {
      include: [{ all: true }]
    });
    if (!pokemon) return res.sendStatus(404);

    const updatedPokemon = await pokemon.update(req.body);
    res.status(202).json(updatedPokemon);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    await pokemon.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
