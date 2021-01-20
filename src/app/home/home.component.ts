import { Component, OnInit } from "@angular/core";
import { PropertiesService } from "../services/properties.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  propertiesEpisodes = [];

  constructor(private properties: PropertiesService) {}

  ngOnInit(): void {
    this.properties.getEpisodes().then((data: any) => {
      this.propertiesEpisodes = data;
    });
  }
}
