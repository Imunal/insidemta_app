import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PlayerVehicles from "Components/Player/playerVehicles/playerVehicles";

//Hooks
import { useVehicle } from "Hooks/useVehicle";

const VehicleView = () => {
  const navigate = useNavigate();

  const { vehicleModel } = useParams();

  const { vehicles, handleFetchVehiclesByModel } = useVehicle();

  useEffect(() => {
    if (!vehicleModel) {
      navigate("/search/vehicle");
    }
    handleFetchVehiclesByModel(vehicleModel);
  }, [vehicleModel, navigate, handleFetchVehiclesByModel]);

  const renderVehicles = () => {
    return <div className="row">{<PlayerVehicles vehicles={vehicles} />}</div>;
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
                <p className="m-0">
                  Na serwerze nie ma żadnych pojazdów o podanym modelu.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleView;
