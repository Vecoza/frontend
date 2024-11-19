import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-service-piece',
  templateUrl: './service-piece.component.html',
  styleUrl: './service-piece.component.css',
  standalone:true,
  imports: [
    NgForOf,
    NgClass
  ]
})
export class ServicePieceComponent {

  sectionDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.';

  services = [
    {
      title: 'Phone Reservation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?',
      icon: 'fa-phone-alt'
    },
    {
      title: 'Special Rates',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?',
      icon: 'fa-money-bill-alt'
    },
    {
      title: 'One Way Rental',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?',
      icon: 'fa-road'
    },
    {
      title: 'Life Insurance',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?',
      icon: 'fa-umbrella'
    },
    {
      title: 'City to City',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?',
      icon: 'fa-building'
    },
    {
      title: 'Free Rides',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?',
      icon: 'fa-car-alt'
    }
  ];


}
