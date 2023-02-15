export interface IButton {
    children?: JSX.Element | Array<JSX.Element | string>;
    onClick?: () => void;
    fontSize: string;
    borderRadius?: string;
    padding: string;
    contrast?: boolean;
    hide?: boolean;
    imgPosition?: boolean;
}