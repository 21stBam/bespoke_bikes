const {  Sale, Product, Customer, Salesperson } = require("../../db/models");
const { body, query, validationResult } = require('express-validator');
const { Op } = require("sequelize");


const router = require("express").Router();

function asyncHandler(cb){
  return async (req,res, next) => {
    try {
      await cb(req, res, next);
    } catch(err) {
      next(err);
    }
  }
}

router.get('/', 
  query('date')
    .optional()
    .isDate()
    .toDate(),
  asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const date =  req.query.date || Date.now();

  const sales = await Sale.findAll({
    where: {
      sale_date: {
        [Op.lt]: date
      }
    },
    include: [
      {
        model: Product,
        attributes: ["name", "commission_percentage"],
      },
      {
        model: Customer,
        attributes: ["first_name", "last_name"],
      },
      {
        model: Salesperson,
        attributes: ["first_name", "last_name"],
      },
    ]
  });

  res.json(sales);
}));

router.post(
  '/', 
  
  body('productId')
    .isInt(),
  body('customerId')
    .isInt(),
  body('salespersonId')
    .isInt(),
  body('sales_date')
    .isDate()
    .toDate(),

  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const new_sale = await Sale.create(req.body);
    res.json(new_sale);
}));

module.exports = router;