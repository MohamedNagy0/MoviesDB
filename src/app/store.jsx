import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./trending.slice";

export const myStory = configureStore({
    reducer: {
        trendingReducer,
    },
});
