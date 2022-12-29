import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: "Dark",
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, {payload}){
            console.log(state.theme)
            state.theme = payload;
        }
    }
});

export const {changeTheme} = themeSlice.actions;

export const themeState = (state) => state.themeState.theme;

export default themeSlice.reducer;