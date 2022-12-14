import {SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
// import type {} from 'redux-thunk/extend-redux';
import {addLocationInputDataToState} from "../../redux/locationDataSlice";

import { v4 as uuid } from 'uuid';

import SearchSvg from "../atoms/svg/SearchSvg";
import {SearchStyled} from "./Search.styled";
import {Dispatch} from "@reduxjs/toolkit";


import {ChangeEvent} from "react";
const Search = (): JSX.Element => {

    const dispatch: Dispatch = useDispatch()

    const [locationInput, setLocationInput] = useState<string>(``)

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        if(locationInput.length > 2) {
            dispatch(addLocationInputDataToState({
                locationId: uuid(),
                locationInput: locationInput,
                locationName: ``,
                locationTemp: ``,
                locationDesc: ``,
                locationIcon: ``,
                locationPicture: ``,
            }))
        }
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
      </SearchStyled>
  )
}

export default Search