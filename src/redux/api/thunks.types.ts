//____________IWeatherResponse____________//
export interface IWeatherResponse {
    status: string;
    value: IWeatherData;
}

export interface IWeatherData {
    name: string;
    cod: number | string;
    main: IWeatherMain;
    weather: Array<IWeatherWeather>;
}

interface IWeatherMain {
    temp: number;
}

interface IWeatherWeather {
    description: string;
    icon: string;
}
//____________IImagesResponse____________//
export interface IImagesResponse {
    status: string;
    value: IImagesData;
}

export interface IImagesData {
    hits: Array<IImage>;
}

interface IImage {
    largeImageURL: string;
}