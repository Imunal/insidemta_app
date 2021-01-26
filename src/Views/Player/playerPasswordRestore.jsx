import { useState } from "react";
import axios from 'axios';

function PlayerPasswordRestore() {
  const [userEmail, setUserEmail] = useState(null);
  const [paymentError, setPaymentError] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const resetPassword = () => {
      if(!userEmail) return;
      axios.post('https://api.insidemta.pl/api/player/passwordReset', {
        playerEmail: userEmail
      }).then(() => {
        setPaymentSuccess('Na twój adres e-mail została wysłana wiadomość z nowym hasłem.');
      }).catch(() => {
        setPaymentError('Wystąpił błąd, upewnij się że wpisany adres e-mail jest poprawny.');
      })
  }

  return (
    <div className="container mt-5">
      <div className="panel">
        <div className="panel__header">
          <h1>Resetowanie hasła</h1>
        </div>
        <div className="panel__body">
            <div className="w-50 mx-auto">
                {paymentError ? (
                <div className="alert alert-danger" role="alert">
                    {paymentError}
                </div>
                ) : ''}
                {paymentSuccess ? (
                <div className="alert alert-success" role="alert">
                    {paymentSuccess}
                </div>
                ) : ''}
                <div className="form-floating mb-3">
                    <input
                      type="email"
                      htmlFor="emailInput"
                      onChange={(e) => setUserEmail(e)}
                      className="form-control"
                      id="emailInput"
                      placeholder="Wprowadź swój adres e-mail"
                      required
                    />
                    <label htmlFor="emailInput">Wprowadź swój adres e-mail</label>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn__dark btn-lg btn-block" onClick={() => resetPassword() }>
                        Zresetuj hasło
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerPasswordRestore;
