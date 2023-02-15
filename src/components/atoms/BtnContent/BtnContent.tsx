import {IBtnContent} from "./BtnContent.types";
import {BtnContentStyled, IconStyled} from "./BtnContent.styled";

const BtnContent = ({text, icon, iconText}: IBtnContent): JSX.Element =>
    <BtnContentStyled>{iconText ? <><IconStyled>{icon}</IconStyled><span>{text}</span></> : <>{icon}</>}</BtnContentStyled>;

export default BtnContent;