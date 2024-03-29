import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

import locationDataSlice from "./slices/locationDataSlice";
import themeStatusSlice from "./slices/themeStatusSlice";

export const store = configureStore({
    reducer: {
        locationData: locationDataSlice,
        theme: themeStatusSlice
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;