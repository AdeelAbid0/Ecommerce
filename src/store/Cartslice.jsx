// Cartslice.jsx
import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (!existingProduct) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        existingProduct.quantity += 1;
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { productid, quantity } = action.payload;
      const existingProduct = state.find((item) => item.id === productid);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      }
    },
  },
});

export const { add, remove, updateQuantity } = Cartslice.actions;
export default Cartslice.reducer;
