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
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    level: 4,
    price: 15
  },
  {
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    level: 18,
    price: 36
  },
  {
    name: "Venusaur",
    type: ["Grass", "Poison"],
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    level: 36,
    price: 70
  },
  {
    name: "Charmander",
    type: ["Fire"],
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    level: 7,
    price: 16
  },
  {
    name: "Charmeleon",
    type: ["Fire"],
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    level: 21,
    price: 45
  },
  {
    name: "Charizard",
    type: ["Fire", "Flying"],
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    level: 36,
    price: 65
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
    name: "Wartortle",
    type: ["Water"],
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    level: 21,
    price: 48
  },
  {
    name: "Blastoise",
    type: ["Water"],
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    level: 51,
    price: 83
  },
  {
    name: "Caterpie",
    type: ["Bug"],
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    level: 2,
    price: 8
  },
  {
    name: "Metapod",
    type: ["Bug"],
    description:
      "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    level: 8,
    price: 16
  },
  {
    name: "Butterfree",
    type: ["Bug", "Flying"],
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    level: 5,
    price: 20
  },
  {
    name: "Weedle",
    type: ["Bug", "Poison"],
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    level: 6,
    price: 18
  },
  {
    name: "Kakuna",
    type: ["Bug", "Poison"],
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    level: 9,
    price: 20
  },
  {
    name: "Beedrill ",
    type: ["Bug", "Poison"],
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    level: 11,
    price: 23
  },
  {
    name: "Pidgey ",
    type: ["Normal", "Flying"],
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    level: 17,
    price: 19
  },
  {
    name: "Pidgeotto ",
    type: ["Normal", "Flying"],
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    level: 27,
    price: 30
  },
  {
    name: "Pidgeot ",
    type: ["Normal", "Flying"],
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    level: 55,
    price: 68
  },
  {
    name: "Rattata ",
    type: ["Normal"],
    description:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    level: 1,
    price: 5
  },
  {
    name: "Raticate ",
    type: ["Normal"],
    description:
      "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    level: 31,
    price: 31
  },
  {
    name: "Spearow ",
    type: ["Normal", "Flying"],
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    level: 12,
    price: 14
  },
  {
    name: "Fearow ",
    type: ["Normal", "Flying"],
    description:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    level: 51,
    price: 58
  },
  {
    name: "Ekans ",
    type: ["Poison"],
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    level: 10,
    price: 25
  },
  {
    name: "Arbok ",
    type: ["Poison"],
    description:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    level: 22,
    price: 54
  },
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
    name: "Raichu",
    type: ["Electric"],
    description:
      "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    level: 72,
    price: 85
  },
  {
    name: "Sandshrew",
    type: ["Ground"],
    description:
      "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    level: 13,
    price: 20
  },
  {
    name: "Sandslash",
    type: ["Ground"],
    description:
      "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    level: 22,
    price: 31
  },
  {
    name: "Nidoran♀",
    type: ["Poison"],
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    level: 15,
    price: 27
  },
  {
    name: "Nidorina",
    type: ["Poison"],
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    level: 45,
    price: 70
  },
  {
    name: "Nidoqueen",
    type: ["Poison", "Ground"],
    description:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    level: 50,
    price: 75
  },
  {
    name: "Nidoran♂",
    type: ["Poison"],
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    level: 10,
    price: 15
  },
  {
    name: "Nidorino",
    type: ["Poison"],
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    level: 33,
    price: 40
  },
  {
    name: "Nidoking",
    type: ["Poison", "Ground"],
    description:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    level: 80,
    price: 100
  },
  {
    name: "Clefairy",
    type: ["Fairy"],
    description:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    level: 20,
    price: 50
  },
  {
    name: "Clefable",
    type: ["Fairy"],
    description:
      "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    level: 40,
    price: 100
  },
  {
    name: "Vulpix",
    type: ["Fire"],
    description:
      "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    level: 12,
    price: 29
  },
  {
    name: "Ninetales",
    type: ["Fire"],
    description:
      "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    level: 38,
    price: 84
  },
  {
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    description:
      "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    level: 29,
    price: 32
  },
  {
    name: "Wigglytuff ",
    type: ["Normal", "Fairy"],
    description:
      "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    level: 29,
    price: 32
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
    User.create({ email: "cody@email.com", password: "123", admin: true }),
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
