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



    this.profileService.getUsers().subscribe((data: any) => {

      console.log(data);
      alert(data);

    });
  }
}