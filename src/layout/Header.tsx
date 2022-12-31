import {useAppDispatch, useAppSelector} from "../redux/store";
import {changeTheme} from "../redux/themeStatusSlice";

import styled from "styled-components";

const Header = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);

    const handleClick = (): void => {
        dispatch(changeTheme( themeChangeStatus === "Light" ? "Dark" : "Light"));
    };

  return (
      <HeaderStyled>

          <h1>🌈MikeeOo's weather-app🌈</h1>
          <button onClick={handleClick}>{themeChangeStatus} Mode</button>
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