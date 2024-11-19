import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-blog-pieces',
  templateUrl: './blog-pieces.component.html',
  styleUrl: './blog-pieces.component.css',
  standalone:true,
  imports: [
    NgForOf
  ]
})
export class BlogPiecesComponent {
  blogPosts = [
    {
      date: '30 Dec 2025',
      author: 'Martin.C',
      comments: 6,
      title: 'Rental Cars how to check driving fines?',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.',
      image: '/assets/img/blog-1.jpg'
    },
    {
      date: '25 Dec 2025',
      author: 'Martin.C',
      comments: 6,
      title: 'Rental cost of sport and other cars',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.',
      image: '/assets/img/blog-2.jpg'
    },
    {
      date: '27 Dec 2025',
      author: 'Martin.C',
      comments: 6,
      title: 'Document required for car rental',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.',
      image: '/assets/img/blog-3.jpg'
    }
  ];

  getDelay(post: any): string {
    if (post.title === 'Rental Cars how to check driving fines?') {
      return '0.1s';
    } else if (post.title === 'Rental cost of sport and other cars') {
      return '0.3s';
    } else {
      return '0.5s';
    }
  }
}
