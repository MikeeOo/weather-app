import {BaseSyntheticEvent, SyntheticEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getCitiesDataFromAPI} from "../api/thunks";

const CitySearch = (): JSX.Element => {

    const dispatch = useDispatch()

    const [city, setCity] = useState<string>(``)

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault()

        dispatch(getCitiesDataFromAPI(city))

        // console.log(e)
        // console.log(form)

        setCity(``)
    }

  return (
      <>
          <form onSubmit={handleSubmit}>

              <input type="text"
                     value={city}
                     placeholder={`city`}
                     onChange={e => setCity(e.target.value)}
              />

              <button>Add City</button>
          </form>
      </>
  )
}

export default CitySearch