import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILocationData} from "../../types/common.types";
import getLocationFromAPI from "../../utils/getLocationFromAPI";

export const updateLocationDataArrayViaApi = createAsyncThunk(
    'locationData/updateLocationDataArrayViaApi',
    async (locationDataArray: Array<ILocationData>): Promise<Array<ILocationData>> => {

        const updatedLocationDataArray: Array<ILocationData> = [];

        for(const locationData  of locationDataArray){
            updatedLocationDataArray.push(await getLocationFromAPI(locationData));
        }
        return updatedLocationDataArray;
    }
);

export const addLocationDataArrayViaApi = createAsyncThunk(
    'locationData/addLocationDataArrayViaApi',
    async (locationData: ILocationData): Promise<ILocationData> => {
        return await getLocationFromAPI(locationData)
    }
);