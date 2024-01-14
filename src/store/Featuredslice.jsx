import { createSlice } from "@reduxjs/toolkit";
const STATUSES = Object.freeze({
  loading: "STATUSES.LOADING",
  idle: "STATUSES.IDLE",
  error: "STATUSES.ERROR",
});
const featuredSlice = createSlice({
  name: "featured",
  initialState: {
    data: [],
    status: "STATUSES.IDLE",
  },
  reducers: {
    setfeaturedproduct(state, action) {
      state.data = action.payload.filter(
        (product) => product.featured === true
      );
    },
    setstatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setfeaturedproduct, setstatus } = featuredSlice.actions;
export default featuredSlice.reducer;

export function fetchfeaturedproduct() {
  return async function fetchfeaturedproductthunk(dispatch, getstate) {
    dispatch(setstatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://api.pujakaitem.com/api/products");
      const data = await res.json();
      dispatch(setfeaturedproduct(data));
      dispatch(setstatus(STATUSES.IDLE));
    } catch (err) {
      console.log("error");
      dispatch(setstatus(STATUSES.ERROR));
    }
  };
}
