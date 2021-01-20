import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PropertiesService {
  constructor() {}

  API_URL = "http://stapi.co/api/v1/rest/episode";

  getEpisodeByUid(uid) {
    return fetch(`${this.API_URL}?uid=${uid}`)
      .then(res => res.json())
      .then(res => Object.values(res));
  }

  getEpisodes() {
    return fetch(`${this.API_URL}/search`)
      .then(res => res.json())
      .then(res => res.episodes);
  }
}
