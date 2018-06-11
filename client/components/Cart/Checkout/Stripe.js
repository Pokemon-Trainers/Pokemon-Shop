import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_6RT1KyfLdAqwxOZoNuwlTEnH"
    : "pk_test_6RT1KyfLdAqwxOZoNuwlTEnH";

const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://myapidomain.com"
    : "http://localhost:8080";

const CURRENCY = "USD";

const fromCurrToCent = amount => amount * 100;

const onToken = (amount, description) => token => {
  try {
    axios.post(
      "/stripe",
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount
      },
      console.log("token", token)
    );
  } catch (err) {
    console.err(err);
  }
};

const StripedCheckout = ({ name, description, amount }) => (
  <StripeCheckout
    name="Tommy"
    description="get down on it"
    amount={fromCurrToCent(200)}
    token={onToken(fromCurrToCent(200), description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default StripedCheckout;
