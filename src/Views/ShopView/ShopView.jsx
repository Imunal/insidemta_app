import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Collapsible from 'react-collapsible';

import HotPayPayment from '../../Components/Shop/shopSMSPayment';
import { loadStripe } from '@stripe/stripe-js';

import axios from '../../Configs/axios';

const ShopView = () => {
  const playerData = useSelector((state) => state.player);
  const navigate = useNavigate();
  if (!playerData.personalToken) {
    navigate('/login');
  }

  const [shopItems, setShopItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [paymentMethodSelected, setPaymentMethodSelected] = useState(null);
  const [isStripeLoading, setIsStripeLoading] = useState(false);

  const stripePromise = loadStripe(
    'pk_live_51HrJxODB7vD9Db3SmMk5R5crpT53hAeo8NzouOE9p2PGJnfAkbt7Bk315LitFiay9hnfchy15fFVbSLgtCe0oWqG00PRkVHgZn'
  );

  useEffect(() => {
    const loadShopItems = async () => {
      try {
        const response = await axios.get('/shop');
        setShopItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadShopItems();
  }, []);

  const selectItems = (item) => {
    setSelectedItem(item);
    setPaymentMethodSelected(null);
  };

  const renderItems = () => {
    let shops = [];
    let shopNames = [];
    shopItems.forEach((item) => {
      if (!shops[item.shop_item_category]) {
        shops[item.shop_item_category] = [];
        shopNames[item.shop_item_category] = item.shop_item_name.substr(
          0,
          item.shop_item_name.indexOf('(')
        );
      }
      item.shopName = shopNames[item.shop_item_category];
      shops[item.shop_item_category].push(item);
    });
    return (
      <div>
        {shops.map((category, index) => {
          return (
            <Collapsible
              trigger={category[0].shopName}
              transitionTime={200}
              className={'shopCategory-' + category[0].shop_item_category}
              key={index}
            >
              <div className="row">
                {category.map((item) => {
                  return (
                    <div className="col-md-4 mt-2" key={item.shop_id}>
                      <div
                        className="panel__body__element"
                        onClick={() => selectItems(item)}
                        role="button"
                      >
                        <h4 className="fw-light text-center text-uppercase">
                          {item.shop_item_name.substring(
                            item.shop_item_name.lastIndexOf('(') + 1,
                            item.shop_item_name.lastIndexOf(')')
                          )}
                        </h4>
                        <hr />
                        <p className="small text-muted text-center pb-0 mb-0">
                          Naciśnij aby dodać do koszyka!
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Collapsible>
          );
        })}
      </div>
    );
  };

  const handlePayment = async (item, paymentType) => {
    setPaymentMethodSelected(paymentType);
    if (paymentType === 1) {
      try {
        setIsStripeLoading(true);
        const response = await axios.post('/payment/stripe/create-checkout-session', {
          shopID: item.shop_id,
          playerUID: playerData.UID,
        });
        const stripe = await stripePromise;
        stripe.redirectToCheckout({ sessionId: response.data.id });
      } catch (error) {
        console.log(error);
      } finally {
        setIsStripeLoading(false);
      }
    } else if (paymentType === 3) {
      return;
    } else {
      return;
    }
  };

  const renderSummary = () => {
    return (
      <div>
        <p>
          1x : <b>{selectedItem.shop_item_name}</b>
        </p>
        {selectedItem.shop_price_stripe ? (
          <p className="pb-0 mb-0">
            Cena Stripe: <b>{selectedItem.shop_price_stripe}zł</b>
          </p>
        ) : (
          ''
        )}
        {selectedItem.shop_price_hotpay ? (
          <p className="pb-0 mb-0">
            Cena HotPay (SMS): <b>{selectedItem.shop_price_hotpay}zł</b>
          </p>
        ) : (
          ''
        )}
        {selectedItem.shop_price_cashbill ? (
          <p className="pb-0 mb-0">
            Cena CashBill (PSC): <b>{selectedItem.shop_price_cashbill}zł</b>
          </p>
        ) : (
          ''
        )}
        <hr />
        {selectedItem.shop_price_stripe ? (
          <button
            className="btn btn__stripe btn-block btn-lg block__center mt-2"
            onClick={() => handlePayment(selectedItem, 1)}
          >
            {isStripeLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Wczytywanie...</span>
              </>
            ) : (
              'Zapłac przy pomocy Stripe'
            )}
          </button>
        ) : (
          ''
        )}

        {selectedItem.shop_price_hotpay ? (
          <button
            className="btn btn__hotpay btn-block btn-lg block__center mt-2"
            onClick={() => handlePayment(selectedItem, 2)}
          >
            Zapłac przy pomocy HotPay
          </button>
        ) : (
          ''
        )}

        {selectedItem.shop_price_cashbill ? (
          <button
            className="btn btn__cashbill btn-block btn-lg block__center mt-2"
            onClick={() => handlePayment(selectedItem, 3)}
            disabled
          >
            Zapłac przy pomocy CashBill
          </button>
        ) : (
          ''
        )}

        {paymentMethodSelected === 2 ? (
          <HotPayPayment shopData={selectedItem} playerUID={playerData.UID} />
        ) : (
          ''
        )}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Sklep</h1>
          </div>
          <div className="panel__body">
            <div className="row">
              <div className="col-md-8">
                {shopItems.length ? renderItems() : 'Nie można załadować sklepu'}
              </div>
              <div className="col-md-4">
                <div className="panel__header">
                  <h1>Twój koszyk:</h1>
                  <hr />
                  {Object.getOwnPropertyNames(selectedItem).length !== 0
                    ? renderSummary()
                    : 'Nie dodałeś żadnego przedmiotu do koszyka'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopView;
