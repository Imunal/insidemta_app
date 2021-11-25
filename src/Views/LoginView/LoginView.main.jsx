import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { auto } from '@popperjs/core';
import Input from 'Components/Input/Input';
import Button from 'Components/Button/Button';

function LoginView({ player, isAppLoading, tryAuthenticate }) {
  const [playerLogin, setPlayerLogin] = useState('');
  const [playerPassword, setPlayerPassword] = useState('');

  const navigate = useNavigate();
  if (player.personalToken) {
    navigate('/account');
  }

  const validateForm = (e) => {
    e.preventDefault();
    if (!playerLogin && !playerPassword) {
      return;
    }
    tryAuthenticate(playerLogin, playerPassword);
  };

  const renderLoginElements = () => {
    return (
      <div style={{ maxWidth: 500, margin: auto }}>
        <h3 className="text-center">Zaloguj się</h3>
        <form
          className="d-block m-auto mt-4"
          onSubmit={(e) => validateForm(e)}
          style={{ alignSelf: 'center', maxWidth: 400 }}
        >
          <div className="mb-3">
            <Input
              inputType="text"
              inputValue={playerLogin}
              inputName="playerLogin"
              inputPlaceHolder="Wprowadź swój login"
              inputLabel="Login"
              inputOnChange={(e) => setPlayerLogin(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Input
              inputType="password"
              inputValue={playerLogin}
              inputName="playerPassword"
              inputPlaceHolder="Wprowadź swoje hasło"
              inputLabel="Hasło"
              inputOnChange={(e) => setPlayerPassword(e.target.value)}
            />
          </div>
          <Button isLoading={isAppLoading}>Zaloguj się</Button>
          <Link
            to="/reset-password"
            className="text-muted mt-4 d-block text-center text-decoration-none text-uppercase font-weight-bold"
            style={{ fontSize: 14 }}
          >
            Nie możesz się zalogować?
          </Link>
        </form>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Panel gracza</h1>
          </div>
          <div className="panel__body">{renderLoginElements()}</div>
        </div>
      </div>
    </>
  );
}

export default LoginView;

LoginView.propTypes = {
  player: PropTypes.object,
  isAppLoading: PropTypes.bool,
  tryAuthenticate: PropTypes.func,
};
