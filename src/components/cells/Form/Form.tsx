import {IForm} from "./Form.types";
import { FormStyled } from "./Form.styled";

const Form = ({children, onSubmit, errorColor}: IForm): JSX.Element =>
    <FormStyled onSubmit={onSubmit} errorColor={errorColor}>{children}</FormStyled>;

export default Form;