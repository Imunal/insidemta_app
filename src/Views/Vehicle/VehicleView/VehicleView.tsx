import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PlayerVehicles from "Components/Player/playerVehicles/playerVehicles";
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderVehicles = () => {
    return <div className="row">{<PlayerVehicles vehicles={vehicles} />}</div>;
  };

  return (
    <Layout>
      <div className="container">
        <Panel title="Podgląd pojazdów">
          <div className="p-10">
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
        </Panel>
      </div>
    </Layout>
  );
};

export default VehicleView;
