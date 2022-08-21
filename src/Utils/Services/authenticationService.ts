export const playerAuthenticate = (payload: any) => {
  localStorage.setItem("player", JSON.stringify(payload));
};

export const playerLogout = () => {
  localStorage.removeItem("player");
};
