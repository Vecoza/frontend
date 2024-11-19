import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-features-piece',
  templateUrl: './features-piece.component.html',
  styleUrl: './features-piece.component.css',
  standalone:true,
  imports: [
    NgForOf
  ]
})
export class FeaturesPieceComponent {
  leftFeatures = [
    {
      title: 'First Class services',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?',
      icon: 'fa fa-trophy fa-2x',
      delay: '0.1s'
    },
    {
      title: '24/7 road assistance',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?',
      icon: 'fa fa-road fa-2x',
      delay: '0.3s'
    }
  ];

  rightFeatures = [
    {
      title: 'Quality at Minimum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?',
      icon: 'fa fa-tag fa-2x',
      delay: '0.1s'
    },
    {
      title: 'Free Pick-Up & Drop-Off',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?',
      icon: 'fa fa-map-pin fa-2x',
      delay: '0.3s'
    }
  ];
}
