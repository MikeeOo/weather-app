import {ITheme} from "./theme.types";

export const darkTheme: ITheme = {
    color: {
        text: `#FFFFFF`,
        elements: `#2B3844`,
        background: `#202C36`,
        pseudoElement: `rgba(255, 255, 255 , 0.15)`
    }
};

export const lightTheme: ITheme = {
    color: {
        text: `#111517`,
        elements: `#FFFFFF`,
        background: `#FAFAFA`,
        pseudoElement: `rgba(0, 0, 0 , 0.3)`
    }
};