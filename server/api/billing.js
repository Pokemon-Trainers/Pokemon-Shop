const router = require("express").Router();
const { stripeSecret } = require("../../secrets");
const stripe = require("stripe")("sk_test_tnNhjfVp9BOJLcgXTnLbxRWI");

router.post("/stripe", async (req, res, next) => {
  try {
    const token = req.body.stripeToken;
    const customer = await stripe.customers.create({
      source: token,
      email: req.body.email
    });
    const charge = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "example charge",
      customer: customer.id
    });
    console.log("token", token);
    console.log("customer", customer);
    console.log("charge", charge);
    res.sendStatus(200).json(charge);
  } catch (err) {
    next(err);
  }
});

// const charge = stripe.charges.create({
//   amount: 999,
//   currency: "usd",
//   source: "tok_visa",
//   receipt_email: "jenny.rosen@example.com"
// });

module.exports = router;
