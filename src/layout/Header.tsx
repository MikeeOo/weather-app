import {HeaderStyled} from "./Header.styled";

const Header = (): JSX.Element => {

  return (
      <HeaderStyled>


          <h1>🌈MikeeOo's weather-app🌈</h1>
          {/*<h1>Where in the world?</h1>*/}
          <button>Light Mode</button>
      </HeaderStyled>
  );
};

export default Header;