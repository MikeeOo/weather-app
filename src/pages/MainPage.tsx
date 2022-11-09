import Header from "../components/MainPage/Header";
import Search from "../components/MainPage/Search";
import Display from "../components/MainPage/Display";

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