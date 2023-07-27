import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils.js";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItems = state.cartItems.find(i => i._id === item._id);
      if (existItems) {
        state.cartItems = state.cartItems.map(i => (i._id === existItems._id ? item : i));
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state, item);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
