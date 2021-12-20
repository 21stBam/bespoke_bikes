const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db");
const Customer = require('./customer');
const Product = require('./product');
const Salesperson = require('./salesperson');

const Sale = db.define("sale", {
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id',
    },
  },
  salespersonId: {
    type: DataTypes.INTEGER,
    references: {
      model: Salesperson,
      key: 'id',
    },
  },
  sale_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Sale;