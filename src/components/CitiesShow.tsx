import CityData from "./CityData";

import {useSelector} from "react-redux";
import {citiesData as reduxCitiesData} from "../redux/citiesSlice";

const CitiesShow = (): JSX.Element => {

    const citiesData = useSelector(reduxCitiesData)


  return (
      <>
          <CityData/>
          {console.log(citiesData)}
      </>
  )
}

export default CitiesShow