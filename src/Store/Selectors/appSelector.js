import { createSelector } from 'reselect';

const getLoaderStateStore = (state) => state.rootReducer.app;
const getLoaderState = createSelector(getLoaderStateStore, ({ isAppLoading }) => isAppLoading);

export { getLoaderState };
