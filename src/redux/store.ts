import {configureStore} from "@reduxjs/toolkit";
import locationDataSlice from "./locationDataSlice";

export default configureStore({
    reducer: {
        locationData: locationDataSlice
    }
})