const initialState = {
  organizations: null,
};

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORGANIZATIONS': {
      return {
        ...state,
        organizations: action.payload.player,
      };
    }
    default:
      return state;
  }
};

export default organizationReducer;
