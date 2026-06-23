import { Component } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile';

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
    private profileService: ProfileService
  ) {}

  compareProfiles() {

    this.profiles = [
      {
        steamId: '76561198000000001',
        name: 'Fernando',
        avatar: 'https://placehold.co/100',
        totalHours: 1200
      },
      {
        steamId: '76561198000000002',
        name: 'Gaben',
        avatar: 'https://placehold.co/100',
        totalHours: 5400
      },
      {
        steamId: '76561198000000003',
        name: 'Pedro',
        avatar: 'https://placehold.co/100',
        totalHours: 900
      }
    ];

  }

}