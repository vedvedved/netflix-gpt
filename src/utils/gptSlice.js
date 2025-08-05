import { createSlice } from "@reduxjs/toolkit";

const gptSLice = createSlice({
    name : "gpt",
    initialState:{
        showGptSearch : false,
        movieResults : null,
        movieNames:null,
    },
    reducers : { 
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult}= gptSLice.actions;

export default gptSLice.reducer;