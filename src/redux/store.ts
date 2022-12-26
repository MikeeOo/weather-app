import {configureStore} from "@reduxjs/toolkit";

import locationDataSlice from "./locationDataSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        locationData: locationDataSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>