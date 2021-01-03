import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';

import rootReducer from '../Reducers';

const store = createStore(rootReducer,applyMiddleware(thunk));