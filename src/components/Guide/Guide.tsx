import {GuideStyled} from "./Guide.styled";
import {IGuide} from "../../types/propsTypes";

const Guide = ({guideStatus, errorColor}: IGuide): JSX.Element => <GuideStyled errorColor={errorColor}>{guideStatus}</GuideStyled>;

export default Guide;