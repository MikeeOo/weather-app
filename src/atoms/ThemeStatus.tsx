import {IThemeStatus} from "../types/propsTypes";
import {FaLightbulb} from "react-icons/fa";
import {BsFillMoonFill} from "react-icons/bs";
import {css} from "styled-components";
import {flexBox} from "../styles/mixins/logicalMixins";


const ThemeStatus = ({themeChangeStatus}: IThemeStatus): JSX.Element => {

  return (
      <div style={{paddingRight: `200px`}}>
          {themeChangeStatus === "Light" ? <FaLightbulb/> : <BsFillMoonFill/>}
          {themeChangeStatus} Mode
      </div>
  );
};

export default ThemeStatus;

// ${props => props.themeStatus && css`
//   ${flexBox({jc: "space-between"})};
// width: 12222.7rem;
// `};