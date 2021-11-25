import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import axios from '../../../Configs/axios';

const VehicleExchange = ({
  vehicleModel,
  vehicleName,
  vehicleID,
  vehiclePlateText,
  vehicleMileage,
  vehicleEngineCapacity,
  vehicleColor1,
  vehicleColor2,
  vehicleColor3,
  vehicleColor4,
  vehicleColorLights,
  vehicleUpgrades,
  vehiclePrice,
  vehicleSeller,
}) => {
  const playerData = useSelector((state) => state.player.personalToken);

  //const [vehiclePrice, setVehiclePrice] = useState(props.price);

  const priceFormatter = () => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const buyVehicle = (vehicleID) => {
    if (!vehiclePrice) {
      return; //addToast('Wystąpił nieznany problem.', { appearance: 'error' });
    }
    if (!playerData) {
      return; //addToast('Aby zakupić pojazd musisz się najpierw zalogować.', {
      //appearance: 'error',
      //});
    }
    axios
      .put('vehicle/buy', {
        vehicleID: vehicleID,
        personalToken: playerData,
      })
      .then(() => {
        //setVehiclePrice(null);
        //addToast('Pomyślnie zakupiłeś pojazd z giełdy!', { appearance: 'success' });
      })
      .catch((error) => {
        console.log(error);
        //addToast('Wystąpił problem z zakupem pojazdu.', { appearance: 'error' });
      });
  };

  const renderVehicle = () => {
    return (
      <div className="col-lg-3 mb-4">
        <div className="row flex-row vehicle">
          <div className="vehicle__img">
            <img
              src={`https://cdn.insidemta.pl/vehicles/${vehicleModel}.png`}
              className="img-fluid"
              alt="Vehicle"
              loading="lazy"
            />
          </div>
          <div className="vehicle__details">
            <h3>{vehicleName}</h3>
            <span className="text-muted">
              <span className="detail__name">ID pojazdu:</span> {vehicleID} ({vehiclePlateText})
              <br />
              <span className="detail__name">Przebieg:</span> {vehicleMileage}km
              <br />
              <span className="detail__name">Silnik:</span> {vehicleEngineCapacity}
              <br />
              <span className="detail__name">Kolor:</span>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: 'rgba(' + vehicleColor1 + ',255)',
                }}
              ></div>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: 'rgba(' + vehicleColor2 + ',255)',
                }}
              ></div>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: 'rgba(' + vehicleColor3 + ',255)',
                }}
              ></div>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: 'rgba(' + vehicleColor4 + ',255)',
                }}
              ></div>
              <br />
              <span className="detail__name">Światła:</span>
              <div
                className="colorShowcase"
                style={{
                  backgroundColor: 'rgba(' + vehicleColorLights + ',255)',
                }}
              ></div>
              <br />
              <span className="detail__name">Ulepszenia:</span> {vehicleUpgrades}
              <br />
            </span>
            <h4 className="mt-3">{priceFormatter().format(vehiclePrice)}</h4>

            <p className="text-muted text-center mb-0 mt-2 seller">
              <span>Sprzedający:</span> {vehicleSeller}
            </p>
          </div>
          <div className="mt-3">
            <button
              className="btn btn__insidemta d-block mx-auto"
              onClick={() => buyVehicle(vehicleID)}
            >
              Kup pojazd offline
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <>{vehiclePrice ? renderVehicle() : ''}</>;
};

export default VehicleExchange;

VehicleExchange.propTypes = {
  vehicleModel: PropTypes.any,
  vehicleName: PropTypes.any,
  vehicleID: PropTypes.any,
  vehiclePlateText: PropTypes.any,
  vehicleMileage: PropTypes.any,
  vehicleEngineCapacity: PropTypes.any,
  vehicleColor1: PropTypes.any,
  vehicleColor2: PropTypes.any,
  vehicleColor3: PropTypes.any,
  vehicleColor4: PropTypes.any,
  vehicleColorLights: PropTypes.any,
  vehicleUpgrades: PropTypes.any,
  vehiclePrice: PropTypes.any,
  vehicleSeller: PropTypes.any,
};
