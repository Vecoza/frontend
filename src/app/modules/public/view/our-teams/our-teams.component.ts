import { Component } from '@angular/core';
import {TeamsComponent} from '../../component/teams/teams.component';

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrl: './our-teams.component.css',
  imports: [
    TeamsComponent
  ],
  standalone: true
})
export class OurTeamsComponent {

}
