import {useState, SyntheticEvent} from "react";

import {useDispatch} from "react-redux";
// import type {} from 'redux-thunk/extend-redux';
import {addLocationInputToArray} from "../../redux/locationDataSlice";

import {SearchStyled} from "./Search.styled";
import SearchSvg from "../atoms/svg/SearchSvg";

const Search = (): JSX.Element => {

    const dispatch = useDispatch()

    const [locationInput, setLocationInput] = useState<string>(``)

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        dispatch(addLocationInputToArray({
            locationInput: locationInput,
            locationName: ``,
        }))
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