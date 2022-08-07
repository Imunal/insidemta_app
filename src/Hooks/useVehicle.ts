import { useAppDispatch, useAppSelector } from "./hook";
import { fetchVehiclesByModel } from "Store/Slice/vehicleSlice";

export const useVehicle = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.vehicle.status);
  const vehiclesModel = useAppSelector((state) => state.vehicle.vehiclesModel);
  const vehicles = useAppSelector((state) => state.vehicle.vehicles);

  const handleFetchVehiclesByModel = (vehicleModel: string) =>
    dispatch(fetchVehiclesByModel(vehicleModel));

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return {
    vehicles,
    vehiclesModel,
    handleFetchVehiclesByModel,
    isUninitialized,
    isLoading,
    isError,
    isSuccess,
  };
};
