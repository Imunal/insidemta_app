const PaymentSuccessView = () => {
  return (
    <div className="panel__body container">
      <div className="panel">
        <div className="panel__body">
          <h1>Płatność została zaakceptowana!</h1>
          <p>
            Dziękujemy za zakup. Zakupiona usługa powinna zaleźć się w twoim{" "}
            <b>ekwipunku</b>! W przypadku problemów prosimy o kontakt z Zarządem
            serwera.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessView;
