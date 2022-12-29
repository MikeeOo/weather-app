import {configureStore} from "@reduxjs/toolkit";

import locationDataSlice from "./locationDataSlice";
import themeSlice from "./themeSlice";

import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        locationData: locationDataSlice,
        themeState: themeSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>