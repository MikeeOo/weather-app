export interface ITheme {
    color: IColor;
}

interface IColor {
    text: string;
    elements: string;
    background: string;
    pseudoElement: string;
}