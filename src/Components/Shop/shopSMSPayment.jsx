import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../Configs/axios';

const HotPayPayment = ({ shopData, playerUID }) => {
  const playerData = useSelector((state) => state.player.UID);
  const navigate = useNavigate();
  if (!playerData) {
    navigate('/login');
  }

  const [isLoading, setIsLoading] = useState(false);
  const [codeState, setCodeState] = useState('');
  const { addToast } = console.log();

  const validateSMS = () => {
    if (!codeState) return addToast('Uzupełnij pole z kodem.', { appearance: 'warning' });
    setIsLoading(true);
    axios
      .post('payment/sms', {
        shopID: shopData.shop_id,
        playerUID: playerUID,
        smsCode: codeState,
        number: shopData.shop_number_hotpay,
      })
      .then(() => {
        return addToast('Pomyślnie zweryfikowano płatność.', { appearance: 'success' });
      })
      .catch(() => {
        return addToast('Wystąpił błąd, upewnij się że wpisany kod jest prawidłowy.', {
          appearance: 'error',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <hr className="mt-3 mb-3"></hr>
      <div className="form-group">
        <h3 className="form-help">Wyślij wiadomość SMS</h3>
        <p>
          Numer: <b>{shopData.shop_number_hotpay}</b>
          <br />
          Wiadomość: <b>AVR.INSIDEMTA</b>
          <br />
          Koszt: <b>{shopData.shop_price_hotpay} zł brutto</b>
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
          required
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn__dark btn-lg btn-block mt-3"
          onClick={() => validateSMS()}
        >
          {isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Wczytywanie...</span>
            </>
          ) : (
            'Sprawdź kod'
          )}
        </button>
      </div>
    </>
  );
};

export default HotPayPayment;

HotPayPayment.propTypes = {
  shopData: PropTypes.object,
  playerUID: PropTypes.number,
};
