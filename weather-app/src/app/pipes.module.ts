import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WeatherTypePipe } from "./utilities/weather-to-icon";

@NgModule({
    declarations:[WeatherTypePipe],
    imports:[CommonModule],
    exports:[WeatherTypePipe]
})


export class Pipe{}