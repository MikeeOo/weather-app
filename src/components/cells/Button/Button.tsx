import { ButtonStyled } from "./Button.styled";
import {IButton} from "./Button.types";

const Button = ({children, onClick, fontSize, borderRadius, padding, contrast, imgPosition}: IButton): JSX.Element => {

  return (
      <ButtonStyled
          onClick={onClick}
          fontSize={fontSize}
          borderRadius={borderRadius}
          padding={padding}
          contrast={contrast}
          imgPosition={imgPosition}>
          
          {children}
      </ButtonStyled>
  );
};

export default Button;