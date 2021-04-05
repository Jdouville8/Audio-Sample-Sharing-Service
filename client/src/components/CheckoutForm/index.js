import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Button } from "@material-ui/core";
import BillingDetailsFields from "../BillingFields/index";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#8384f3",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      border: 'none',
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function CheckoutForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    // if (!stripe || !elements) {
    //   // Stripe.js has not loaded yet. Make sure to disable
    //   // form submission until Stripe.js has loaded.
    //   return;
    // }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/stripe/create-payment-intent", {
          amount: 3000,
          id,
        });

        if (response.data.success) {
          console.log("successful payment");
          console.log(response);
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup" style={{ borderRadius: "10px" }}>
            <div className="FormRow">
              <BillingDetailsFields></BillingDetailsFields>
            </div>
          </fieldset>
          <fieldset className="FormGroup" style={{ borderRadius: "10px" }}>
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <Button
            type="submit"
            style={{
              color: "#5e235b",
              marginTop: "10px",
              backgroundColor: "#8989fc",
            }}
          >
            Pay
          </Button>
        </form>
      ) : (
        <div>
          <h2>Get your headphones and a cup of coffee this should be fun!</h2>
        </div>
      )}
    </>
  );
}
