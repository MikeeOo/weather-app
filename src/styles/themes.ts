import {ITheme} from "../types/themeTypes";

export const darkTheme: ITheme = {
    color: {
        primary: `#202C36`,
        secondary: `#2B3844`,
        // secondary: `rgba(79, 95, 110, 0.4)`,
        white: `#FFFFFF`,
        grey: `#808080`,

        log: `rgba(0, 255, 0, 0.2)`
    },

    weight: {
        semiBold: `600`,
        bold: `700`,
        extraBold: `800`,
    }
};

export const lightTheme: ITheme = {
    color: {
        primary: `#F2F2F2`,
        secondary: `#FFFFFF`,
        // secondary: `rgba(79, 95, 110, 0.4)`,
        white: `#111517`,
        grey: `#808080`,

        log: `rgba(0, 255, 0, 0.2)`
    },

    weight: {
        semiBold: `600`,
        bold: `700`,
        extraBold: `800`,
    }
};