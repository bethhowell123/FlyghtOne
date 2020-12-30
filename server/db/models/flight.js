const Sequelize = require('sequelize');
const db = require('../db');

const Flight = db.define('flight', {
  flightNumber: {
    type: Sequelize.INTEGER,
  },
  origin: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 3],
    },
  },
  destination: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 3],
    },
  },
});

module.exports = Flight;
