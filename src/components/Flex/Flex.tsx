import { FlexStyled } from "./Flex.styled";
import {IFlex} from "./Flex.types";

const Flex = ({children, jc, ai, h, w, fs, bc}: IFlex): JSX.Element => {
    return (
        <FlexStyled jc={jc} ai={ai} h={h} w={w} fs={fs} bc={bc}>
            {children}
        </FlexStyled>
    );
};

export default Flex;