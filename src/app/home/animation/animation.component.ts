import { Component, OnInit, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
import { View, Page } from "tns-core-modules/ui/page/page";

let view1: View;
let view2: View;
let view3: View;
let view4: View;
let view5: View;
let view6: View;

@Component({
  selector: "Animation",
  moduleId: module.id,
  templateUrl: "./animation.component.html"
})
export class AnimationComponent implements OnInit, AfterViewInit {
  constructor(private routerExtensions: RouterExtensions, private page: Page) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    view1 = this.page.getViewById<View>("view1");
    view2 = this.page.getViewById<View>("view2");
    view3 = this.page.getViewById<View>("view3");
    view4 = this.page.getViewById<View>("view4");
    view5 = this.page.getViewById<View>("view5");
    view6 = this.page.getViewById<View>("view6");
    setTimeout(() => this.animate(), 0)
  }


  animate() {
    view1.animate({
      translate: { x: 0, y: 100 },
      duration: 3000
    })
    view2.animate({
      translate: { x: 0, y: 200 },
      duration: 3000
    })
    view3.animate({
      translate: { x: 0, y: 300 },
      duration: 3000
    })
    view4.animate({
      translate: { x: 0, y: 400 },
      duration: 3000
    })
    view5.animate({
      translate: { x: 0, y: 500 },
      duration: 3000
    })
    view6.animate({
      translate: { x: 0, y: 600 },
      duration: 3000
    })
  }

  onBackTap(): void {
    this.routerExtensions.backToPreviousPage()
  }
}
