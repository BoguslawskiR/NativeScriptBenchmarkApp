import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    navigateTo(name: String) {
        console.log(name, 'NAVIGATE')
        this.router.navigate(['/home', name], { queryParams: { startTime: new Date().getTime() } })
    }
}
