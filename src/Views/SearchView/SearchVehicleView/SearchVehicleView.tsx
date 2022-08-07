import { Link } from "react-router-dom";

import vehicleJson from "Assets/Json/vehicle.json";

const VehicleSearch = () => {
  const renderVehicles = () => (
    <div className="row">
      {vehicleJson.map((vehicle: any) => (
        <div className="col-md-3 mb-3" key={vehicle.vehicleModel}>
          <div className="panel__body__element h-100 text-center">
            <img
              className="panel__body__image img-fluid skin__image__width"
              src={`https://cdn.insidemta.pl/vehicles/${vehicle.vehicleModel}.png`}
              alt="Vehicle"
              loading="lazy"
            />
            <h5 className="text-muted text-break fw-600 mt-3">
              {vehicle.vehicleName}
            </h5>
            <Link
              to={`/vehicle/${vehicle.vehicleModel}`}
              className="btn btn__dark btn-lg btn-block"
            >
              Sprawdź pojazdy
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="container">
        <div className="panel mt-5 ml-auto mr-auto">
          <div className="panel__header">
            <h1 className="mb-0">Wyszukiwarka pojazdów</h1>
          </div>
          <div className="panel__body">{renderVehicles()}</div>
        </div>
      </div>
    </>
  );
};

export default VehicleSearch;
