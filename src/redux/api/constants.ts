const {REACT_APP_WEATHER_API_KEY,REACT_APP_IMAGE_API_KEY} = process.env;

export const WEATHER_API: string = `https://api.openweathermap.org/data/2.5/`;
export const WEATHER_API_KEY: string | undefined = REACT_APP_WEATHER_API_KEY;

export const IMAGE_API: string = `https://pixabay.com/api/`;
export const IMAGE_API_KEY: string | undefined = REACT_APP_IMAGE_API_KEY;