const router = require("express").Router();
const { stripeSecret } = require("../../secrets");
const stripe = require("stripe")("sk_test_tnNhjfVp9BOJLcgXTnLbxRWI");

router.post("/stripe", async (req, res, next) => {
  try {
    const charge = await stripe.charges.create(req.body);

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
