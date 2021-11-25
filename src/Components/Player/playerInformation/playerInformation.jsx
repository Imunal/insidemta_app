import React from 'react';
import PropTypes from 'prop-types';

function PlayerInformation({ player, penalties }) {
  const renderPenalties = () =>
    penalties.map((penaltie) => (
      <div className="col-md-4 mb-2" key={penaltie.ID}>
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

  return (
    <>
      <h5 className="fw-900">Podstawowe informacje o twoim koncie:</h5>
      <hr />
      <div className="row">
        <div className="col-md-2 align-self-center">
          <img
            className="panel__body__image img-fluid"
            src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
            alt="Skin"
            loading="lazy"
          />
        </div>
        <div className="col-md-5 align-self-center">
          <p className="mb-1">
            UID: <b>{player.UID}</b>
          </p>
          <p className="mb-1">
            Typ konta:
            {player.gold ? <span className="badge bg-warning text-dark mx-1">Gold</span> : ''}
            {player.diamond ? <span className="badge bg-info text-dark">Diament</span> : ''}
            {!player.gold || !player.diamond ? (
              <span className="badge bg-secondary">Zwykłe</span>
            ) : (
              ''
            )}
          </p>
          <p className="mb-1">
            Nazwa: <b>{player.username}</b>
          </p>
          <p className="mb-1">
            Adres e-mail: <b>{player.email}</b>
          </p>
          <p className="mb-1">
            Utworzono dnia: <b>{new Date(player.created).toLocaleDateString('pl-PL')}</b>
          </p>
          <p className="mb-1">
            Ostatnio w grze: <b>{new Date(player.lastOnline).toLocaleDateString('pl-PL')}</b>
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
                  width: parseInt(player.health),
                }}
                aria-valuenow={parseInt(player.health)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <p className="mb-1">
            Gotówka: <b>${player.money}</b>
          </p>
          <p className="mb-1">
            Saldo konta bankowego: <b>${player.bankmoney}</b>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="fw-900">Twoje kary:</h5>
        <hr />
        {penalties && penalties.length ? (
          <div className="row">{renderPenalties()}</div>
        ) : (
          <div className="custom__alert custom__alert__info">
            <h1> Nie posiadasz żadnych kar 🥰</h1>
            <p className="m-0">Aktualnie w systemie nie posiadasz żadnych kar. Tak trzymaj!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PlayerInformation;

PlayerInformation.propTypes = {
  player: PropTypes.object,
  penalties: PropTypes.array,
};
