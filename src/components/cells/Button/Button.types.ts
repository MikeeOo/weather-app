export interface IButton {
    children?: JSX.Element | string | Array<JSX.Element | string>;
    onClick?: () => void;
    fontSize: string;
    borderRadius?: string;
    padding: string;
    contrast?: boolean;
    imgPosition?: boolean;
}