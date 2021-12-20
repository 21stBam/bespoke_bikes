const router = require("express").Router();
const { Customer } = require('../../db/models');

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
  const customers = await Customer.findAll();
  res.json(customers);
}));

module.exports = router;