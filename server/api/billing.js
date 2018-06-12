const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/stripe', async (req, res, next) => {
  try {
    const charge = await stripe.charges.create(req.body);

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
