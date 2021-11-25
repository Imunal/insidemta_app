import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sadface from 'Assets/Images/Player/no-found.png';

const onlinePlayers = ({ onlinePlayers }) => {
  const renderOnlinePlayers = () =>
    onlinePlayers.map((player) => (
      <div className="col-4 col-md-2 mt-2" key={player.UID}>
        <div className="text-center">
          <Link to={`/player/${player.UID}`}>
            <div className="player">
              <div className="player__circle block__center">
                <img
                  src={`https://cdn.insidemta.pl/skins/${player.skin}.png`}
                  className="img-fluid"
                  alt="Skin"
                  loading="lazy"
                />
                <span className="player__cricle__online"></span>
              </div>
              <h6 className="mt-2 text-muted text-break text-center">{player.username}</h6>
            </div>
          </Link>
        </div>
      </div>
    ));

  return onlinePlayers ? (
    renderOnlinePlayers()
  ) : (
    <div className="block__center w-100 h-100">
      <img
        src={Sadface}
        className="img-fluid mx-auto d-block m-2"
        alt="No found"
        height={80}
        width={80}
      />
      <p className="text-small text-center text-muted mb-0">Na serwerze nie ma nikogo.</p>
      <p className="text-small text-center text-muted mb-0">Może chcesz wejść i to zmienić?</p>
    </div>
  );
};

export default onlinePlayers;

onlinePlayers.propTypes = {
  onlinePlayers: PropTypes.array,
};
