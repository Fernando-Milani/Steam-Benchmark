import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private apiKey = '';

  constructor(private http: HttpClient) {}

  getPlayerSummary(steamId: string) {
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${this.apiKey}&steamids=${steamId}`;
    return this.http.get(url);
  }
}