import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RenderingComponent } from "./rendering/rendering.component";
import { ComputingComponent } from "./computing/computing.component";
import { AnimationComponent } from "./animation/animation.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "navigation", component: NavigationComponent },
    { path: "rendering", component: RenderingComponent },
    { path: "computing", component: ComputingComponent },
    { path: "animation", component: AnimationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
