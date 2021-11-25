import { createSelector } from 'reselect';

// GET VEHICLE STORE
const getVehicleStore = (state) => state.rootReducer.vehicle;

// GET MODEL VEHICELS
const getModelVehicles = createSelector(getVehicleStore, ({ vehiclesModel }) => vehiclesModel);

export { getModelVehicles };
