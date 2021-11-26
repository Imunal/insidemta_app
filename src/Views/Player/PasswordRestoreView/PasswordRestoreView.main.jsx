import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Button from 'Components/Button/Button';
import Input from 'Components/Input/Input';

const PlayerPasswordRestore = ({ player, isAppLoading, tryPasswordReset }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (player) {
      navigate('/player/login');
    }
  });

  const [playerEmail, setPlayerEmail] = useState('');

  const handleFormValidation = (e) => {
    e.preventDefault();
    tryPasswordReset(playerEmail);
  };

  return (
    <div className="container">
      <div className="panel mt-5">
        <div className="panel__header">
          <h1>Resetowanie hasła</h1>
        </div>
        <div className="panel__body">
          <form className="w-50 d-block m-auto" onSubmit={handleFormValidation}>
            <div className="mb-3">
              <Input
                inputType="email"
                inputOnChange={(e) => setPlayerEmail(e.target.value)}
                inputValue={playerEmail}
                inputName="playerEmail"
                inputLabel="Adres e-mail"
                inputPlaceHolder="Wprowadź swój adres e-mail"
                inputRequired={true}
              />
            </div>
            <div className="d-grid">
              <Button isLoading={isAppLoading}>Zresetuj hasło</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerPasswordRestore;

PlayerPasswordRestore.propTypes = {
  player: PropTypes.object,
  isAppLoading: PropTypes.bool,
  tryPasswordReset: PropTypes.func,
};
