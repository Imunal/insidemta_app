import { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from '../../../Configs/axios';

import PlayerVehicles from '../../Player/Information/playerVehicles';

import { useParams, useHistory } from 'react-router-dom';

const VehicleView = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const [vehicleData, setVehicleData] = useState([]);

  const { vehicleModel } = useParams();
  if (!vehicleModel || isNaN(vehicleModel)) {
    addToast('Nie znaleziono pojazdów.', { appearance: 'error' });
    history.push('/search/vehicle');
  }

  useEffect(() => {
    fetchVehicleData();
    // eslint-disable-next-line
  }, []);

  const fetchVehicleData = () => {
    axios
      .get(`search/vehicle/${vehicleModel}`)
      .then((response) => {
        setVehicleData(response.data);
      })
      .catch(() => {
        addToast('Nie znaleziono pojazdów.', { appearance: 'error' });
        history.push('/search/vehicle');
      });
  };

  const renderVehicles = () => {
    return <div className="row">{<PlayerVehicles playerVehicles={vehicleData} />}</div>;
  };

  return (
    <>
      <div className="container">
        <div className="panel mt-5">
          <div className="panel__header">
            <h1 className="mb-0">Podgląd pojazdów</h1>
          </div>
          <div className="panel__body">
            {vehicleData.length ? (
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
