import { Component } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

  profiles: Profile[] = [];

  compareProfiles() {

      this.profiles = [
          {
              id: '1',
              name: 'Fernando'
          },
          {
              id: '2',
              name: 'João'
          }
      ];
  }
}