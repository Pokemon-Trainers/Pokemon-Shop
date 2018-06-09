const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  billingName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  shippingName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.ENUM('inCart', 'pending', 'complete'),
    defaultValue: 'inCart',
  },
  total: {
    type: Sequelize.INTEGER,
  },
});



module.exports = Order;
