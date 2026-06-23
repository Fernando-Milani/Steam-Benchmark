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
    this.profiles = [];

    if (this.profile1.trim()) {
      this.profiles.push({
        id: '1',
        name: this.profile1
      });
    }

    if (this.profile2.trim()) {
      this.profiles.push({
        id: '2',
        name: this.profile2
      });
    }

    if (this.profile3.trim()) {
      this.profiles.push({
        id: '3',
        name: this.profile3
      });
    }
  }
}