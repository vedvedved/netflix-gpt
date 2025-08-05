import { createSlice } from "@reduxjs/toolkit";

const gptSLice = createSlice({
    name : "gpt",
    initialState:{
        showGptSearch : false
    },
    reducers : { 
        toggleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const {toggleGptSearchView}= gptSLice.actions;

export default gptSLice.reducer;