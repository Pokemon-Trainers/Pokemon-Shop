"use strict";

const db = require("../server/db");
const { User, Pokemon, Order, Review } = require("../server/db/models");

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const pokemon = [
  {
    name: "Pikachu",
    type: ["Electric"],
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    level: 2,
    price: 10
  },
  {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    level: 4,
    price: 15
  },
  {
    name: "Squirtle",
    type: ["Water"],
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    level: 3,
    price: 17
  },
  {
    name: "Butterfree",
    type: ["Bug", "Flying"],
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    level: 5,
    price: 20
  }
];

const order = [
  {
    billingName: "Linda Morales",
    billingAddress: "123 Fake Street",
    shippingName: "Linda Morales",
    shippingAddress: "123 Fake Street",
    email: "email@email.com"
  }
];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elementum lectus. Sed imperdiet ac libero quis mollis. Aenean blandit urna sed sem vestibulum, vitae ultricies sem vulputate. Suspendisse auctor eros lectus, ac lacinia lectus varius nec. Nam sit amet nunc vitae enim scelerisque tristique. Praesent a mauris nec leo venenatis aliquet. Curabitur pretium id risus eget luctus.";

const review = [
  {
    rating: 2.5,
    title: "Pick another pokemon...",
    description: lorem,
    userId: 1,
    pokemonId: 2
  },
  {
    rating: 5,
    title: "Best pokemon ever!",
    description: lorem,
    userId: 1,
    pokemonId: 3
  }
];

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({ email: "cody@email.com", password: "123" }),
    User.create({ email: "murphy@email.com", password: "123" })
  ]);
  const pokes = await Promise.all(pokemon.map(poke => Pokemon.create(poke)));
  const orders = await Promise.all(order.map(order => Order.create(order)));
  const reviews = await Promise.all(
    review.map(review => Review.create(review))
  );
  console.log("Seeding complete");

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    })
    .finally(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log("closing db connection");
      db.close();
      console.log("db connection closed");
    });

  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log("seeding...");
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
