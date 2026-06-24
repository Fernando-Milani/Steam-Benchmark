import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPlayerSummary(steamId: string) {

    return this.http.get(
      `${this.apiUrl}/steam/profile/${steamId}`
    );

  }

  getPlayerSummaries(steamIds: string[]) {

    const ids = steamIds.join(',');

    return this.http.get<any[]>(
      `${this.apiUrl}/steam/profiles/${ids}`
    );

  }

  getCommonGames(steamIds: string[]) {

  const ids = steamIds.join(',');

  return this.http.get<any[]>(
    `${this.apiUrl}/steam/common-games/${ids}`
  );

}

  getStats(steamId: string) {

    return this.http.get<any>(
      `${this.apiUrl}/steam/stats/${steamId}`
    );

  }

}