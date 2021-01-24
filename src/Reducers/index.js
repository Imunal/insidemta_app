const initialState = {
  player: [],
  vehicles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATION": {
      return {
        ...state,
        player: action.payload.player,
        vehicles: action.payload.vehicles,
      };
    }
    case "REMOVE_AUTHENTICATION": {
      return { ...state, player: [initialState] };
    }
    default:
      return state;
  }
};

export default rootReducer;
