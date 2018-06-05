const db = require('./db');

// register models
const { Pokemon, Order } = require('./models');

module.exports = { db, Pokemon, Order };
