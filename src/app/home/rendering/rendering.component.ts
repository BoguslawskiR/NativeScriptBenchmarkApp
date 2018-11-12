import { Component, OnInit, Renderer2 } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { screen } from "tns-core-modules/platform";

@Component({
  selector: "Rendering",
  moduleId: module.id,
  templateUrl: "./rendering.component.html"
})
export class RenderingComponent implements OnInit {


  constructor(private routerExtensions: RouterExtensions, private renderer: Renderer2) { }

  buttonIndicator = false;
  renderIndicator = false;
  height = screen.mainScreen.heightPixels - 64;
  width = screen.mainScreen.widthPixels;
  sourceElements = [];
  ngOnInit(): void {
    for (let i = 0; i < (this.height * this.width) / 100; i++) {
      this.sourceElements.push(1)
    }
  }

  renderElements(): void {
    this.buttonIndicator = true;
    setTimeout(() => {
      this.renderIndicator = true;
    })
  }

  onBackTap(): void {
    this.routerExtensions.backToPreviousPage()
  }
}
