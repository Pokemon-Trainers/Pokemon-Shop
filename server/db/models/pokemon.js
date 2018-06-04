const Sequelize = require('sequelize');
const db = require('../db');

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/pokeball.png',
  },
  level: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
});

Pokemon.beforeValidate(pokemon => {
  pokemon.name = pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);
});

module.exports = Pokemon;
