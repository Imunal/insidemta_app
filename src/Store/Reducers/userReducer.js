const initialState = {
  player: [],
  vehicles: [],
  penalties: [],
  organizations: [],
  realestates: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATION': {
      return {
        ...state,
        player: action.payload.player,
        vehicles: action.payload.vehicles,
        penalties: action.payload.penalties,
        organizations: action.payload.organizations,
        realestates: action.payload.realestates,
      };
    }
    case 'REMOVE_AUTHENTICATION': {
      return {
        ...state,
        player: [initialState],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
