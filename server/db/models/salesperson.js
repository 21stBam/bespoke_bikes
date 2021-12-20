const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db");

const Salesperson = db.define("salesperson", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  termination_date: DataTypes.DATE,
  manager: DataTypes.STRING,
});

module.exports = Salesperson;