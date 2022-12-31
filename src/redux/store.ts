import {configureStore} from "@reduxjs/toolkit";

import locationDataSlice from "./locationDataSlice";
import themeStatusSlice from "./themeStatusSlice";

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        locationData: locationDataSlice,
        theme: themeStatusSlice
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;