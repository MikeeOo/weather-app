import {SyntheticEvent} from "react";

export interface IForm {
    children: Array<JSX.Element>;
    onSubmit: (e: SyntheticEvent) => void;
    errorColor: string | boolean;
}