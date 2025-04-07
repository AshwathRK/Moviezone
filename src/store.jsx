import { configureStore } from "@reduxjs/toolkit";
import searchMovieData from './slices/APIMoiveSlices'

    export const store = configureStore({
        devTools:true,
        reducer: {
            movieSearchData : searchMovieData,
        }
    })