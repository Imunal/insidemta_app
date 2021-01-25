import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const HotPayPayment = ({ shopSelected }) => {
  const playerData = useSelector((state) => state.player.username);
  const history = useHistory();
  if (!playerData) {
    history.push("/login");
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
        const response = await axios.get(
          "https://api.insidemta.pl/api/payment/options/" + shopSelected
        );
        setPaymentOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPaymentOptions();
  }, [shopSelected]);

  const validateSMS = () => {
    const url = "https://api.insidemta.pl/api/payment/sms";
    axios
      .post(url, {
        shopSelected: shopSelected,
        selectedPremiumDays: selectedPayment,
        playerName: playerData,
        smsCode: codeState,
        number: paymentNumber
      })
      .then(() => {
        setPaymentSuccess('Pomyślnie zweryfikowano płatność.');
      })
      .catch(() => {
        setPaymentError('Wystąpił błąd, upewnij się że wpisany kod jest prawidłowy.');
      });
  }

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
          <button type="submit" className="btn btn__dark btn-lg btn-block mt-3" onClick={() => validateSMS() }>
            Sprawdź kod
          </button>
        </div>
      </>
    )
  }

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
                <div className={`${selectedPayment === option.option_id ? 'shop__selected ' : ' '}panel__body__element text-center`}>
                  <h3 className="fw-900">{option.option_days} dni</h3>
                  <p>{option.option_price} zł brutto</p>
                </div>
              </div>
            ))
          : null}
        {selectedPayment ? handleHotPay() : (
          <p className="text-center mt-3">
            Wybierz interesującą cię opcję zakupu.
          </p>
        )}
        {paymentError ? (
          <div className="alert alert-danger mt-3" role="alert">
            {paymentError}
          </div>
        ) : ''}
        {paymentSuccess ? (
          <div className="alert alert-success mt-3" role="alert">
            {paymentSuccess}
          </div>
        ) : ''}
      </div>
    </>
  );
};

export default HotPayPayment;

/*getSMSPayment = () => {
    if (!this.state.isSMSPayment) return;
    const smsData = this.getOptionSMS();
    return (
      <>
        <div className="form-group">
          <h3 className="form-help">Wyślij wiadomość SMS</h3>
          <p>
            Numer: {smsData[0]}
            <br />
            Wiadomość: AVR.INSIDEMTA
            <br />
            Koszt: {smsData[1]}
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
            onChange={this.handelInputSMSChange}
            required
            autoComplete="off"
            disabled={this.state.loaderOpen ? true : false}
          />
        </div>

        <div
          className="form-group mb-0 mt-2"
          style={{
            display:
              this.state.isSMSPayment && !this.state.loaderOpen
                ? "block"
                : "none",
          }}
        >
          <button type="submit" className="btn btn__dark btn-block">
            Sprawdź kod
          </button>
        </div>
      </>
    );
  };

  checkSMSPayment = async () => {
    this.setState({ requestOpen: true });

    const url = "https://api.insidemta.pl/api/payment/sms";
    const smsData = this.getOptionSMS();

    axios
      .post(url, {
        shopSelected: this.props.shopSelected,
        selectedPremiumDays: this.state.selectedPremiumDays,
        playerName: this.state.playerName,
        smsCode: this.state.smsCode,
        success: true,
        number: smsData[0],
      })
      .then((response) => {
        if (response.data.status === 1) {
          this.setState({
            requestResult: 1,
            haveError: "",
            isSMSPayment: false,
          });
        } else {
          this.setState({
            haveError: "Podany kod SMS jest niepoprawny.",
            requestOpen: false,
          });
        }
      })
      .catch((error) => {
        this.setState({
          haveError: "Podany kod SMS jest niepoprawny.",
          requestOpen: false,
        });
      });
  };*/
