export const userAuthenticate = (payload: any) => {
  localStorage.setItem("player", JSON.stringify(payload));
};

export const userLogout = () => {
  localStorage.removeItem("player");
};
