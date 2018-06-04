const db = require('./db');

// register models
const { Pokemon } = require('./models');

module.exports = { db, Pokemon };
