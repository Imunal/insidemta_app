import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Types
import { Player } from "Types/Player";
import { SearchedPlayer } from "Types/SearchedPlayer";

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
  searchedPlayer: SearchedPlayer;
  searchedPlayers: SearchedPlayer[];
  status: string;
}
const initialState: PlayerSliceTypes = {
  player: null,
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
      playerAuthenticate(action.payload);
      state.status = "fulfilled";
      state.player = action.payload;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.status = "rejected";
    });

    //logout
    builder.addCase(logout.fulfilled, (state) => {
      state.status = "fulfilled";
      state.player = null;
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
