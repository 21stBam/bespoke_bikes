const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db");
const Product = require('./product');

const Discount = db.define("discount", {
  productId: {
    type: DataTypes.INTEGER,

    references: {
      model: Product,
      key: "id",
    },
  },
  begin_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  discount_percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Discount;