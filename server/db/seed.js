const { db, Pokemon, Order } = require('./index.js');

const pokemon = [
  {
    name: 'Pikachu',
    type: ['Electric'],
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    level: 2,
    price: 10,
  },
  {
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    level: 4,
    price: 15,
  },
  {
    name: 'Squirtle',
    type: ['Water'],
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    level: 3,
    price: 17,
  },
  {
    name: 'Butterfree',
    type: ['Bug', 'Flying'],
    description:
      'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    level: 5,
    price: 20,
  },
];

const order  = [
  {
    billingName: 'Linda Morales',
    billingAddress: '123 Fake Street',
    shippingName: 'Linda Morales',
    shippingAddress: '123 Fake Street',
    email: 'email@email.com'
  }
]


const seed = async () => {
  try {
    await db.sync({ force: true });
    const pokes = await Promise.all(pokemon.map(poke => Pokemon.create(poke)));
    const orders = await Promise.all(order.map(order => Order.create(order)));
    console.log('Seeding complete');
  } catch (err) {
    console.error('Seeding failed:', err);
  }
  db.close();
};

seed();
