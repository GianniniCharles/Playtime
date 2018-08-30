import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styles: [
        `
        @keyframes spin {
            from { transform: rotate(0); } to { transform: rotate(360);}
        }
        Image {
            animation-name: spin; animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
        `
    ]
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
        console.log({
            type: 'LOG_TO_CONSOLE',
            payload: 'Hello World'

        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
