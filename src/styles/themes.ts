import {ITheme} from "./theme.types";

const red: string = `#FF0000`;

export const darkTheme: ITheme = {
    color: {
        err: red,
        text: `#FFFFFF`,
        elements: `#2B3844`,
        background: `#202C36`,
        border: `rgba(255, 255, 255 , 0.15)`
    }
};

export const lightTheme: ITheme = {
    color: {
        err: red,
        text: `#111517`,
        elements: `#FFFFFF`,
        background: `#FAFAFA`,
        border: `rgba(0, 0, 0 , 0.3)`
    }
};