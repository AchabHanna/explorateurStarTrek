import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PropertiesService } from "../services/properties.service";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.component.html",
  styleUrls: ["./episode.component.scss"]
})
export class EpisodeComponent implements OnInit {
  episodes = [];

  constructor(
    private route: ActivatedRoute,
    private properties: PropertiesService
  ) {}

  ngOnInit(): void {
    let uid = this.route.snapshot.paramMap.get("id");
    this.properties.getEpisodeByUid(uid).then((data: any) => {
      this.episodes = data;
    });
  }
}
