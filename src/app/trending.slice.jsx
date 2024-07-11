import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTrending = createAsyncThunk(
    "trendingSlice/getAllTrending",
    async () => {
        const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/trending/all/day",
            params: { language: "en-US" },
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGU1MThmNzIxMTYzYTU2ZDVkNjg5ZTA2MTM2ZmMwMyIsIm5iZiI6MTcyMDY0OTc2NS43MTMwMTgsInN1YiI6IjY2ODU5ZTJjYTlkNWMyZTkyZjgxOTQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E9wEiedOhL3fh42ZAlO0UaU5UJ9kY05UZu5c10VL8W4",
            },
        };

        const { data } = await axios.request(options);
        return data.results;
    }
);

const trendingSlice = createSlice({
    name: "trendingSlice",
    initialState: {
        allTrendingData: null,
        allTrendingIsPending: false,
        isError: false,
        error: false,
    },
    extraReducers: (builder) => {
        //getAllTrending success case
        builder.addCase(getAllTrending.fulfilled, (prevState, { payload }) => {
            prevState.allTrendingData = payload;
            prevState.allTrendingIsPending = false;
            prevState.isError = false;
            prevState.error = false;
        });

        //getAllTrending loading case
        builder.addCase(getAllTrending.pending, (prevState) => {
            prevState.allTrendingData = null;
            prevState.allTrendingIsPending = true;
            prevState.isError = false;
            prevState.error = false;
        });

        //getAllTrending error case
        builder.addCase(getAllTrending.rejected, (prevState, { payload }) => {
            prevState.allTrendingData = null;
            prevState.allTrendingIsPending = false;
            prevState.isError = true;
            payload == undefined
                ? (prevState.error = "Please try other time.")
                : "";
        });
    },
});
export default trendingSlice.reducer;
