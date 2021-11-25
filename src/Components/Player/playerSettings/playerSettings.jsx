import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosConfig from 'Configs/axios';

const playerSettings = () => {
  const playerData = useSelector((state) => state.player);
  const [playerRolePlayName, setPlayerRolePlayName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const updatePlayerRolePlayName = () => {
    if (!playerRolePlayName) return;
    setIsLoading(true);
    axiosConfig
      .put('/player/setPlayerRPName', {
        playerToken: playerData.personalToken,
        playerNewRPName: playerRolePlayName,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updatePlayerName = () => {
    if (!playerName) return;
    setIsLoading(true);
    axiosConfig
      .put('/player/setPlayerName', {
        playerToken: playerData.personalToken,
        playerNewName: playerName,
      })
      .then(() => {
        //addToast('Twój nick został zmieniony pomyślnie', { appearance: 'success' });
      })
      .catch(() => {
        //addToast('Podany nick jest już zajęty, proszę wybierz inny.', {
        //  appearance: 'error',
        //});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h5 className="fw-900">Ustawienia twojego konta:</h5>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="playerRPUserName"
              placeholder="Wprowadź swój nick Role-Play"
              onChange={(e) => setPlayerRolePlayName(e.target.value)}
            />
            <label htmlFor="playerRPUserName">Wprowadź swój nowy nick Role-Play</label>
          </div>
          <p className="small text-muted">
            Pamiętaj że swój nick Role-Play możesz zmienić raz na miesiąc!
          </p>
          <button
            className="btn btn__dark btn-lg btn-block"
            onClick={() => updatePlayerRolePlayName()}
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
              'Zmień swój nick Role-Play'
            )}
          </button>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="playerName"
              placeholder="Wprowadź swój nowy nick"
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <label htmlFor="playerName">Wprowadź swój nowy nick</label>
          </div>
          <p className="small text-muted">Pamiętaj że swój nick możesz zmienić raz na miesiąc!</p>
          <button className="btn btn__dark btn-lg btn-block" onClick={() => updatePlayerName()}>
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
              'Zmień swój nick'
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default playerSettings;
