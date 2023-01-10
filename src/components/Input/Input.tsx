import {InputStyled} from "./Input.styled";

import {IInput} from "../../types/propsTypes";

const Input = ({type, value, placeholder, onChange, onClick, errorColor} : IInput): JSX.Element => {

  return (
      <InputStyled type={type}
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange}
                   onClick={onClick}
                   errorColor={errorColor}/>
  );
};

export default Input;