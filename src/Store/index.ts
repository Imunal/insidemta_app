import { configureStore } from "@reduxjs/toolkit";

// Slice
import { organizationSlice } from "./Slice/organizationSlice";
import { playerSlice } from "./Slice/playerSlice";
import { vehicleSlice } from "./Slice/vehicleSlice";
import { weatherSlice } from "./Slice/weatherSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Store
export const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    organization: organizationSlice.reducer,
    vehicle: vehicleSlice.reducer,
    weather: weatherSlice.reducer,
  },
});
