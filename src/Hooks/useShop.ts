import { useAppDispatch, useAppSelector } from "./hook";
import { fetchShops, fetchShopChargeOptions } from "Store/Slice/shopSlice";

export const useShop = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.vehicle.status);
  const shopCharge = useAppSelector((state) => state.shop.shopCharge);
  const shops = useAppSelector((state) => state.shop.shops);

  const handleFetchShopChargeOptions = () => dispatch(fetchShopChargeOptions());
  const handleFetchShops = () => dispatch(fetchShops());

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return {
    shopCharge,
    shops,
    handleFetchShops,
    handleFetchShopChargeOptions,
    isUninitialized,
    isLoading,
    isError,
    isSuccess,
  };
};
