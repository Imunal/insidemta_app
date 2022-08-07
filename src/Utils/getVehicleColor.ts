export const getVehicleColor = (colors: string, type: string) => {
  const color = colors.split(",");
  if (type === "color1") return color[0] + "," + color[1] + "," + color[2];
  if (type === "color2") return color[3] + "," + color[4] + "," + color[5];
  if (type === "color3") return color[6] + "," + color[7] + "," + color[8];
  if (type === "color4") return color[9] + "," + color[10] + "," + color[11];
  if (type === "colorLights")
    return color[12] + "," + color[13] + "," + color[14];
};
