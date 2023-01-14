import {DecorationStyled} from "./Decoration.styled";
import {IDecoration} from "./Decoration.types";

const PseudoElement = ({w, h}: IDecoration): JSX.Element => <DecorationStyled w={w} h={h}/>;

export default PseudoElement;