import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeTheme} from "../../redux/themeStatusSlice";

import styled from "styled-components";
import {fontWeightBold} from "../../styles/mixins";

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
  background-color: ${({theme}) => theme.color.elements};
  color: ${({theme}) => theme.color.text};
  display: flex;
  font-size: 1.4rem;
  ${fontWeightBold};
  height: 8rem;
  //padding: 2em;
  //padding: 2em;
  justify-content: space-between;
`