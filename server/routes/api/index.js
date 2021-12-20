const router = require("express").Router();

router.use("/products", require("./product"));
router.use("/customers", require("./customer"));
router.use("/sales", require("./sale"));
router.use("/salespersons", require("./salesperson"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
