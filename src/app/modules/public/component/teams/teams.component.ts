import { Component } from '@angular/core';

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
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
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
}
