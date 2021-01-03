interface PlayerState {
    player: object[]
}

const initialState = {
    player : []
}

type Action = {
    type: "SET_AUTHENTICATION",
    payload: object
}

const rootReducer = (state:PlayerState = initialState, action:Action) => {
    switch(action.type) {
        case 'SET_AUTHENTICATION': {
            return {...state, player: [...state.player, action.payload]}
        }
        default:
            return state
    }
};

export default rootReducer;