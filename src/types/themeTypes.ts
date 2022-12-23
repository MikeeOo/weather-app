export interface ITheme {
    color: IColor,
    weight: IWeight
}

interface IColor {
    primary: string,
    secondary: string,
    white: string,
    grey: string,
    log: string
}

interface IWeight {
    semiBold: string,
    bold: string,
    extraBold: string,
}