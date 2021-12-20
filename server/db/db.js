const { Sequelize, DataTypes } = require('sequelize');


const db = new Sequelize({
  dialect: 'sqlite',
  storage: './bespoke.db'
});

module.exports = db;
