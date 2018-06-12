"use strict";

const db = require("../server/db");
const {
  User,
  Pokemon,
  Order,
  Review,
  OrderItem
} = require("../server/db/models");

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
    price: 15,
    basePokemon: true
  },
  {
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    level: 18,
    price: 36,
    basePokemon: true
  },
  {
    name: "Venusaur",
    type: ["Grass", "Poison"],
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    level: 36,
    price: 70,
    basePokemon: true
  },
  {
    name: "Charmander",
    type: ["Fire"],
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    level: 7,
    price: 16,
    basePokemon: true
  },
  {
    name: "Charmeleon",
    type: ["Fire"],
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    level: 21,
    price: 45,
    basePokemon: true
  },
  {
    name: "Charizard",
    type: ["Fire", "Flying"],
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    level: 36,
    price: 65,
    basePokemon: true
  },
  {
    name: "Squirtle",
    type: ["Water"],
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    level: 3,
    price: 17,
    basePokemon: true
  },
  {
    name: "Wartortle",
    type: ["Water"],
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    level: 21,
    price: 48,
    basePokemon: true
  },
  {
    name: "Blastoise",
    type: ["Water"],
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    level: 51,
    price: 83,
    basePokemon: true
  },
  {
    name: "Caterpie",
    type: ["Bug"],
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    level: 2,
    price: 8,
    basePokemon: true
  },
  {
    name: "Metapod",
    type: ["Bug"],
    description:
      "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    level: 8,
    price: 16,
    basePokemon: true
  },
  {
    name: "Butterfree",
    type: ["Bug", "Flying"],
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    level: 5,
    price: 20,
    basePokemon: true
  },
  {
    name: "Weedle",
    type: ["Bug", "Poison"],
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    level: 6,
    price: 18,
    basePokemon: true
  },
  {
    name: "Kakuna",
    type: ["Bug", "Poison"],
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    level: 9,
    price: 20,
    basePokemon: true
  },
  {
    name: "Beedrill ",
    type: ["Bug", "Poison"],
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    level: 11,
    price: 23,
    basePokemon: true
  },
  {
    name: "Pidgey ",
    type: ["Normal", "Flying"],
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    level: 17,
    price: 19,
    basePokemon: true
  },
  {
    name: "Pidgeotto ",
    type: ["Normal", "Flying"],
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    level: 27,
    price: 30,
    basePokemon: true
  },
  {
    name: "Pidgeot ",
    type: ["Normal", "Flying"],
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    level: 55,
    price: 68,
    basePokemon: true
  },
  {
    name: "Rattata ",
    type: ["Normal"],
    description:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    level: 1,
    price: 5,
    basePokemon: true
  },
  {
    name: "Raticate ",
    type: ["Normal"],
    description:
      "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    level: 31,
    price: 31,
    basePokemon: true
  },
  {
    name: "Spearow ",
    type: ["Normal", "Flying"],
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    level: 12,
    price: 14,
    basePokemon: true
  },
  {
    name: "Fearow ",
    type: ["Normal", "Flying"],
    description:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    level: 51,
    price: 58,
    basePokemon: true
  },
  {
    name: "Ekans ",
    type: ["Poison"],
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    level: 10,
    price: 25,
    basePokemon: true
  },
  {
    name: "Arbok ",
    type: ["Poison"],
    description:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    level: 22,
    price: 54,
    basePokemon: true
  },
  {
    name: "Pikachu",
    type: ["Electric"],
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    level: 2,
    price: 10,
    basePokemon: true
  },
  {
    name: "Raichu",
    type: ["Electric"],
    description:
      "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    level: 72,
    price: 85,
    basePokemon: true
  },
  {
    name: "Sandshrew",
    type: ["Ground"],
    description:
      "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    level: 13,
    price: 20,
    basePokemon: true
  },
  {
    name: "Sandslash",
    type: ["Ground"],
    description:
      "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    level: 22,
    price: 31,
    basePokemon: true
  },
  {
    name: "Nidoran♀",
    type: ["Poison"],
    description:
      "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    level: 15,
    price: 27,
    basePokemon: true
  },
  {
    name: "Nidorina",
    type: ["Poison"],
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    level: 45,
    price: 70,
    basePokemon: true
  },
  {
    name: "Nidoqueen",
    type: ["Poison", "Ground"],
    description:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    level: 50,
    price: 75,
    basePokemon: true
  },
  {
    name: "Nidoran♂",
    type: ["Poison"],
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    level: 10,
    price: 15,
    basePokemon: true
  },
  {
    name: "Nidorino",
    type: ["Poison"],
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    level: 33,
    price: 40,
    basePokemon: true
  },
  {
    name: "Nidoking",
    type: ["Poison", "Ground"],
    description:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    level: 80,
    price: 100,
    basePokemon: true
  },
  {
    name: "Clefairy",
    type: ["Fairy"],
    description:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    level: 20,
    price: 50,
    basePokemon: true
  },
  {
    name: "Clefable",
    type: ["Fairy"],
    description:
      "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    level: 40,
    price: 100,
    basePokemon: true
  },
  {
    name: "Vulpix",
    type: ["Fire"],
    description:
      "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    level: 12,
    price: 29,
    basePokemon: true
  },
  {
    name: "Ninetales",
    type: ["Fire"],
    description:
      "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    level: 38,
    price: 84,
    basePokemon: true
  },
  {
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    description:
      "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    level: 29,
    price: 32,
    basePokemon: true
  },
  {
    name: "Wigglytuff",

    type: ["Normal", "Fairy"],
    description:
      "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    level: 29,
    price: 32,
    basePokemon: true
  },
  {
    name: "Zubat",
    type: ["Poison", "Flying"],
    description:
      "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    level: 8,
    price: 18,
    basePokemon: true
  },
  {
    name: "Golbat",
    type: ["Poison", "Flying"],
    description:
      "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
    level: 26,
    price: 32,
    basePokemon: true
  },
  {
    name: "Oddish",
    type: ["Grass", "Poison"],
    description:
      "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    level: 10,
    price: 10,
    basePokemon: true
  },
  {
    name: "Gloom",
    type: ["Grass", "Poison"],
    description:
      "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    level: 25,
    price: 25,
    basePokemon: true
  },
  {
    name: "Vileplume",
    type: ["Grass", "Poison"],
    description:
      "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    level: 45,
    price: 45,
    basePokemon: true
  },
  {
    name: "Paras",
    type: ["Bug", "Grass"],
    description:
      "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    level: 12,
    price: 23,
    basePokemon: true
  },
  {
    name: "Parasect",
    type: ["Bug", "Grass"],
    description:
      "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
    level: 31,
    price: 38,
    basePokemon: true
  },
  {
    name: "Venonat",
    type: ["Bug", "Poison"],
    description:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    level: 11,
    price: 8,
    basePokemon: true
  },
  {
    name: "Venomoth",
    type: ["Bug", "Poison"],
    description:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    level: 20,
    price: 16,
    basePokemon: true
  },
  {
    name: "Diglett",
    type: ["Ground"],
    description:
      "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    level: 1,
    price: 2,
    basePokemon: true
  },
  {
    name: "Dugtrio",
    type: ["Ground"],
    description:
      "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
    level: 10,
    price: 11,
    basePokemon: true
  },
  {
    name: "Meowth",
    type: ["Normal"],
    description:
      "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    level: 23,
    price: 36,
    basePokemon: true
  },
  {
    name: "Persian",
    type: ["Normal"],
    description:
      "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
    level: 52,
    price: 99,
    basePokemon: true
  },
  {
    name: "Psyduck",
    type: ["Water"],
    description:
      "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    level: 30,
    price: 45,
    basePokemon: true
  },
  {
    name: "Golduck",
    type: ["Water"],
    description:
      "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
    level: 30,
    price: 45,
    basePokemon: true
  },
  {
    name: "Mankey",
    type: ["Fighting"],
    description:
      "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    level: 13,
    price: 35,
    basePokemon: true
  },
  {
    name: "Primeape",
    type: ["Fighting"],
    description:
      "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
    level: 34,
    price: 44,
    basePokemon: true
  },
  {
    name: "Growlithe",
    type: ["Fire"],
    description:
      "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    level: 10,
    price: 15,
    basePokemon: true
  },
  {
    name: "Arcanine",
    type: ["Fire"],
    description:
      "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    level: 72,
    price: 88,
    basePokemon: true
  },
  {
    name: "Poliwag",
    type: ["Water"],
    description:
      "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    level: 1,
    price: 5,
    basePokemon: true
  },
  {
    name: "Poliwhirl",
    type: ["Water"],
    description:
      "The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
    level: 17,
    price: 27,
    basePokemon: true
  },
  {
    name: "Poliwrath",
    type: ["Water", "Fighting"],
    description:
      "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
    level: 33,
    price: 67,
    basePokemon: true
  },
  {
    name: "Abra",
    type: ["Psychic"],
    description:
      "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    level: 5,
    price: 13,
    basePokemon: true
  },
  {
    name: "Kadabra",
    type: ["Psychic"],
    description:
      "Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    level: 25,
    price: 57,
    basePokemon: true
  },
  {
    name: "Alakazam",
    type: ["Psychic"],
    description:
      "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    level: 41,
    price: 73,
    basePokemon: true
  },
  {
    name: "Machop",
    type: ["Fighting"],
    description:
      "Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    level: 13,
    price: 19,
    basePokemon: true
  },
  {
    name: "Machoke",
    type: ["Fighting"],
    description:
      "Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
    level: 27,
    price: 39,
    basePokemon: true
  },
  {
    name: "Machamp",
    type: ["Fighting"],
    description:
      "Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    level: 46,
    price: 59,
    basePokemon: true
  },
  {
    name: "Bellsprout",
    type: ["Grass", "Poison"],
    description:
      "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    level: 10,
    price: 21,
    basePokemon: true
  },
  {
    name: "Weepinbell",
    type: ["Grass", "Poison"],
    description:
      "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
    level: 21,
    price: 23,
    basePokemon: true
  },
  {
    name: "Victreebel",
    type: ["Grass", "Poison"],
    description:
      "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    level: 32,
    price: 43,
    basePokemon: true
  },
  {
    name: "Tentacool",
    type: ["Water", "Poison"],
    description:
      "Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    level: 4,
    price: 18,
    basePokemon: true
  },
  {
    name: "Tentacruel",
    type: ["Water", "Poison"],
    description:
      "Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    level: 46,
    price: 81,
    basePokemon: true
  },
  {
    name: "Geodude",
    type: ["Rock", "Ground"],
    description:
      "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    level: 8,
    price: 26,
    basePokemon: true
  },
  {
    name: "Graveler",
    type: ["Rock", "Ground"],
    description:
      "Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    level: 21,
    price: 54,
    basePokemon: true
  },
  {
    name: "Golem",
    type: ["Rock", "Ground"],
    description:
      "Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
    level: 57,
    price: 91,
    basePokemon: true
  },
  {
    name: "Ponyta",
    type: ["Fire"],
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    level: 1,
    price: 8,
    basePokemon: true
  },
  {
    name: "Rapidash",
    type: ["Fire"],
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    level: 76,
    price: 100,
    basePokemon: true
  },
  {
    name: "Slowpoke",
    type: ["Water", "Psychic"],
    description:
      "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    level: 43,
    price: 76,
    basePokemon: true
  },
  {
    name: "Slowbro",
    type: ["Water", "Psychic"],
    description:
      "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
    level: 57,
    price: 82,
    basePokemon: true
  },
  {
    name: "Magnemite",
    type: ["Electric", "Steel"],
    description:
      "Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    level: 37,
    price: 58,
    basePokemon: true
  },
  {
    name: "Magneton",
    type: ["Electric", "Steel"],
    description:
      "Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
    level: 69,
    price: 83,
    basePokemon: true
  },
  {
    name: "Farfetch'd",
    type: ["Normal", "Flying"],
    description:
      "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    level: 3,
    price: 6,
    basePokemon: true
  },
  {
    name: "Doduo",
    type: ["Normal", "Flying"],
    description:
      "Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    level: 3,
    price: 6,
    basePokemon: true
  },
  {
    name: "Dodrio",
    type: ["Normal", "Flying"],
    description:
      "Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary—it may decide to peck you.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
    level: 19,
    price: 19,
    basePokemon: true
  },
  {
    name: "Seel",
    type: ["Water"],
    description:
      "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    level: 23,
    price: 36,
    basePokemon: true
  },
  {
    name: "Dewgong",
    type: ["Water"],
    description:
      "Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
    level: 99,
    price: 100,
    basePokemon: true
  },
  {
    name: "Grimer",
    type: ["Poison"],
    description:
      "Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    level: 7,
    price: 12,
    basePokemon: true
  },
  {
    name: "Muk",
    type: ["Poison"],
    description:
      "From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
    level: 48,
    price: 59,
    basePokemon: true
  },
  {
    name: "Shellder",
    type: ["Water"],
    description:
      "At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    level: 8,
    price: 11,
    basePokemon: true
  },
  {
    name: "Cloyster",
    type: ["Water", "Ice"],
    description:
      "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    level: 8,
    price: 11,
    basePokemon: true
  },
  {
    name: "Gastly",
    type: ["Ghost", "Poison"],
    description:
      "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    level: 11,
    price: 28,
    basePokemon: true
  },
  {
    name: "Haunter",
    type: ["Ghost", "Poison"],
    description:
      "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
    level: 23,
    price: 42,
    basePokemon: true
  },
  {
    name: "Gengar",
    type: ["Ghost", "Poison"],
    description:
      "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    level: 50,
    price: 73,
    basePokemon: true
  },
  {
    name: "Onix",
    type: ["Rock", "Ground"],
    description:
      "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    level: 87,
    price: 99,
    basePokemon: true
  },
  {
    name: "Drowzee",
    type: ["Psychic"],
    description:
      "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    level: 35,
    price: 43,
    basePokemon: true
  },
  {
    name: "Hypno",
    type: ["Psychic"],
    description:
      "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    level: 76,
    price: 98,
    basePokemon: true
  },
  {
    name: "Krabby",
    type: ["Water"],
    description:
      "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    level: 12,
    price: 23,
    basePokemon: true
  },
  {
    name: "Kingler",
    type: ["Water"],
    description:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
    level: 45,
    price: 43,
    basePokemon: true
  },
  {
    name: "Voltorb",
    type: ["Electric"],
    description:
      "Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    level: 12,
    price: 32,
    basePokemon: true
  },
  {
    name: "Electrode",
    type: ["Electric"],
    description:
      "Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
    level: 53,
    price: 57,
    basePokemon: true
  },
  {
    name: "Exeggcute",
    type: ["Grass", "Psychic"],
    description:
      "This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    level: 29,
    price: 38,
    basePokemon: true
  },
  {
    name: "Exeggutor",
    type: ["Grass", "Psychic"],
    description:
      "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    level: 48,
    price: 69,
    basePokemon: true
  },
  {
    name: "Cubone",
    type: ["Ground"],
    description:
      "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    level: 12,
    price: 34,
    basePokemon: true
  },
  {
    name: "Marowak",
    type: ["Ground"],
    description:
      "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
    level: 58,
    price: 23,
    basePokemon: true
  },
  {
    name: "Hitmonlee",
    type: ["Fighting"],
    description:
      "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    level: 23,
    price: 23,
    basePokemon: true
  },
  {
    name: "Hitmonchan",
    type: ["Fighting"],
    description:
      "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    level: 62,
    price: 74,
    basePokemon: true
  },
  {
    name: "Lickitung",
    type: ["Normal"],
    description:
      "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    level: 73,
    price: 84,
    basePokemon: true
  },
  {
    name: "Koffing",
    type: ["Poison"],
    description:
      "If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    level: 13,
    price: 47,
    basePokemon: true
  },
  {
    name: "Weezing",
    type: ["Poison"],
    description:
      "Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
    level: 38,
    price: 58,
    basePokemon: true
  },
  {
    name: "Rhyhorn",
    type: ["Ground", "Rock"],
    description:
      "Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    level: 12,
    price: 21,
    basePokemon: true
  },
  {
    name: "Rhydon",
    type: ["Ground", "Rock"],
    description:
      "Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
    level: 42,
    price: 54,
    basePokemon: true
  },
  {
    name: "Chansey",
    type: ["Normal"],
    description:
      "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    level: 42,
    price: 54,
    basePokemon: true
  },
  {
    name: "Tangela",
    type: ["Grass"],
    description:
      "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    level: 42,
    price: 54,
    basePokemon: true
  },
  {
    name: "Kangaskhan",
    type: ["Normal"],
    description:
      "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    level: 31,
    price: 54,
    basePokemon: true
  },
  {
    name: "Horsea",
    type: ["Water"],
    description:
      "Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    level: 11,
    price: 12,
    basePokemon: true
  },
  {
    name: "Seadra",
    type: ["Water"],
    description:
      "Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
    level: 78,
    price: 98,
    basePokemon: true
  },
  {
    name: "Goldeen",
    type: ["Water"],
    description:
      "Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    level: 7,
    price: 8,
    basePokemon: true
  },
  {
    name: "Seaking",
    type: ["Water"],
    description:
      "In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
    level: 13,
    price: 18,
    basePokemon: true
  },
  {
    name: "Staryu",
    type: ["Water"],
    description:
      "Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    level: 5,
    price: 18,
    basePokemon: true
  },
  {
    name: "Starmie",
    type: ["Water"],
    description:
      "Starmie's center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname “the gem of the sea.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    level: 64,
    price: 86,
    basePokemon: true
  },
  {
    name: "Mr. Mime",
    type: ["Psychic", "Fairy"],
    description:
      "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    level: 45,
    price: 100,
    basePokemon: true
  },
  {
    name: "Scyther",
    type: ["Bug", "Flying"],
    description:
      "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    level: 67,
    price: 85,
    basePokemon: true
  },
  {
    name: "Jynx",
    type: ["Ice", "Psychic"],
    description:
      "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    level: 37,
    price: 85,
    basePokemon: true
  },
  {
    name: "Electabuzz",
    type: ["Electric"],
    description:
      "When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    level: 42,
    price: 65,
    basePokemon: true
  },
  {
    name: "Magmar",
    type: ["Fire"],
    description:
      "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    level: 57,
    price: 77,
    basePokemon: true
  },
  {
    name: "Pinsir",
    type: ["Bug"],
    description:
      "Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    level: 54,
    price: 56,
    basePokemon: true
  },
  {
    name: "Tauros",
    type: ["Normal"],
    description:
      "This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    level: 23,
    price: 43,
    basePokemon: true
  },
  {
    name: "Magikarp",
    type: ["Water"],
    description:
      "Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    level: 5,
    price: 21,
    basePokemon: true
  },
  {
    name: "Gyarados",
    type: ["Water", "Flying"],
    description:
      "When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    level: 78,
    price: 86,
    basePokemon: true
  },
  {
    name: "Lapras",
    type: ["Water", "Ice"],
    description:
      "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    level: 65,
    price: 69,
    basePokemon: true
  },
  {
    name: "Ditto",
    type: ["Normal"],
    description:
      "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    level: 79,
    price: 97,
    basePokemon: true
  },
  {
    name: "Eevee",
    type: ["Normal"],
    description:
      "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    level: 2,
    price: 28,
    basePokemon: true
  },
  {
    name: "Vaporeon",
    type: ["Water"],
    description:
      "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    level: 32,
    price: 47,
    basePokemon: true
  },
  {
    name: "Jolteon",
    type: ["Electric"],
    description:
      "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    level: 22,
    price: 43,
    basePokemon: true
  },
  {
    name: "Flareon",
    type: ["Fire"],
    description:
      "Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    level: 45,
    price: 43,
    basePokemon: true
  },
  {
    name: "Porygon",
    type: ["Normal"],
    description:
      "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    level: 54,
    price: 78,
    basePokemon: true
  },
  {
    name: "Omanyte",
    type: ["Rock", "Water"],
    description:
      "Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    level: 85,
    price: 88,
    basePokemon: true
  },
  {
    name: "Omastar",
    type: ["Rock", "Water"],
    description:
      "Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
    level: 100,
    price: 100,
    basePokemon: true
  },
  {
    name: "Kabuto",
    type: ["Rock", "Water"],
    description:
      "Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    level: 63,
    price: 83,
    basePokemon: true
  },
  {
    name: "Kabutops",
    type: ["Rock", "Water"],
    description:
      "Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
    level: 75,
    price: 89,
    basePokemon: true
  },
  {
    name: "Aerodactyl",
    type: ["Rock", "Flying"],
    description:
      "Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    level: 34,
    price: 65,
    basePokemon: true
  },
  {
    name: "Snorlax",
    type: ["Normal"],
    description:
      "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    level: 45,
    price: 76,
    basePokemon: true
  },
  {
    name: "Articuno",
    type: ["Ice", "Flying"],
    description:
      "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
    level: 100,
    price: 100,
    basePokemon: true
  },
  {
    name: "Zapdos",
    type: ["Electric", "Flying"],
    description:
      "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    level: 100,
    price: 100,
    basePokemon: true
  },
  {
    name: "Moltres",
    type: ["Fire", "Flying"],
    description:
      "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    level: 100,
    price: 100,
    basePokemon: true
  },
  {
    name: "Dratini",
    type: ["Dragon"],
    description:
      "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
    level: 27,
    price: 41,
    basePokemon: true
  },
  {
    name: "Dragonair",
    type: ["Dragon"],
    description:
      "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    level: 67,
    price: 73,
    basePokemon: true
  },
  {
    name: "Dragonite",
    type: ["Dragon"],
    description:
      "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    level: 84,
    price: 88,
    basePokemon: true
  },
  {
    name: "Mewtwo",
    type: ["Psychic"],
    description:
      "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    level: 100,
    price: 100,
    basePokemon: true
  }
];

const order = [
  {
    billingName: "Linda Morales",
    billingAddress: "123 Fake Street",
    shippingName: "Linda Morales",
    shippingAddress: "123 Fake Street",
    email: "email@email.com",
    userId: 2,
    total: 30,
    status: "pending"
  },
  {
    billingName: "Sheri Kwong",
    billingAddress: "123 Fake Street",
    shippingName: "Sheri Kwong",
    shippingAddress: "123 Fake Street",
    email: "email@email.com",
    userId: 2,
    total: 100,
    status: "shipped"
  }
];

const orderItem = [
  {
    orderId: 1,
    pokemonId: 1,
    qty: 2
  },
  {
    orderId: 2,
    pokemonId: 3,
    qty: 1
  },
  {
    orderId: 2,
    pokemonId: 4,
    qty: 2
  },
  {
    orderId: 2,
    pokemonId: 10,
    qty: 1
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
  const orderItems = await Promise.all(
    orderItem.map(item => OrderItem.create(item))
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
