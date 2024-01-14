import { createSlice } from "@reduxjs/toolkit";
const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setproducts(state, action) {
      state.data = action.payload;
    },
    setstatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setproducts, setstatus } = productSlice.actions;
export default productSlice.reducer;
export function fetchproduct() {
  return async function fetchproductthunk(dispatch, getstate) {
    dispatch(setstatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://api.pujakaitem.com/api/products");
      const data = await res.json();
      dispatch(setproducts(data));
      dispatch(setstatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setstatus(STATUSES.ERROR));
    }
  };
}
