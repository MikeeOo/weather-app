import Button from "../../cells/Button";
import BtnContent from "../../atoms/BtnContent";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeTheme } from "../../../redux/slices/themeStatusSlice";

import {HeaderWrapped, HeaderStyled} from "./Header.styled";
import {FaLightbulb} from "react-icons/fa";
import {BsFillMoonFill} from "react-icons/bs";


const Header = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);

  return (
      <HeaderWrapped>

          <HeaderStyled>

              <h1 style={{
                  fontSize: `1.4rem`,
                  fontWeight: `700`
              }}>🌈weather-app🌈</h1>

              <Button onClick={() => dispatch(changeTheme( themeChangeStatus === "Light" ? "Dark" : "Light"))}
                      contrast
                      fontSize="1.2rem"
                      padding=".5em .5em">

                  <BtnContent content="iconText"
                              icon={themeChangeStatus === "Light" ? <FaLightbulb/> : <BsFillMoonFill/>}
                              text={`${themeChangeStatus} Mode`}/>
              </Button>
          </HeaderStyled>
      </HeaderWrapped>
  );
};

export default Header;