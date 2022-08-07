import { useAppDispatch, useAppSelector } from "./hook";
import {
  fetchLatestPlayers,
  fetchOnlinePlayers,
} from "Store/Slice/serverSlice";

export const useServer = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.vehicle.status);
  const latestPlayers = useAppSelector((state) => state.server.latestPlayers);
  const onlinePlayers = useAppSelector((state) => state.server.onlinePlayers);

  const handleFetchLatestPlayers = () => dispatch(fetchLatestPlayers());

  const handleFetchOnlinePlayers = () => dispatch(fetchOnlinePlayers());

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return {
    latestPlayers,
    onlinePlayers,
    handleFetchLatestPlayers,
    handleFetchOnlinePlayers,
    isUninitialized,
    isLoading,
    isError,
    isSuccess,
  };
};
