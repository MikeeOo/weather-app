import {useState, useEffect, SyntheticEvent, ChangeEvent} from "react";

import { v4 as uuid } from 'uuid';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {addLocationInputDataToState, removeLocationNotFoundError} from "../../redux/locationDataSlice";

import SearchSvg from "../atoms/svg/SearchSvg";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

import {SearchStyled} from "./Search.styled";


const Search = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const locationNotFoundError = useAppSelector(state=> state.locationData.locationNotFoundError);

    const [locationInput, setLocationInput] = useState<string>(``)

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            dispatch(removeLocationNotFoundError())
        }, 1000 * 7)

        return () => clearTimeout(timeout)
    },[locationNotFoundError])

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        if(locationInput.length > 2) {
            dispatch(addLocationInputDataToState({
                locationId: uuid(),
                locationInput: locationInput,
                locationImageIndex: "0"
            }))
        }
        dispatch(removeLocationNotFoundError())
        setLocationInput(``)
    }

  return (
      <SearchStyled>

          <form onSubmit={handleSubmit}>

              <input type="search"
                     value={locationInput}
                     placeholder={`City, Country or Landmark...`}
                     onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}/>

              <button type="submit"><SearchSvg/></button>
          </form>

          {locationNotFoundError && <div style={{color: `red`}}>location not found</div>}
      </SearchStyled>
  );
};

export default Search;