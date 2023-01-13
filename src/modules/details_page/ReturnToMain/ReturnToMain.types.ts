export interface IReturnToMain {
    currSlide: number;
    params: Readonly<Partial<Record<string, string | undefined>>>;
}