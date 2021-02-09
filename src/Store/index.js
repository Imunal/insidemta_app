import { createStore, compose } from "redux";
import rootReducer from "../Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers());

export { store };
