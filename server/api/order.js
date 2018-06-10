const router = require('express').Router();
const { Order, OrderItem } = require("../db/models");

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [{ all: true });
    res.json(orders);
  } catch (error) {
    next (error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.json(order)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const order = await Order.create(req.body);

    req.body.cart.map(async item => {
      await OrderItem.create({
        qty: item.qty,
        pokemonId: item.itemId,
        orderId: order.id
      })
    })
    res.status(200).json(order)
  } catch (error) {
    next(error);
  }
})

module.exports = router;
