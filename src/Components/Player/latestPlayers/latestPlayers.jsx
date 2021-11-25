import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const latestPlayers = ({ latestPlayers }) => {
  const renderLatestPlayers = () =>
    latestPlayers.map((player) => (
      <div className="col-6 col-md-3" key={player.UID}>
        <Link to={`/player/${player.UID}`}>
          <div className="panel__body__element text-center">
            <img
              className="panel__body__image img-fluid"
              src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
              alt="Skin"
              loading="lazy"
            />
            <h6 className="mt-3 text-muted text-break">{player.username}</h6>
          </div>
        </Link>
      </div>
    ));
  return latestPlayers ? (
    renderLatestPlayers()
  ) : (
    <div className="block__center w-100 h-100 mt-5 mb-5">
      <Loader type="Bars" color="#ccc" height={50} width={50} />
      <p className="text-small text-center text-muted m-0">Trwa pobieranie danych z serwera</p>
    </div>
  );
};

export default latestPlayers;

latestPlayer.propTypes = {
  latestPlayers: PropTypes.array,
};
