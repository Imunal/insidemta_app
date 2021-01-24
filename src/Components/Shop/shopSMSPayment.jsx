import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const HotPayPayment = ({ shopSelected }) => {
  const playerData = useSelector((state) => state.player.nickname);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentPrice, setPaymentPrice] = useState(null);
  const [paymentOptions, setPaymentOptions] = useState(null);

  useEffect(() => {
    const getPaymentOptions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/payment/options/" + shopSelected
        );
        setPaymentOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPaymentOptions();
  }, [shopSelected]);

  const handleHotPay = () => {
    
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
                  setSelectedPayment(option.option_id);
                  setPaymentPrice(option.option_price);
                }}
              >
                <div className={`${selectedPayment === option.option_id ? 'shop__selected ' : ' '}panel__body__element text-center`}>
                  <h3 className="fw-900">{option.option_days} dni</h3>
                  <p>{option.option_price} zł brutto</p>
                </div>
              </div>
            ))
          : null}
        <div className="buttonSMS buttonCard mt-3" onClick={() => handleHotPay()}>
          <div className="buttonSMS__container">
            <p>Płatność HotPay</p>
          </div>
        </div>
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

    const url = "https://admin.insidemta.pl/api/payment/sms";
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
