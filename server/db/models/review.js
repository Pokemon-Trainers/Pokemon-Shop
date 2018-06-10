const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  rating: {
    type: Sequelize.DECIMAL(2, 1),
    defaultValue: 0,
    validate: {
      max: 5,
    },
    // get() {
    //   return this.getDataValue('rating') / 10;
    // },
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Review;
