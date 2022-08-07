import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Types
import { Weather } from "Types/Weather";

//Action
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = await axios.get("/server/weather");
    return response.data;
  }
);

//Types
interface WeatherSliceTypes {
  weather: Weather[];
  status: string;
}
const initialState: WeatherSliceTypes = {
  weather: [],
  status: null,
};

//Slice
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.weather = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
