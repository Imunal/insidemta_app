import { Link } from "react-router-dom";
import { useState } from "react";

import vehicleJson from "Assets/Json/vehicle.json";

import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";
import Input from "Components/Input/Input";

type VehicleJSON = {
  vehicleName: string;
  vehicleModel: number;
};

const VehicleSearch = () => {
  const [searchName, setSerachName] = useState("");

  const handleSearchNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSerachName(e.currentTarget.value);
  };

  const renderVehicles = () => (
    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
      {vehicleJson.map((vehicle: VehicleJSON) => (
        <div className="mb-3" key={vehicle.vehicleModel}>
          <Link to={`/vehicle/${vehicle.vehicleModel}`}>
            <div className="rounded-md bg-inside-bg-light p-5 text-center">
              <img
                className="mx-auto block w-64"
                src={`https://cdn.inside-mta.pl/webp/vehicles/${vehicle.vehicleModel}.webp`}
                alt="Vehicle"
                loading="lazy"
              />
              <h5 className="mt-3 break-words font-bold text-inside-text-light">
                {vehicle.vehicleName}
              </h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
  return (
    <Layout>
      <div className="container">
        <Panel title="Wyszukiwarka pojazdów">
          <div className="p-10">
            <div>
              <Input
                type="text"
                value={searchName}
                name="searchName"
                placeholder="Wprowadź nazwę pojazdu"
                label="Wyszukiwarka"
                onChange={handleSearchNameChange}
                required={true}
              />
            </div>
            {renderVehicles()}
          </div>
        </Panel>
      </div>
    </Layout>
  );
};

export default VehicleSearch;
