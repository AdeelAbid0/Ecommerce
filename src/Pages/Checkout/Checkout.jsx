import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "../Checkoutform/Checkoutform";
import "../Checkout/Checkout.css";
const stripePromise = loadStripe(
  "pk_test_51OSNhDJ5aY0RU3FruovINIIDmozCSn0lT9Wq0DnH5RbAIQDSQeY6Z57CHALUjjhvS0LImdQIvtajBFOEm9eGAea900l6Gte9e7"
);
const Checkout = () => {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 500,
  };
  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <Checkoutform />
      </Elements>
    </>
  );
};

export default Checkout;
