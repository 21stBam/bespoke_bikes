const router = require("express").Router();
const { Salesperson } = require('../../db/models');
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
  const salespeople = await Salesperson.findAll();
  res.json(salespeople);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const salesperson = await Salesperson.findByPk(req.params.id);
  res.json(salesperson);
}));

router.put('/:id',

  param('id')
  .notEmpty()
  .isInt(),
  body('first_name')
  .optional()
  .isString(),
  body('last_name')
  .optional()
  .isString(),
  body('address')
  .optional()
  .isString(),
  body('phone')
  .optional()
  .isString(),
  body('start_date')
  .optional()
  .isDate()
  .toDate(),
  body('termination_date')
  .optional()
  .isDate()
  .toDate(),
  body('manager')
  .optional()
  .isString(),

  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updated = await Salesperson.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.json(updated)
}));

module.exports = router;