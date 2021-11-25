import React from 'react';
const PaymentErrorView = () => {
  return (
    <div className="container">
      <div className="panel">
        <div className="panel__body">
          <h1>Płatność nie została zaakceptowana :(</h1>
          <p>
            Wystąpił błąd z przetwarzaniem twojej płatności, spróbuj ponowanie.
            <br />
            Jeżeli błąd będzie się powtarzał prosimy o kontakt z administracją serwera.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentErrorView;
