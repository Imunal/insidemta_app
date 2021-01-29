import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../Configs/axios";

import { loadStripe } from "@stripe/stripe-js";

const StripePayment = ({ shopSelected }) => {
  const playerData = useSelector((state) => state.player.username);
  const history = useHistory();
  if (!playerData) {
    history.push("/login");
  }

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentPrice, setPaymentPrice] = useState(null);
  const [paymentOptions, setPaymentOptions] = useState(null);

  useEffect(() => {
    const getPaymentOptions = async () => {
      try {
        const response = await axiosInstance.get(
          "payment/options/" + shopSelected
        );
        setPaymentOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPaymentOptions();
  }, [shopSelected]);

  const stripePromise = loadStripe(
    "pk_live_51HrJxODB7vD9Db3SmMk5R5crpT53hAeo8NzouOE9p2PGJnfAkbt7Bk315LitFiay9hnfchy15fFVbSLgtCe0oWqG00PRkVHgZn"
  );

  const handleStripe = async () => {
    if (!selectedPayment) return;
    const stripe = await stripePromise;
    try {
      await axiosInstance
        .post("payment/stripe/create-checkout-session", {
          shopSelected: shopSelected,
          selectedPremiumDays: selectedPayment,
          playerName: playerData,
          optionPrice: paymentPrice * 100,
        })
        .then((response) => {
          stripe.redirectToCheckout({ sessionId: response.data.id });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        {paymentOptions
          ? paymentOptions.map((option, index) => (
              <div
                className="col-md-4 mt-2"
                key={index}
                role="button"
                onClick={() => {
                  setSelectedPayment(option.option_days);
                  setPaymentPrice(option.option_price);
                }}
              >
                <div
                  className={`${
                    selectedPayment === option.option_days
                      ? "shop__selected "
                      : " "
                  }panel__body__element text-center`}
                >
                  <h3 className="fw-900">{option.option_days} dni</h3>
                  <p>{option.option_price} zł brutto</p>
                </div>
              </div>
            ))
          : null}
        <div
          className="buttonSMS buttonCard mt-3"
          onClick={() => handleStripe()}
        >
          <div className="buttonSMS__container">
            <p>Płatność Stripe</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StripePayment;
