import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface TeamMember {
  name: string;
  profession: string;
  img: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  delay: string; // Animation delay
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],  // Corrected styleUrls
  standalone: true,
  imports: [
    CommonModule// Add JsonPipe
  ]
})
export class TeamsComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Martin Doe',
      profession: 'Support Specialist',
      img: '/assets/img/team-1.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      },
      delay: '0.1s'
    },
    {
      name: 'Jane Smith',
      profession: 'Customer Manager',
      img: '/assets/img/team-2.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      },
      delay: '0.3s'
    },
    {
      name: 'John Brown',
      profession: 'Technical Support',
      img: '/assets/img/team-3.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      },
      delay: '0.5s'
    },
    {
      name: 'Lisa White',
      profession: 'Billing Specialist',
      img: '/assets/img/team-4.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      },
      delay: '0.7s'
    }
  ];

  data: any;
  errorMessage: string = '';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    const apiUrl = 'http://localhost:5136/api/Persons/proba';  // Replace with your Swagger API URL
    this.httpService.get<any>(apiUrl).subscribe(
      (response) => {
        console.log('API Response:', response);  // Log the response
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = error.message;
      }
    );

  }
}
