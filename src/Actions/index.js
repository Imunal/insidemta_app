export const setAuthentication = (payload) => {
  return {
    type: "SET_AUTHENTICATION",
    payload: payload,
  };
};

export const removeAuthentication = () => {
  return {
    type: "REMOVE_AUTHENTICATION",
  };
};
