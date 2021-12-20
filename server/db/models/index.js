const Customer = require('./customer');
const Discount = require('./discount');
const Product = require('./product');
const Sale = require('./sale');
const Salesperson = require('./salesperson');


// associations
Customer.hasMany(Sale);
Product.hasMany(Sale);
Salesperson.hasMany(Sale);
Sale.belongsTo(Customer, { foreignKey: "customerId" });
Sale.belongsTo(Product, { foreignKey: "productId" });
Sale.belongsTo(Salesperson, { foreignKey: "salespersonId" })
Product.hasMany(Discount);
Discount.belongsTo(Product);

module.exports = {
  Customer,
  Discount,
  Product,
  Sale,
  Salesperson,
};
