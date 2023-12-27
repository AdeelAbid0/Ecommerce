import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import Productslice from "./Productslice";
import featuredproduct from "./Featuredslice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: Productslice,
    featured: featuredproduct,
  },
});
export default store;
