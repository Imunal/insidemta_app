import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Types
import { Vehicle } from "Types/Vehicle";

//Action
export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const response = await axios.get("vehicles");
    return response.data;
  }
);

export const fetchVehiclesByModel = createAsyncThunk(
  "vehicles/fetchVehiclesByModel",
  async (vehicleModel: string) => {
    const response = await axios.get(`vehicles/${vehicleModel}`);
    return response.data;
  }
);

//Types
interface VehicleSliceTypes {
  vehiclesModel: Vehicle[];
  vehicles: [];
  status: string;
}
const initialState: VehicleSliceTypes = {
  vehiclesModel: [],
  vehicles: [],
  status: null,
};

//Slice
export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVehicles.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.vehiclesModel = action.payload;
    });
    builder.addCase(fetchVehicles.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
