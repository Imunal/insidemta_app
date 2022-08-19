import { useAppDispatch, useAppSelector } from "./hook";
import {
  authenticate,
  logout,
  fetchPlayer,
  searchPlayer,
  resetPassword,
  updatePlayerRolePlayName,
  updatePlayerName,
} from "Store/Slice/playerSlice";

export const usePlayer = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.player.status);
  const player = useAppSelector((state) => state.player.player);
  const vehicles = useAppSelector((state) => state.player.vehicles);
  const penalties = useAppSelector((state) => state.player.penalties);
  const organizations = useAppSelector((state) => state.player.organizations);
  const realestates = useAppSelector((state) => state.player.realestates);
  const searchedPlayer = useAppSelector((state) => state.player.searchedPlayer);
  const searchedPlayers = useAppSelector(
    (state) => state.player.searchedPlayers
  );

  const handleAuthentication = (playerData: any) =>
    dispatch(authenticate(playerData));
  const handleLogout = () => dispatch(logout());
  const handleFetchPlayer = (playerUID: number) =>
    dispatch(fetchPlayer(playerUID));
  const handleSearchPlayer = (playerName: string) =>
    dispatch(searchPlayer(playerName));
  const handlePasswordReset = (playerEmail: string) =>
    dispatch(resetPassword(playerEmail));

  const handlePlayerRolePlayNameChange = (playerRPName: string) =>
    dispatch(updatePlayerRolePlayName(playerRPName));

  const handleUpdatePlayerNameChange = (playerName: string) =>
    dispatch(updatePlayerName(playerName));

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return {
    player,
    vehicles,
    penalties,
    organizations,
    realestates,
    searchedPlayer,
    searchedPlayers,
    handleAuthentication,
    handleLogout,
    handleFetchPlayer,
    handleSearchPlayer,
    handlePasswordReset,
    handlePlayerRolePlayNameChange,
    handleUpdatePlayerNameChange,
    isUninitialized,
    isLoading,
    isError,
    isSuccess,
  };
};
