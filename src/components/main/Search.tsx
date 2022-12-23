import {SyntheticEvent, useEffect, useState} from "react";
import {useDispatch, useSelector,} from "react-redux";
import {addLocationInputDataToState, deleteErr} from "../../redux/locationDataSlice";
import { v4 as uuid } from 'uuid';

import SearchSvg from "../atoms/svg/SearchSvg";
import {SearchStyled} from "./Search.styled";
import {Dispatch} from "@reduxjs/toolkit";
import {notFoundError} from "../../redux/locationDataSlice";

import {ChangeEvent} from "react";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import {updateLocationDataArrayViaApi} from "../../api/thunks";

const Search = (): JSX.Element => {

    const dispatch: Dispatch = useDispatch()

    const err = useSelector(notFoundError)

    const [locationInput, setLocationInput] = useState<string>(``)

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            dispatch(deleteErr())
        }, 1000 * 7)

        return () => clearTimeout(timeout)
    },[err])

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        if(locationInput.length > 2) {
            dispatch(addLocationInputDataToState({
                locationId: uuid(),
                locationInput: locationInput,
                locationPictureIndex: "0"
            }))
        }
        dispatch(deleteErr())
        setLocationInput(``)
    }

    // console.log(err)
  return (
      <SearchStyled>

          <form onSubmit={handleSubmit}>

              <input type="search"
                     value={locationInput}
                     placeholder={`City, Country or Landmark...`}
                     onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}/>

              <button type="submit"><SearchSvg/></button>
          </form>
          {err && <div style={{color: `red`}}>location not found</div>}
      </SearchStyled>
  )
}

export default Search