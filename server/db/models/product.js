const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  style: DataTypes.STRING,
  purchase_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sale_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commission_percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Product;