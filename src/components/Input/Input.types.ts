import {ChangeEvent} from "react";

export interface IInput {
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    errorColor: string | boolean;
}