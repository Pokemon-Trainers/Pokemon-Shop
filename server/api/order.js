const router = require('express').Router();
const { Order } = require("../db/models");

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json(order)
  } catch (error) {
    next(error);
  }
})

module.exports = router;
