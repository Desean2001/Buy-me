require("dotenv").config();

const Sequelize = require('sequelize');

const URI = process.env.DB_NAME

const sequelize = new Sequelize(URI, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
