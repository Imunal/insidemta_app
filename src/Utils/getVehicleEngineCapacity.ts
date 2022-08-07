export const getVehicleEngineCapacity = (capacity: any) => {
  let c = "";
  for (let index = 0; index < capacity.length; index++) {
    if (capacity[index] === " ") break;
    c += capacity[index];
  }

  return parseFloat(c);
};
