import { configureStore } from "@reduxjs/toolkit";
import trendingSlice from "./trending.slice";

export const myStore = configureStore({
    reducer: {
        trendingSlice,
    },
});
