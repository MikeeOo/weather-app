import Search from "../components/main/Search";
import Display from "../components/main/Display";

import {MainPageStyled} from "./MainPage.styled";

const MainPage = (): JSX.Element => {
    
  return (
      <MainPageStyled>


          <Search/>
          <Display/>
      </MainPageStyled>
  )
}

export default MainPage