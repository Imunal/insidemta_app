import VehicleData from "Assets/Json/vehicleData.json";

export const getVehicleUpgrades = (upgradesJSON: any) => {
  const upgrades = JSON.parse(upgradesJSON);
  if (!upgrades) return "Brak";

  let tuning = "";
  const gameVehicles = JSON.parse(JSON.stringify(VehicleData));
  upgrades[0].map((object: any, index: any) => {
    tuning += gameVehicles.upgrades[object - 1000];

    if (index + 1 < upgrades[0].length) tuning += ", ";

    return false;
  });

  return tuning;
};
