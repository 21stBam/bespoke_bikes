const router = require("express").Router();
const { Product } = require('../../db/models');
const { body, param, validationResult } = require('express-validator');

function asyncHandler(cb){
  return async (req,res, next) => {
    try {
      await cb(req, res, next);
    } catch(err) {
      next(err);
    }
  }
}

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const products = await Product.findByPk(req.params.id);
  res.json(products);
}));

router.put(
  '/:id',

  param('id')
    .notEmpty()
    .isInt(),
  body('name')
    .optional()
    .isString(),
  body('manufacturer')
    .optional()
    .isString(),
  body('style')
    .optional()
    .isString(),
  body('purchase_price')
    .optional()
    .isFloat(),
  body('sale_price')
    .optional()
    .isFloat(),
  body('quantity')
    .optional()
    .isInt(),
  body('commission_percentage')
    .optional()
    .isInt(),

  asyncHandler( async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updated = await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.json(updated);
}));

module.exports = router;