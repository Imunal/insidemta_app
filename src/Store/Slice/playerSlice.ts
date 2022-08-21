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
  playerAuthenticate,
  playerLogout,
} from "Utils/Services/authenticationService";

//Action
export const authenticate = createAsyncThunk(
  "player/authenticate",
  async (playerData: any) => {
    const { playerLogin, playerPassword } = playerData;
    const response = await axios.post("/player/authenticate", {
      playerLogin: playerLogin,
      playerPassword: playerPassword,
    });
    return response.data;
  }
);

export const logout = createAsyncThunk("player/logout", async () => {
  await playerLogout();
});

export const resetPassword = createAsyncThunk(
  "player/resetPassword",
  async (playerEmail: string) => {
    const response = await axios.post("/player/resetPassword", {
      playerEmail: playerEmail,
    });
    return response.data;
  }
);

export const searchPlayer = createAsyncThunk(
  "player/searchPlayer",
  async (playerName: string) => {
    const response = await axios.get(`/search/player/${playerName}`);
    return response.data;
  }
);

export const fetchPlayer = createAsyncThunk(
  "player/fetchPlayer",
  async (playerUID: number) => {
    const response = await axios.get(`/player/${playerUID}`);
    return response.data;
  }
);

export const updatePlayerRolePlayName = createAsyncThunk(
  "player/updatePlayerRolePlayName",
  async (playerRPName: string) => {
    const response = await axios.put("/player/setPlayerRPName", {
      playerNewRPName: playerRPName,
    });
    return response.data;
  }
);

export const updatePlayerName = createAsyncThunk(
  "player/updatePlayerName",
  async (playerNewName: string) => {
    const response = await axios.put("/player/setPlayerName", {
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
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      playerAuthenticate(action.payload.player);
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

    //logout
    builder.addCase(logout.fulfilled, (state) => {
      state.status = "fulfilled";
      state.player = null;
      state.vehicles = null;
      state.penalties = null;
      state.organizations = null;
      state.realestates = null;
    });

    //player/fetchPlayer
    builder.addCase(fetchPlayer.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPlayer.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.searchedPlayer = action.payload;
    });
    builder.addCase(fetchPlayer.rejected, (state) => {
      state.status = "rejected";
    });

    //player/searchPlayer
    builder.addCase(searchPlayer.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(searchPlayer.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.searchedPlayers = action.payload;
    });
    builder.addCase(searchPlayer.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
