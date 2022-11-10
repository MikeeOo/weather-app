import {SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getLocationDataFromAPI} from "../../../api/thunks";

import SearchSvg from "../../atoms/svg/SearchSvg";

import {SearchStyled} from "./Search.styled";

const Search = (): JSX.Element => {

    const dispatch = useDispatch()

    const [locationInput, setLocationInput] = useState<string>(``)

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        // @ts-ignore
        dispatch(getLocationDataFromAPI(locationInput))
        setLocationInput(``)
    }

  return (
      <SearchStyled>

          <form onSubmit={handleSubmit}>

              <input type="search"
                     value={locationInput}
                     placeholder={`City, Country or Landmark...`}
                     onChange={e => setLocationInput(e.target.value)}/>
              <button type="submit"><SearchSvg/></button>
          </form>
      </SearchStyled>
  )
}

export default Search