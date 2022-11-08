import {SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getLocationDataFromAPI} from "../api/thunks";

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

              <button>Add Location</button>
              <input type="text"
                     value={locationInput}
                     placeholder={`City, Country or Landmark`}
                     onChange={e => setLocationInput(e.target.value)}
              />
          </form>
      </LocationSearchStyled>
  )
}

export default LocationSearch