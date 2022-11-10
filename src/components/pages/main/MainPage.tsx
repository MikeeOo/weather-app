import Header from "../../Header";
import Search from "./Search";
import Display from "./Display";

import {MainPageStyled} from "./MainPage.styled";

const MainPage = (): JSX.Element => {
    
  return (
      <MainPageStyled>

          <Header/>
          <Search/>
          <Display/>
      </MainPageStyled>
  )
}

export default MainPage