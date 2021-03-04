import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../Configs/axios';

const HotPayPayment = ({ shopSelected }) => {
    const playerData = useSelector((state) => state.player.username);
    const history = useHistory();
    if (!playerData) {
        history.push('/login');
    }

    const [selectedPayment, setSelectedPayment] = useState(null);
    const [paymentPrice, setPaymentPrice] = useState(null);
    const [paymentOptions, setPaymentOptions] = useState(null);
    const [codeState, setCodeState] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentNumber, setPaymentNumber] = useState(null);

    useEffect(() => {
        const getPaymentOptions = async () => {
            try {
                const response = await axiosInstance.get('payment/options/' + shopSelected);
                setPaymentOptions(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getPaymentOptions();
    }, [shopSelected]);

    const validateSMS = () => {
        const url = 'payment/sms';
        axiosInstance
            .post(url, {
                shopSelected: shopSelected,
                selectedPremiumDays: selectedPayment,
                playerName: playerData,
                smsCode: codeState,
                number: paymentNumber,
            })
            .then(() => {
                setPaymentSuccess('Pomyślnie zweryfikowano płatność.');
            })
            .catch(() => {
                setPaymentError('Wystąpił błąd, upewnij się że wpisany kod jest prawidłowy.');
            });
    };

    const handleHotPay = () => {
        return (
            <>
                <hr className="mt-3 mb-3"></hr>
                <div className="form-group">
                    <h3 className="form-help">Wyślij wiadomość SMS</h3>
                    <p>
                        Numer: <b>{paymentNumber}</b>
                        <br />
                        Wiadomość: <b>AVR.INSIDEMTA</b>
                        <br />
                        Koszt: <b>{paymentPrice} zł brutto</b>
                        <br />
                    </p>
                </div>

                <div className="form-group">
                    <label htmlFor="smsCode">Wprowadź kod z SMS:</label>
                    <input
                        name="smsCode"
                        id="smsCode"
                        className="form-control"
                        placeholder="Kod SMS"
                        onChange={(e) => setCodeState(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn__dark btn-lg btn-block mt-3"
                        onClick={() => validateSMS()}
                    >
                        Sprawdź kod
                    </button>
                </div>
            </>
        );
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
                                  setPaymentNumber(option.option_smsNumber);
                              }}
                          >
                              <div
                                  className={`${
                                      selectedPayment === option.option_days
                                          ? 'shop__selected '
                                          : ' '
                                  }panel__body__element text-center`}
                              >
                                  <h3 className="fw-900">{option.option_days} dni</h3>
                                  <p>{option.option_price} zł brutto</p>
                              </div>
                          </div>
                      ))
                    : null}
                {selectedPayment ? (
                    handleHotPay()
                ) : (
                    <p className="text-center mt-3">Wybierz interesującą cię opcję zakupu.</p>
                )}
                {paymentError ? (
                    <div className="alert alert-danger mt-3" role="alert">
                        {paymentError}
                    </div>
                ) : (
                    ''
                )}
                {paymentSuccess ? (
                    <div className="alert alert-success mt-3" role="alert">
                        {paymentSuccess}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default HotPayPayment;
