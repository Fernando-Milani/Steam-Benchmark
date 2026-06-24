import { Component } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { SteamService } from '../../services/steam';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  profile1 = '';
  profile2 = '';
  profile3 = '';

  profiles: Profile[] = [];
  commonGames: any[] = [];

  constructor(
    private steamService: SteamService
  ) {}
  

  compareProfiles() {

    const steamIds = [
      this.profile1,
      this.profile2,
      this.profile3
    ].filter(id => id.trim());

    if (steamIds.length === 0) {
      return;
    }

    this.steamService
      .getCommonGames(steamIds)
      .subscribe((games: any[]) => {

        this.commonGames = games;

      });

    this.steamService
      .getPlayerSummaries(steamIds)
      .subscribe((players: any[]) => {

        this.profiles = players.map(player => ({
          steamId: player.steamid,
          name: player.personaname,
          avatar: player.avatarfull,
          totalGames: 0,
          totalHours: 0,
          favoriteGame: '',
          favoriteGameIcon: ''
        }));

        this.profiles.forEach(profile => {

          this.steamService
            .getStats(profile.steamId)
            .subscribe((stats: any) => {

              profile.totalGames = stats.totalGames;
              profile.totalHours = stats.totalHours;
              profile.favoriteGame = stats.favoriteGame;
              profile.favoriteGameIcon = stats.favoriteGameIcon;

            });

        });

      });

  }
  

}