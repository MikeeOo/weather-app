export interface INavigate {
    currSlide: number;
    params: Readonly<Partial<Record<string, string | undefined>>>;
}