import { getVehicleName } from "Utils/getVehicleName";
import { getVehicleUpgrades } from "Utils/getVehicleUpgrades";

//Types
import { Vehicle } from "Types/Vehicle";

type PlayerVehiclesType = {
  vehicles: Vehicle[];
};

const PlayerVehicles = ({ vehicles }: PlayerVehiclesType) => {
  const rednerVehicles = () =>
    vehicles.map((vehicle) => (
      <div className="col-md-4 mb-3" key={vehicle.ID}>
        <div className="panel__body__element text-center">
          <img
            className="panel__body__image img-fluid"
            src={`https://cdn.insidemta.pl/vehicles/${vehicle.model}.png`}
            alt="Skin"
            loading="lazy"
          />
          <h6 className="text-muted text-break mt-3">
            {getVehicleName(vehicle.model)} ({vehicle.ID})
          </h6>
          <br />
          <span className="text-muted text-break">
            Właściciel: {vehicle.username}
          </span>
          <br />
          <span className="text-muted text-break">
            Poj. silnika: {vehicle.engineCapacity}
          </span>
          <br />
          <span className="text-muted text-break">
            Przebieg: {Math.floor(vehicle.mileage * 100) / 100}km
          </span>
          <br />
          <span className="text-muted text-break">
            Ulepszenia: {getVehicleUpgrades(vehicle.tuning)}
          </span>
        </div>
      </div>
    ));
  return (
    <>
      <h5 className="fw-900">Pojazdy:</h5>
      <hr />
      {vehicles.length ? (
        <div className="row">{rednerVehicles()}</div>
      ) : (
        <div className="custom__alert custom__alert__info">
          <h1> Nie posiadasz żadnych pojazdów 🏎️</h1>
          <p className="m-0">
            Jeżeli posiadasz odpowiednią ilość gotówki możesz odwiedzić salon
            samochodowy i kupić swój pierwszy pojazd!
          </p>
        </div>
      )}
    </>
  );
};

export default PlayerVehicles;
