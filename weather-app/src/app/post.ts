export interface weather{
    base: string;
    clouds: any;
    cod: number;
    coord: any;
    dt: number;
    id: number;
    main: any;
    name: string;
    sys: any;
    timezone: number;
    visibility: number;
    weather: Array<Weather>;
    wind: any;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string
}