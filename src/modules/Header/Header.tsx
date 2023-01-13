import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeTheme} from "../../redux/slices/themeStatusSlice";

import Button from "../../components/Button";
import ThemeStatus from "../../atoms/ThemeStatus";

import { HeaderStyled } from "./Header.styled";

const Header = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);

  return (
      <HeaderStyled>

          <h1>🌈weather-app🌈</h1>

              <Button onClick={() => dispatch(changeTheme( themeChangeStatus === "Light" ? "Dark" : "Light"))}
                            contrast
                            fontSize="1.2rem"
                            padding=".5em .5em">
                  <ThemeStatus/>
              </Button>
      </HeaderStyled>
  );
};

export default Header;