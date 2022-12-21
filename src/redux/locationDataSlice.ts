import {createSlice} from "@reduxjs/toolkit";
import {updateLocationDataArrayViaApi} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray, ILocationData} from "../types/reduxData";
import {IUpdatedLocationData} from "../types/apiData";
import {ILocation} from "../types/componentsProps";

const initialState: ILocationDataArray = {
    locationDataArray: [],
    locationDataPage: {},
    loader: false,
    notFoundError: false
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        setLoader(state): void{
            state.loader = true;
        },

        deleteErr(state): void{
            state.notFoundError = false
        },

        addLocationInputDataToState(state, {payload}): void{
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray))
        },

        // change this name!!!
        getLocationFromLocalStorage(state): void{
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        },

        deleteLocationData(state, action): void{

            state.locationDataArray.splice(state.locationDataArray.findIndex((location): boolean => location.locationId === action.payload),1);

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));

            if(!JSON.parse(localStorage.getItem(`locationDataArray`) as string).length){
                localStorage.clear();
            }
        },

        filterLocationDataArrayViaParams(state, {payload}: any): void{
            // const xd = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: { locationId: string; }): boolean => location.locationId === payload.id)
            state.locationDataPage = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: ILocation): boolean => location.locationId === payload.id)
        },

        editLocationPicture(state, {payload}) {
            state.locationDataArray = state.locationDataArray.map(locationData => {
                if(locationData.locationId === payload.currLocationId) {
                    return {...locationData, locationPictureIndex: payload.currLocationSlide}
                } else {
                    return locationData
                }
            })

            // localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray))
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, action: IUpdatedLocationData): void => {

                if(action.payload[action.payload.length - 1].requestCod === `200`) {

                    state.locationDataArray = action.payload;
                    localStorage.setItem(`locationDataArray`, JSON.stringify(action.payload))
                    state.loader = false;
                } else {

                    const updatedLocationArray = action.payload
                    updatedLocationArray.pop()
                    // console.log(updatedLocationArray)
                    state.locationDataArray = updatedLocationArray
                    localStorage.setItem(`locationDataArray`, JSON.stringify(updatedLocationArray))
                    state.loader = false;
                    state.notFoundError = true;
                }
        })
    }
})

export const {editLocationPicture,deleteErr,setLoader, addLocationInputDataToState ,getLocationFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray
export const locationDataPage = (state: ILocationDataReducer): ILocationData => state.locationData.locationDataPage
export const loader = (state: ILocationDataReducer): boolean => state.locationData.loader
export const notFoundError = (state: ILocationDataReducer): boolean => state.locationData.notFoundError

export default locationDataSlice.reducer