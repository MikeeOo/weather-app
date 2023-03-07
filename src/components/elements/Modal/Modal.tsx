import {IModal} from "./Modal.types";
import {ModalStyled, OverlayStyled} from "./Modal.styled";

const Modal = ({children}: IModal): JSX.Element => <><OverlayStyled/><ModalStyled>{children}</ModalStyled></>;

export default Modal;