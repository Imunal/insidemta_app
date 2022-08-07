import VehicleData from "Assets/Json/vehicleData.json";

export const getVehicleName = (model: number) => {
  const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
  return gameVehicles.names[model - 400];
};
