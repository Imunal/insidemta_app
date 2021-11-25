const initialState = {
  vehiclesModel: [],
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MODEL_VEHICLES': {
      return {
        ...state,
        vehiclesModel: action.payload.player,
      };
    }
    default:
      return state;
  }
};

export default vehicleReducer;
