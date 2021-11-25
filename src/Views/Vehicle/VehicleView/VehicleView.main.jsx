import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

import PlayerVehicles from 'Components/Player/playerVehicles/playerVehicles';

const VehicleView = ({ vehicles, fetchVehiclesByModel }) => {
  const navigate = useNavigate();

  const { vehicleModel } = useParams();
  if (!vehicleModel || isNaN(vehicleModel)) {
    navigate('/search/vehicle');
  }

  useEffect(() => {
    fetchVehiclesByModel(vehicleModel);
    // eslint-disable-next-line
  }, []);

  const renderVehicles = () => {
    return <div className="row">{<PlayerVehicles playerVehicles={vehicles} />}</div>;
  };

  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Podgląd pojazdów</h1>
          </div>
          <div className="panel__body">
            {vehicles.length ? (
              renderVehicles()
            ) : (
              <div className="custom__alert custom__alert__info">
                <h1> Brak pojazdów</h1>
                <p className="m-0">Na serwerze nie ma żadnych pojazdów o podanym modelu.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleView;

VehicleView.propTypes = {
  vehicles: PropTypes.array,
  isAppLoading: PropTypes.bool,
  fetchVehiclesByModel: PropTypes.func,
};
