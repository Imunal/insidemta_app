import { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from '../../Configs/axios';
import Loader from 'react-loader-spinner';

import PlayerVehicles from '../Player/Information/playerVehicles';
import PlayerRealEstate from '../Player/Information/playerRealEstate';
import PlayerOrganizations from '../Player/Information/playerOrganizations';

import { useParams, useHistory } from 'react-router-dom';

const PlayerView = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const [playerData, setPlayerData] = useState([]);

  const { playerUID } = useParams();
  if (!playerUID || isNaN(playerUID)) {
    addToast('Nie znaleziono gracza.', { appearance: 'error' });
    history.push('/search/player');
  }

  useEffect(() => {
    fetchPlayerData();
    // eslint-disable-next-line
  }, []);

  const fetchPlayerData = () => {
    axios
      .get(`/player/${playerUID}`)
      .then((response) => {
        setPlayerData(response.data);
      })
      .catch((error) => {
        addToast('Nie znaleziono gracza.', { appearance: 'error' });
        history.push('/search/player');
      });
  };

  const renderPenalties = () => {
    return playerData.penalties.map((penaltie) => (
      <div className="col-md-4 mb-2" key={penaltie.id}>
        <div className="panel__body__element text-center">
          <span className="text-break">Powód: {penaltie.reason}</span>
          <br />
          <span>Czas: {new Date(penaltie.time).toLocaleDateString('pl-PL')}</span>
          <br />
          <span className="badge bg-danger mx-1">{penaltie.type}</span>{' '}
          <span className="badge bg-secondary">{penaltie.admin}</span>
        </div>
      </div>
    ));
  };

  const renderPlayerData = () => {
    return (
      <>
        <h5 className="fw-900">Podstawowe informacje o koncie gracza:</h5>
        <hr />
        <div className="row">
          <div className="col-md-2 align-self-center">
            <img
              className="panel__body__image img-fluid"
              src={`https://cdn.insidemta.pl/skins/${playerData.player.skin}.png`}
              alt="Skin"
              loading="lazy"
            />
          </div>
          <div className="col-md-5 align-self-center">
            <p className="mb-1">
              UID: <b>{playerData.player.UID}</b>
            </p>
            <p className="mb-1">
              Typ konta:
              {playerData.player.gold ? (
                <span className="badge bg-warning text-dark mx-1">Gold</span>
              ) : (
                ''
              )}
              {playerData.player.diamond ? (
                <span className="badge bg-info text-dark">Diament</span>
              ) : (
                ''
              )}
              {!playerData.player.gold || !playerData.player.diamond ? (
                <span className="badge bg-secondary">Zwykłe</span>
              ) : (
                ''
              )}
            </p>
            <p className="mb-1">
              Nazwa: <b>{playerData.player.username}</b>
            </p>
            <p className="mb-1">
              Utworzono dnia:{' '}
              <b>{new Date(playerData.player.created).toLocaleDateString('pl-PL')}</b>
            </p>
            <p className="mb-1">
              Ostatnio w grze:{' '}
              <b>{new Date(playerData.player.created).toLocaleDateString('pl-PL')}</b>
            </p>
          </div>
          <div className="col-md-5 align-self-center">
            <div className="mb-1 d-flex align-items-center">
              Życie:
              <div className="progress w-100 ms-1">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{
                    width: parseInt(playerData.player.health),
                  }}
                  aria-valuenow={parseInt(playerData.player.health)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <p className="mb-1">
              Gotówka: <b>${playerData.player.money}</b>
            </p>
            <p className="mb-1">
              Saldo konta bankowego: <b>${playerData.player.bankmoney}</b>
            </p>
          </div>
        </div>
        <div className="mt-3">
          {playerData.penalties.length ? <div className="row">{renderPenalties()}</div> : ''}
        </div>
        <div className="mt-3">
          {playerData.vehicles.length ? (
            <div className="row">{<PlayerVehicles playerVehicles={playerData.vehicles} />}</div>
          ) : (
            ''
          )}
        </div>
        <div className="mt-3">
          {playerData.realestates.length ? (
            <div className="row">
              {<PlayerRealEstate playerRealEstate={playerData.realestates} />}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="mt-3">
          {playerData.organizations.length ? (
            <div className="row">
              {<PlayerOrganizations playerOrganizations={playerData.organizations} />}
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Podgląd gracza</h1>
          </div>
          <div className="panel__body">
            {playerData.player ? (
              renderPlayerData()
            ) : (
              <div className="block__center w-100 h-100 mt-5 mb-5">
                <Loader type="Bars" color="#ccc" height={50} width={50} />
                <p className="text-small text-center text-muted m-0 mt-3">
                  Trwa pobieranie danych z serwera
                  <br />
                  Poczekaj chwilę...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerView;
