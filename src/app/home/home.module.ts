import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RenderingComponent } from "./rendering/rendering.component";
import { PixelComponent } from "./rendering/pixel/pixel.component";
import { ComputingComponent } from "./computing/computing.component";
import { AnimationComponent } from "./animation/animation.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        NavigationComponent,
        RenderingComponent,
        PixelComponent,
        ComputingComponent,
        AnimationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
