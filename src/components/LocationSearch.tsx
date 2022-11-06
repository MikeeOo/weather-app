import {SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getLocationDataFromAPI} from "../api/thunks";

const LocationSearch = (): JSX.Element => {

    const dispatch = useDispatch()

    const [locationInput, setLocationInput] = useState<string>(``)

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        dispatch(getLocationDataFromAPI(locationInput))
        setLocationInput(``)
    }

  return (
      <>
          <form onSubmit={handleSubmit}>

              <input type="text"
                     value={locationInput}
                     placeholder={`City, Country or Landmark`}
                     onChange={e => setLocationInput(e.target.value)}/>

              <button>Add Location</button>
          </form>
      </>
  )
}

export default LocationSearch