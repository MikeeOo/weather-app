import {IInput} from "./Input.types";
import {InputStyled} from "./Input.styled";

const Input = ({type, value, placeholder, onChange, onClick}: IInput): JSX.Element =>
    <InputStyled type={type} value={value} placeholder={placeholder} onChange={onChange} onClick={onClick}/>;

export default Input;