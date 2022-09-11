import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

import Button from "Components/Button/Button";

const Payment = () => {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          console.log("succeeded");
          toast.success("Płatność powiodła się");
          break;
        case "processing":
          console.log("processing");
          break;
        case "requires_payment_method":
          console.log("requires_payment_method");
          toast.error("Płatność nie została zrealizowana, spróbuj ponownie.");
          break;
        default:
          toast.error("Coś poszło nie tak.");
          break;
      }
    });
  }, [stripe]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred.");
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <PaymentElement id="payment-element" />
      <Button isLoading={isLoading || !stripe || !elements}>
        Przejdź do płatności
      </Button>
      {message && (
        <div id="payment-message" className="text-gray-400">
          {message}
        </div>
      )}
    </form>
  );
};

export default Payment;
