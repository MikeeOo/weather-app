import {FaLightbulb} from "react-icons/fa";
import {BsFillMoonFill} from "react-icons/bs";

import {ThemeStatusStyled} from "./ThemeStatus.styled";
import {useAppSelector} from "../../../redux/store";

const ThemeStatus = (): JSX.Element => {

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);

    return (
      <ThemeStatusStyled>
          {themeChangeStatus === "Light" ? <FaLightbulb/> : <BsFillMoonFill/>}
          {themeChangeStatus} Mode
      </ThemeStatusStyled>
  );
};

export default ThemeStatus;