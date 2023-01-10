import { ButtonStyled } from "./Button.styled";
import {IButton} from "../../types/propsTypes";


const Button = ({children, fontSize, borderRadius, padding}: IButton): JSX.Element => {

  return (
      <ButtonStyled
          fontSize={fontSize}
          borderRadius={borderRadius}
          padding={padding}
      >
          {children}
      </ButtonStyled>
  );
};

export default Button;