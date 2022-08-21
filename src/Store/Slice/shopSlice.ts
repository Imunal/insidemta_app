import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "Configs/axios";

//Types
import { ShopCharge } from "Types/ShopCharge";
import { Shop } from "Types/Shop";

//Action
export const fetchShopChargeOptions = createAsyncThunk(
  "shop/fetchShopOptions",
  async () => {
    const response = await axios.get("shop/charge");
    return response.data;
  }
);

export const fetchShops = createAsyncThunk("shop/fetchShops", async () => {
  const response = await axios.get("shop");
  return response.data;
});

//Types
interface ShopSliceTypes {
  shopChargeOptions: ShopCharge[];
  shops: Shop[];
  status: string;
}
const initialState: ShopSliceTypes = {
  shopChargeOptions: [],
  shops: [],
  status: null,
};

//Slice
export const shopSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopChargeOptions.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchShopChargeOptions.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.shopChargeOptions = action.payload;
    });
    builder.addCase(fetchShopChargeOptions.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(fetchShops.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchShops.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.shops = action.payload;
    });
    builder.addCase(fetchShops.rejected, (state) => {
      state.status = "rejected";
    });
  },
});
