import { Component, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "Navigation",
  moduleId: module.id,
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements AfterViewInit {

  result: number = 0;
  constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.result = new Date().getTime() - params.startTime
    })
  }

  onBackTap(): void {
    this.routerExtensions.backToPreviousPage()
  }
}
