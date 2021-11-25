import { createSelector } from 'reselect';

// GET WEATHER STORE
const getWeatherStore = (state) => state.rootReducer.weather;

// GET WEATHER
const getWeather = createSelector(getWeatherStore, ({ weather }) => weather);

export { getWeather };
