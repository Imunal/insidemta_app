import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Action
export const fetchLatestPlayers = createAsyncThunk(
  "server/fetchLatestPlayers",
  async () => {
    const response = await axios.get("/server/latestPlayers");
    return response.data;
  }
);

export const fetchOnlinePlayers = createAsyncThunk(
  "server/fetchOnlinePlayers",
  async () => {
    const response = await axios.get("/server/onlinePlayers");
    return response.data;
  }
);

//Types
interface ServerSliceTypes {
  latestPlayers: any;
  onlinePlayers: any;
  status: string;
}
const initialState: ServerSliceTypes = {
  latestPlayers: [],
  onlinePlayers: [],
  status: null,
};

//Slice
export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLatestPlayers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchLatestPlayers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.latestPlayers = action.payload;
    });
    builder.addCase(fetchLatestPlayers.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(fetchOnlinePlayers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchOnlinePlayers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.onlinePlayers = action.payload;
    });
    builder.addCase(fetchOnlinePlayers.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
