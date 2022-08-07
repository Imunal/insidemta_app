import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Types
import { Organization } from "Types/Organization";
import { Penaltie } from "Types/Penaltie";
import { Player } from "Types/Player";
import { RealEstate } from "Types/RealEstate";
import { Vehicle } from "Types/Vehicle";

//Services
import {
  userAuthenticate,
  userLogout,
} from "Utils/Services/authenticationService";

//Action
export const authenticate = createAsyncThunk(
  "player/authenticate",
  async (playerData: any) => {
    const { userEmail, userPassword } = playerData;
    const response = await axios.post("/user/authenticate", {
      userEmail: userEmail,
      userPassword: userPassword,
    });
    return response.data;
  }
);

export const logout = createAsyncThunk("player/logout", async () => {
  userLogout();
});

export const resetPassword = createAsyncThunk(
  "player/resetPassword",
  async (playerEmail: string) => {
    const response = await axios.post("/player/authenticate", {
      playerEmail: playerEmail,
    });
    return response.data;
  }
);

export const fetchPlayer = createAsyncThunk(
  "player/fetchPlayer",
  async (playerName: string) => {
    const response = await axios.get(`/player/authenticate/${playerName}`);
    return response.data;
  }
);

export const updatePlayerRolePlayName = createAsyncThunk(
  "player/updatePlayerRolePlayName",
  async (playerRPName: string) => {
    const response = await axios.post("/player/authenticate", {
      playerNewRPName: playerRPName,
    });
    return response.data;
  }
);

export const updatePlayerName = createAsyncThunk(
  "player/updatePlayerName",
  async (playerNewName: string) => {
    const response = await axios.post("/player/authenticate", {
      playerNewName: playerNewName,
    });
    return response.data;
  }
);

//Types
interface PlayerSliceTypes {
  player: Player;
  vehicles: Vehicle[];
  penalties: Penaltie[];
  organizations: Organization[];
  realestates: RealEstate[];
  searchedPlayer: Player;
  searchedPlayers: Player[];
  status: string;
}
const initialState: PlayerSliceTypes = {
  player: null,
  vehicles: [],
  penalties: [],
  organizations: [],
  realestates: [],
  searchedPlayer: null,
  searchedPlayers: [],
  status: null,
};

//Slice
export const playerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      userAuthenticate(action.payload.user);
      state.status = "fulfilled";
      state.player = action.payload.player;
      state.vehicles = action.payload.vehicles;
      state.penalties = action.payload.penalties;
      state.organizations = action.payload.organizations;
      state.realestates = action.payload.realestates;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
