import Button from "../../cells/Button";
import ThemeStatus from "../../00/ThemeStatus";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeTheme } from "../../../redux/slices/themeStatusSlice";

import {HeaderWrapped, HeaderStyled} from "./Header.styled";

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
                  <ThemeStatus/>
              </Button>

          </HeaderStyled>
      </HeaderWrapped>
  );
};

export default Header;