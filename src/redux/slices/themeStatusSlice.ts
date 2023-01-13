import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IThemeChangeStatusState} from "./themeStatusSlice.types";

const initialState: IThemeChangeStatusState = {
    themeChangeStatus: "Light",
};

const themeStatusSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state, {payload}: PayloadAction<string>): void {
            state.themeChangeStatus = payload;
        }
    }
});

export const {changeTheme} = themeStatusSlice.actions;

export default themeStatusSlice.reducer;