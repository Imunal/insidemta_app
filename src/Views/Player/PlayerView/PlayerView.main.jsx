import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'Components/Loader/Loader';
import PlayerVehicles from 'Components/Player/playerVehicles/playerVehicles';
import PlayerRealEstate from 'Components/Player/playerRealEstate/playerRealEstate';
import PlayerOrganizations from 'Components/Player/playerOrganizations/playerOrganizations';

import { useParams } from 'react-router-dom';

const PlayerView = ({ searchedPlayer, fetchPlayer }) => {
  const { playerUID } = useParams();

  useEffect(() => {
    fetchPlayer(playerUID);
  }, []);

  const renderPenalties = () =>
    searchedPlayer.penalties.map((penaltie) => (
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

  const renderplayer = () => (
    <>
      <h5 className="fw-900">Podstawowe informacje o koncie gracza:</h5>
      <hr />
      <div className="row">
        <div className="col-md-2 align-self-center">
          <img
            className="panel__body__image img-fluid"
            src={`https://cdn.insidemta.pl/skins/${searchedPlayer.skin}.png`}
            alt="Skin"
            loading="lazy"
          />
        </div>
        <div className="col-md-5 align-self-center">
          <p className="mb-1">
            UID: <b>{searchedPlayer.UID}</b>
          </p>
          <p className="mb-1">
            Typ konta:
            {searchedPlayer.gold ? (
              <span className="badge bg-warning text-dark mx-1">Gold</span>
            ) : (
              ''
            )}
            {searchedPlayer.diamond ? <span className="badge bg-info text-dark">Diament</span> : ''}
            {!searchedPlayer.gold || !searchedPlayer.diamond ? (
              <span className="badge bg-secondary">Zwykłe</span>
            ) : (
              ''
            )}
          </p>
          <p className="mb-1">
            Nazwa: <b>{searchedPlayer.username}</b>
          </p>
          <p className="mb-1">
            Utworzono dnia: <b>{new Date(searchedPlayer.created).toLocaleDateString('pl-PL')}</b>
          </p>
          <p className="mb-1">
            Ostatnio w grze: <b>{new Date(searchedPlayer.created).toLocaleDateString('pl-PL')}</b>
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
                  width: parseInt(searchedPlayer.health),
                }}
                aria-valuenow={parseInt(searchedPlayer.health)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <p className="mb-1">
            Gotówka: <b>${searchedPlayer.money}</b>
          </p>
          <p className="mb-1">
            Saldo konta bankowego: <b>${searchedPlayer.bankmoney}</b>
          </p>
        </div>
      </div>
      <div className="mt-3">
        {searchedPlayer.penalties.length ? <div className="row">{renderPenalties()}</div> : ''}
      </div>
      <div className="mt-3">
        {searchedPlayer.vehicles.length ? (
          <div className="row">{<PlayerVehicles playerVehicles={searchedPlayer.vehicles} />}</div>
        ) : (
          ''
        )}
      </div>
      <div className="mt-3">
        {searchedPlayer.realestates.length ? (
          <div className="row">
            {<PlayerRealEstate playerRealEstate={searchedPlayer.realestates} />}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="mt-3">
        {searchedPlayer.organizations.length ? (
          <div className="row">
            {<PlayerOrganizations playerOrganizations={searchedPlayer.organizations} />}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Podgląd gracza</h1>
          </div>
          <div className="panel__body">{searchedPlayer ? renderplayer() : <Loader />}</div>
        </div>
      </div>
    </>
  );
};

export default PlayerView;

PlayerView.propTypes = {
  searchedPlayer: PropTypes.object,
  fetchPlayer: PropTypes.func,
};
