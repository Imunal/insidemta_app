import { useAppDispatch, useAppSelector } from "./hook";
import { fetchOrganizations } from "Store/Slice/organizationSlice";

export const useOrganization = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.organization.status);
  const organizations = useAppSelector(
    (state) => state.organization.organizations
  );

  const handleFetchOrganization = () => dispatch(fetchOrganizations());

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return {
    organizations,
    handleFetchOrganization,
    isUninitialized,
    isLoading,
    isError,
    isSuccess,
  };
};
