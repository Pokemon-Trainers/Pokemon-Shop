const { expect } = require("chai");
const request = require("supertest");
const db = require("../db");
const app = require("../index");
const Pokemon = db.model("pokemon");

describe("Pokemon routes", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe("/api/pokemon/", () => {
    const pokemon = {
      name: "Bulbasaur",
      type: ["Grass", "Poison"],
      description:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      imageUrl:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      level: 4,
      price: 15
    };

    beforeEach(() => {
      return Pokemon.create(pokemon);
    });

    it("GET /api/pokemon", () => {
      return request(app)
        .get("/api/pokemon")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("array");
          expect(res.body[0].name).to.be.equal(pokemon.name);
        });
    });
  });
});
