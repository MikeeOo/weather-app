import { ButtonStyled } from "./Button.styled";
import {IButton} from "./Button.types";

const Button = ({children, onClick, fontSize, borderRadius, padding, contrast, hide, imgPosition}: IButton): JSX.Element =>
    <ButtonStyled onClick={onClick} fontSize={fontSize} borderRadius={borderRadius} padding={padding} contrast={contrast} hide={hide} imgPosition={imgPosition}>{children}</ButtonStyled>;

export default Button;