import {useState} from 'react';

import HotPayPayment from './shopSMSPayment';
import StripePayment from './shopStripePayment';

import HotPayLogo from '../../Assets/Images/Payment/hotpay-white.png';
import StripeLogo from '../../Assets/Images/Payment/stripe.svg';

const ShopPopup = ({shopSelected, popupClose}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const renderPaymentMethodView = () => {
    if(selectedPaymentMethod === 1) {
      return <StripePayment shopSelected={shopSelected} />;
    } else if(selectedPaymentMethod === 2){
      return <HotPayPayment shopSelected={shopSelected} />;
    }
  }

    return (
      <div className={shopSelected ? "popup showed" : "popup"}>
        <div className="popup_anim">
          <div className="popup_box">
            <span className="popup_close" onClick={popupClose}>×</span>
            <h2>Formularz zakupu</h2>
            <hr />

            {selectedPaymentMethod ?
                (
                  <>
                  {renderPaymentMethodView()}
                  </>
                ) : (
                  <>
                  <div className="row">
                    <div className="col-md-6 align-self-center" role="button" onClick={() => setSelectedPaymentMethod(1)}>
                        <div>
                          <img src={StripeLogo} className="img-fluid" alt="Płatności online"/>
                          <p className="text-small text-muted text-center">
                            Płatności online
                          </p>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center" role="button" onClick={() => setSelectedPaymentMethod(2)}>
                      <div>
                          <img src={HotPayLogo} className="img-fluid" alt="Płatności SMS"/>
                          <p className="text-small text-muted text-center">
                            Płatność SMS
                          </p>
                        </div>
                    </div>
                  </div>
                  <p className="text-muted text-center mt-3">Wybierz dogodną dla ciebie formę płatności</p>
                  </>
                )
            }
        </div>
      </div>
    </div>
    );
}

export default ShopPopup;
