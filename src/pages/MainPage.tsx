import Header from "../components/Header";
import LocationSearch from "../components/LocationSearch";
import LocationDisplay from "../components/LocationDisplay";

import {MainPageStyled} from "./MainPage.styled";

const MainPage = (): JSX.Element => {
    
  return (
      <MainPageStyled>

          <Header/>
          <LocationSearch/>
          <LocationDisplay/>
      </MainPageStyled>
  )
}

export default MainPage