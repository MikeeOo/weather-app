import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../redux/themeSlice";
import {themeState as reduxThemeState} from "../redux/themeSlice";

const Header = (): JSX.Element => {

    const dispatch = useDispatch()

    const themeState = useSelector(reduxThemeState)

    const handleClick = (): void => {
        themeState === `Dark` ? dispatch(changeTheme(`Light`)) : dispatch(changeTheme(`Dark`))
    }

  return (
      <HeaderStyled>

          <h1>🌈MikeeOo's weather-app🌈</h1>
          {/*<h1>Where in the world?</h1>*/}
          <button onClick={handleClick}>{themeState} Mode</button>
      </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({theme}) => theme.color.secondary};
  //background-color: ${({theme}) => theme.color.log};
  
  color: ${({theme}) => theme.color.white};
  display: flex;
  font-size: 1.4rem;
  font-weight: ${({theme}) => theme.weight.bold};
  height: 8rem;
  //padding: 2em;
  //padding: 2em;
  justify-content: space-between;
`