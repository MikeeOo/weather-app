import {IButton} from "./Button.types";
import {ButtonStyled} from "./Button.styled";

const Button = ({children, onClick, fontSize, borderRadius, padding, contrast, imgPosition}: IButton): JSX.Element =>
    <ButtonStyled onClick={onClick} fontSize={fontSize} borderRadius={borderRadius} padding={padding} contrast={contrast} imgPosition={imgPosition}>{children}</ButtonStyled>;

export default Button;