import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMoviesTrending = createAsyncThunk(
    "trendingSlice/getAllMoviesTrending",
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
        allMoviesTrendingData: null,
        allMoviesTrendingPending: false,
        isError: false,
    },

    extraReducers: (builder) => {
        //getAllMoviesTrending success case
        builder.addCase(
            getAllMoviesTrending.fulfilled,
            (prevState, { payload }) => {
                prevState.allMoviesTrendingData = payload;
                prevState.allMoviesTrendingPending = false;
                prevState.isError = false;
            }
        );
        //getAllMoviesTrending loading case
        builder.addCase(getAllMoviesTrending.pending, (prevState) => {
            prevState.allMoviesTrendingPending = true;
            prevState.allMoviesTrendingData = null;
            prevState.isError = false;
        });
        //getAllMoviesTrending error case
        builder.addCase(
            getAllMoviesTrending.rejected,
            (prevState, { payload }) => {
                prevState.allMoviesTrendingPending = false;
                prevState.allMoviesTrendingData = null;
                if (payload == undefined) {
                    prevState.isError = "Oops! Try Later Please";
                }
            }
        );
    },
});
export default trendingSlice.reducer;
