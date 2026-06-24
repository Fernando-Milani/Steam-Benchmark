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

  constructor(
    private steamService: SteamService
  ) {}

  compareProfiles() {

    if (!this.profile1.trim()) {
      return;
    }

    this.steamService
      .getPlayerSummary(this.profile1)
      .subscribe((player: any) => {

        this.profiles = [
          {
            steamId: player.steamid,
            name: player.personaname,
            avatar: player.avatarfull,
            totalHours: 0
          }
        ];

      });

  }

}