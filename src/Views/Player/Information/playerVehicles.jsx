import { useSelector } from "react-redux";
import VehicleData from "../../../Assets/Json/vehicleData.json";

function PlayerVehicles() {
  const vehicleData = useSelector((state) => state.vehicles);

  const getVehicleName = (model) => {
    const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
    return gameVehicles.names[model - 400];
  };

  const getVehicleUpgrades = (upgradesJSON) => {
    const upgrades = JSON.parse(upgradesJSON);
    if (!upgrades) return "Brak";

    let tuning = "";
    const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
    upgrades[0].map((object, index) => {
      tuning += gameVehicles.upgrades[object - 1000];

      if (index + 1 < upgrades[0].length) tuning += ", ";

      return false;
    });

    return tuning;
  };

  const rednerVehicles = () => {
    return vehicleData.map((vehicle, index) => (
          <div className="col-md-4" key={index}>
            <div className="panel__body__element text-center">
              <img
                className="panel__body__image img-fluid"
                src={`https://cdn.insidemta.pl/vehicles/${vehicle.model}.png`}
                alt="Skin"
                loading="lazy"
              />
              <h6 className="mt-3 text-muted text-break">
                {getVehicleName(vehicle.model)} ({vehicle.ID})
              </h6>
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
        ))
  }
  return (
    <>
      <h5 className="fw-900">Twoje pojazdy:</h5>
      <hr />
        {vehicleData.length ? (
          <div className="row">
            {rednerVehicles()}
          </div>
        ) : (
          <div className="custom__alert custom__alert__info">
            <h1> Nie posiadasz żadnych pojazdów 🏎️</h1>
            <p className="m-0">
              Jeżeli posidasz odpowiednią ilość gotówki możesz odwiedzić salon samochodowy i kupić swój pierwszy pojazd!
            </p>
          </div>
        )}
    </>
  );
}

export default PlayerVehicles;
