import React from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

import PaymentInfo from "../../Assets/Json/paymentInfo.json";
import PayPalInfo from "../../Assets/Json/paypalInfo.json";

import Sadface from "../../Assets/Images/Shop/error.png";
import Happyface from "../../Assets/Images/Shop/success.png";

class shopPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentOn: false,
      playerName: "",
      selectedPremiumDays: 0,
      loaderOpen: false,
      requestOpen: false,
      smsCode: null,
    };
  }

  stripePromise = loadStripe(
    "pk_live_51HrJxODB7vD9Db3SmMk5R5crpT53hAeo8NzouOE9p2PGJnfAkbt7Bk315LitFiay9hnfchy15fFVbSLgtCe0oWqG00PRkVHgZn"
  );

  PayPalOptions = {
    clientId: PayPalInfo.clientId,
    currency: "PLN",
    disableFunding: "card",
  };

  //const PremiumInfo = Object.values(PaymentInfo)

  componentDidUpdate(props) {
    if (!this.props.shopSelected) return;
    if (this.props.shopSelected !== props.shopSelected) {
      if (this.props.shopSelected > 2)
        this.setState({
          isPaymentOn: false,
          selectedPremiumDays: this.PremiumInfo[
            this.props.shopSelected - 1
          ][0][0],
        });
      else this.setState({ isPaymentOn: false, selectedPremiumDays: null });
    }
  }

  popupClose = () => {
    if (this.state.requestOpen && !this.state.requestResult) return;
    this.setState({
      isSMSPayment: null,
      requestOpen: null,
      requestResult: null,
      haveError: null,
      isPaymentOn: false,
    });
    this.props.popupClose();
  };

  getSelectData = () => {
    if (!this.props.shopSelected) return;

    if (this.props.shopSelected <= 2)
      return (
        <>
          <div className="form-group">
            <label htmlFor="selectedPremiumDays">Wybierz liczbę dni:</label>
            <div className="dropdown">
              <select
                value={this.state.selectedPremiumDays}
                id="selectedPremiumDays"
                className="dropdown-select"
                onChange={this.handelSelectFormChange}
                disabled={
                  this.state.isPaymentOn || this.state.isSMSPayment
                    ? true
                    : false
                }
                required
              >
                <option value="">Wybierz...</option>
                {this.PremiumInfo[this.props.shopSelected - 1].map((data) => (
                  <option value={data[1]} key={data[1]}>
                    {data[1]}dni za {data[0]}zł
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      );
    else
      return (
        <h3 className="form-help">Cena: {this.state.selectedPremiumDays} zł</h3>
      );
  };

  getOptionPrice = () => {
    if (!this.props.shopSelected) return;

    if (this.props.shopSelected <= 2)
      for (
        let index = 0;
        index < this.PremiumInfo[this.props.shopSelected - 1].length;
        index++
      ) {
        const data = this.PremiumInfo[this.props.shopSelected - 1][index];
        if (data[1] === parseInt(this.state.selectedPremiumDays))
          return data[0];
      }
    else return this.state.selectedPremiumDays;
  };

  getOptionIndex = () => {
    if (!this.props.shopSelected) return 0;

    if (this.props.shopSelected <= 2) {
      for (
        let index = 0;
        index < this.PremiumInfo[this.props.shopSelected - 1].length;
        index++
      ) {
        const data = this.PremiumInfo[this.props.shopSelected - 1][index];
        if (data[1] === parseInt(this.state.selectedPremiumDays)) return index;
      }
      return 0;
    } else return 0;
  };

  getOptionSMS = () => {
    if (!this.props.shopSelected) return [0, 0, 0];

    if (this.props.shopSelected <= 2) {
      for (
        let index = 0;
        index < this.PremiumInfo[this.props.shopSelected - 1].length;
        index++
      ) {
        const data = this.PremiumInfo[this.props.shopSelected - 1][index];
        if (data[1] === parseInt(this.state.selectedPremiumDays))
          return [data[2], data[3]];
      }
    } else {
      const data = this.PremiumInfo[this.props.shopSelected - 1][0];
      return [data[2], data[3]];
    }

    return [0, 0];
  };

  handelInputFormChange = (event) => {
    this.setState({ playerName: event.target.value });
  };

  handelSelectFormChange = (event) => {
    this.setState({ selectedPremiumDays: event.target.value });
  };

  handelInputSMSChange = (event) => {
    this.setState({ smsCode: event.target.value });
  };

  selectSMSPayment = () => {
    this.setState({ isPaymentOn: null, isSMSPayment: true });
  };

  submitForm = (event) => {
    event.preventDefault();
    if (this.state.isSMSPayment) return this.checkSMSPayment();

    this.setState({ loaderOpen: true });

    const url = "https://admin.insidemta.pl/api/player/validate";
    axios
      .post(url, {
        playerName: this.state.playerName,
      })
      .then((response) => {
        if (response.data) {
          this.setState({
            isPaymentOn: true,
            haveError: "",
            loaderOpen: false,
          });
        } else {
          this.setState({
            haveError: "Podany użytkownik nie został odnaleziony.",
            loaderOpen: false,
          });
        }
      })
      .catch((error) => {
        this.setState({
          haveError: "Podany użytkownik nie został odnaleziony.",
          loaderOpen: false,
        });
      });
  };

  getRequestResult = () => {
    if (this.state.requestResult === 0) {
      return (
        <div className="block__center w-100 h-100">
          <img
            src={Sadface}
            className="img-fluid mx-auto d-block m-2"
            alt="Error"
            height={128}
            width={128}
          />
          <p className="text-small text-center text-muted mb-0">
            Coś poszło nie tak...
          </p>
        </div>
      );
    } else if (this.state.requestResult === 1) {
      return (
        <div className="block__center w-100 h-100">
          <img
            src={Happyface}
            className="img-fluid mx-auto d-block m-2"
            alt="Success"
            height={128}
            width={128}
          />
          <p className="text-center text-muted mt-4 mb-0">
            Płatność została zrealizowana pomyślnie
          </p>
        </div>
      );
    }
    return;
  };

  getSMSButton = () => {
    if (!this.props.shopSelected) return;

    let index = this.getOptionIndex();
    if (this.PremiumInfo[this.props.shopSelected - 1][index][3] === "block")
      return;

    return (
      <div className="buttonSMS" onClick={() => this.selectSMSPayment()}>
        <div className="buttonSMS__container">
          <p>Płatność SMS</p>
        </div>
      </div>
    );
  };

  getStripeButton = () => {
    return (
      <div className="buttonSMS buttonCard" onClick={() => this.handleStripe()}>
        <div className="buttonSMS__container">
          <p>Płatność kartą</p>
        </div>
      </div>
    );
  };

  handleStripe = async () => {
    const stripe = await this.stripePromise;

    try {
      await axios
        .post(
          "https://admin.insidemta.pl/api/payment/stripe/create-checkout-session",
          {
            shopSelected: this.props.shopSelected,
            selectedPremiumDays: this.state.selectedPremiumDays,
            playerName: this.state.playerName,
            price: this.getOptionPrice() * 100,
          }
        )
        .then((response) => {
          const result = stripe.redirectToCheckout({
            sessionId: response.data.id,
          });

          if (result.error) {
            this.setState({ requestResult: 0 });
          }
        });
    } catch (error) {
      this.setState({ requestResult: 0 });
    }
  };

  getSMSPayment = () => {
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
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  render() {
    return (
      <div className={this.props.shopSelected ? "popup showed" : "popup"}>
        <div className="popup_anim">
          <div className="popup_box">
            <span className="popup_close" onClick={this.popupClose}>
              ×
            </span>
            <h2>Formularz zakupu</h2>
            <hr />

            {this.getRequestResult()}

            <div
              className="block__center w-100 h-100 mt-5 mb-0"
              style={{
                display: this.state.requestOpen
                  ? this.state.requestResult
                    ? "none"
                    : "block"
                  : "none",
              }}
            >
              <Loader type="Bars" color="#ccc" height={50} width={50} />
              <p className="text-small text-center text-muted">
                Trwa przetwarzanie płatności
              </p>
            </div>

            <form
              onSubmit={this.submitForm}
              style={{ display: this.state.requestOpen ? "none" : "block" }}
            >
              <div className="form-group">
                <label htmlFor="playerName">Wprowadź nick z gry:</label>
                <input
                  name="playerName"
                  id="playerName"
                  className="form-control"
                  placeholder="Wpisz swój nick"
                  onChange={this.handelInputFormChange}
                  required
                  autoComplete="off"
                  disabled={
                    this.state.isPaymentOn || this.state.isSMSPayment
                      ? true
                      : false
                  }
                />
              </div>

              {this.getSelectData()}

              <p
                style={{ display: this.state.haveError ? "block" : "none" }}
                className="text-danger text-center m-3"
              >
                {this.state.haveError}
              </p>

              <div
                className="form-group mb-0 mt-3"
                style={{
                  display:
                    this.state.isPaymentOn ||
                    this.state.loaderOpen ||
                    this.state.isSMSPayment
                      ? "none"
                      : "block",
                }}
              >
                <button type="submit" className="btn btn__dark btn-block">
                  Przejdź do płatności
                </button>
              </div>

              {this.getSMSPayment()}
            </form>

            <div
              className="block__center w-100 h-100 mt-5 mb-0"
              style={{ display: this.state.loaderOpen ? "block" : "none" }}
            >
              <Loader type="Bars" color="#ccc" height={50} width={50} />
              <p className="text-small text-center text-muted">
                Trwa pobieranie danych z serwera
              </p>
            </div>

            {this.state.isPaymentOn && (
              <div
                className="popup_scroll mt-4"
                style={{
                  display: this.state.isPaymentOn
                    ? this.state.requestOpen
                      ? "none"
                      : "block"
                    : "none",
                }}
              >
                <h3 className="form-help">Wybierz metodę płatności</h3>
                <div className="mt-3">
                  {/* <PayPalButton
                        options={this.PayPalOptions}
                        createOrder={(data: any, actions: any) => {
                          return actions.order.create({
                            purchase_units: [{
                              amount: {
                                currency_code: "PLN",
                                value: this.getOptionPrice()
                              }
                            }],
                          });
                        }}
                        onApprove={(data: any, actions: any) => {
                          const selectedPremiumDays = this.state.selectedPremiumDays;
                          const playerName = this.state.playerName;
                          const shopSelected = this.props.shopSelected;
                          const self = this;

                          self.setState({requestOpen: true})

                          // Capture the funds from the transaction
                          return actions.order.capture().then(function (details: any) {
                            // Show a success message to your buyer
                            // alert("Transaction completed by " + details.payer.name.given_name);

                            const url = 'https://admin.insidemta.pl/api/payment/paypal';
                            return axios.post(url, {
                                shopSelected: shopSelected,
                                selectedPremiumDays: selectedPremiumDays,
                                playerName: playerName,
                                orderID: data.orderID,
                                success: true
                            })
                              .then(function (response) {
                                if(response.data.status === 1)
                                {
                                  self.setState({requestOpen: true, requestResult: 1})
                                } else {
                                  self.setState({requestOpen: true, requestResult: 0})
                                }
                              })
                              .catch(function (error) {
                                if (error)
                                {
                                  self.setState({requestOpen: true, requestResult: 0})
                                }
                              })
                          });
                        }}
                      /> */}
                  {this.getStripeButton()}
                  {this.getSMSButton()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default shopPopup;
