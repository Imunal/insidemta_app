const initialState = {
  player: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATION': {
      return {
        ...state,
        player: action.payload.player,
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
