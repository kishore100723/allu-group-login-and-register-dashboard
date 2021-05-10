import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component(
    {
        selector: "app-home",
        templateUrl: "./home.component.html",
        styleUrls: ["./home.component.css"]
    })
export class Homecomponent {
    constructor(private activatedRoute: ActivatedRoute){

        console.log('From snapshot ${activatedRoute.snapshot.paramMap.get("name")}');
        activatedRoute.paramMap.subscribe(item=> {
            console.log('From paraMap ${item.get("name")}');
        });
    }
}