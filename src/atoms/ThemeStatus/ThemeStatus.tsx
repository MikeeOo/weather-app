import {IThemeStatus} from "../../types/propsTypes";
import {FaLightbulb} from "react-icons/fa";
import {BsFillMoonFill} from "react-icons/bs";

import {ThemeStatusStyled} from "./ThemeStatus.styled";


const ThemeStatus = ({themeChangeStatus}: IThemeStatus): JSX.Element => {

  return (
      <ThemeStatusStyled>
          {themeChangeStatus === "Light" ? <FaLightbulb/> : <BsFillMoonFill/>}
          {themeChangeStatus} Mode
      </ThemeStatusStyled>
  );
};

export default ThemeStatus;