import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const searchMovieData = createSlice({
    name: 'movieData',
    initialState,
    reducers: {
        addMovies(state, action) {
            return action.payload;
        }
    }
});

export const { addMovies } = searchMovieData.actions;
export default searchMovieData.reducer;
