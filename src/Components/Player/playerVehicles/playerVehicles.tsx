import { getVehicleName } from "Utils/getVehicleName";
import { getVehicleUpgrades } from "Utils/getVehicleUpgrades";

import Spacer from "Components/Spacer";

//Types
import { Vehicle } from "Types/Vehicle";

type PlayerVehiclesType = {
  vehicles: Vehicle[];
};

const PlayerVehicles = ({ vehicles }: PlayerVehiclesType) => {
  const rednerVehicles = () =>
    vehicles.map((vehicle) => (
      <div className="mb-3" key={vehicle.ID}>
        <div className="mt-5 rounded-md bg-inside-bg-medium text-center">
          <img
            className="img-fluid mx-auto block w-48"
            src={`https://cdn.inside-mta.pl/webp/vehicles/${vehicle.model}.webp`}
            alt="Skin"
            loading="lazy"
          />
          <h6 className="text-break mt-3 text-gray-400">
            {getVehicleName(vehicle.model)} ({vehicle.ID})
          </h6>
          <br />
          <span className="text-break text-gray-400">
            Właściciel: {vehicle.username}
          </span>
          <br />
          <span className="text-break text-gray-400">
            Poj. silnika: {vehicle.engineCapacity}
          </span>
          <br />
          <span className="text-break text-gray-400">
            Przebieg: {Math.floor(vehicle.mileage * 100) / 100}km
          </span>
          <br />
          <span className="text-break text-gray-400">
            Ulepszenia: {getVehicleUpgrades(vehicle.tuning)}
          </span>
        </div>
      </div>
    ));
  return (
    <>
      <h5 className="text-xl font-medium text-white">Pojazdy:</h5>
      <Spacer />
      {vehicles.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {rednerVehicles()}
        </div>
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
