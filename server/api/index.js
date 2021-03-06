const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/pokemon", require("./pokemon"));
router.use("/review", require("./review"));
router.use("/order", require("./order"));
router.use("/stripe", require("./billing"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
