import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userData.js";
import cart from "./store/cartData.js";

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})