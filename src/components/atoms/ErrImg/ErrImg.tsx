import {IErrImg} from "./ErrImg.types";
import {ErrImgStyled} from "./ErrImg.styled";

const ErrImg = ({fontSize, errorBorder}: IErrImg): JSX.Element => <ErrImgStyled fontSize={fontSize} errorBorder={errorBorder}>Image not found...</ErrImgStyled>;

export default ErrImg;