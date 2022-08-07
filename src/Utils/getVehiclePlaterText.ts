export const pad = (num: any, size: any) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export const getVehiclePlateText = (plate: string, id: number) => {
  if (!plate || plate === "") {
    return "SA " + pad(id, 5);
  }
  return "SA " + plate;
};
