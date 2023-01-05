import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeTheme} from "../../redux/slices/themeStatusSlice";

import styled from "styled-components";
import {extraBold} from "../../styles/mixins/mixins";
import {ButtonStyled} from "../../styles/atoms/Button.styled";
import {BsFillMoonFill} from "react-icons/bs"
import {FaLightbulb} from "react-icons/fa"


const Header = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);

    const handleClick = (): void => {
        dispatch(changeTheme( themeChangeStatus === "Light" ? "Dark" : "Light"));
    };

  return (
      <HeaderStyled>

          <h1>🌈weather-app🌈</h1>

              <ButtonStyled onClick={handleClick}
                            themeStatus
                            contrast
                            fontSize="1.2rem"
                            padding=".5em .5em">
                  {themeChangeStatus === "Light" ? <FaLightbulb/> : <BsFillMoonFill/>}
                  {themeChangeStatus} Mode
              </ButtonStyled>
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
  font-weight: ${extraBold};
  height: 8rem;
  //padding: 2em;
  //padding: 2em;
  justify-content: space-between;
`