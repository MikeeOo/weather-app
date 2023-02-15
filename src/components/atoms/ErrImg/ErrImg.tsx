import {ErrImgStyled} from "./ErrImg.styled";
import {IErrImg} from "./ErrImg.types";

const ErrImg = ({fontSize, errorBorder}: IErrImg): JSX.Element => <ErrImgStyled fontSize={fontSize} errorBorder={errorBorder}>Image not found...</ErrImgStyled>;

export default ErrImg;