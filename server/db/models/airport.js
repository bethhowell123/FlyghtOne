const Sequelize = require('sequelize');
const db = require('./db');

const Airport = db.define('airports', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
