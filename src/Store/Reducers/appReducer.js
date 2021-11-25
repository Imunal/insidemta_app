const initialState = {
  isAppLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {
        ...state,
        isAppLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
