import {IModal} from "./Modal.types";
import {ModalStyled, OverlayStyled} from "./Modal.styled";

const Modal = ({children}: IModal): JSX.Element => {
    return (
        <>
            <OverlayStyled/>
            <ModalStyled>{children}</ModalStyled>
        </>
    );
};

export default Modal;