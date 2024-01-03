import React from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./Checkoutform.css";

const Checkoutform = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // Handle successful payment or redirection
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ height: "80vh" }}>
      <div className="paymentform">
        <PaymentElement />
      </div>
      <button className="paymentformbtn">Submit</button>
    </form>
  );
};

export default Checkoutform;
