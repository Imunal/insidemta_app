import { useSelector } from "react-redux";

function PlayerVehicles() {
  const vehicleData = useSelector((state) => state.vehicles);
  return (
    <>
      <h5 className="fw-900">Twoje pojazdy:</h5>
      <hr />
      <div className="row">
        {vehicleData.map((vehicle, index) => (
          <div className="col-md-4" key={index}>
            <div className="panel__body__element text-center">
              <img
                className="panel__body__image img-fluid"
                src={`https://api.insidemta.pl/cdn/vehicles/${vehicle.model}.png`}
                alt="Skin"
              />
              <h6 className="mt-3 text-muted text-break">
                {vehicle.model} ({vehicle.ID})
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayerVehicles;
