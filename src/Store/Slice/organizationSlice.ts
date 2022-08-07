import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Types
import { Organization } from "Types/Organization";

//Action
export const fetchOrganizations = createAsyncThunk(
  "organization/fetchOrganizations",
  async () => {
    const response = await axios.get("/organization");
    return response.data;
  }
);

//Types
interface OrganizationSliceTypes {
  organizations: Organization[];
  status: string;
}
const initialState: OrganizationSliceTypes = {
  organizations: [],
  status: null,
};

//Slice
export const organizationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrganizations.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchOrganizations.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.organizations = action.payload;
    });
    builder.addCase(fetchOrganizations.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
