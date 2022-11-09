import {SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getLocationDataFromAPI} from "../api/thunks";

import {ReactComponent as Search} from "../assets/search.svg"

import {LocationSearchStyled} from "./LocationSearch.styled";

const LocationSearch = (): JSX.Element => {

    const dispatch = useDispatch()

    const [locationInput, setLocationInput] = useState<string>(``)

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        dispatch(getLocationDataFromAPI(locationInput))
        setLocationInput(``)
    }

  return (
      <LocationSearchStyled>

          <form onSubmit={handleSubmit}>

              <input type="search"
                     value={locationInput}
                     placeholder={`City, Country or Landmark...`}
                     onChange={e => setLocationInput(e.target.value)}/>
              <button type="submit"><Search/></button>
          </form>
      </LocationSearchStyled>
  )
}

export default LocationSearch