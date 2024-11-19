import {AfterViewInit, Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FeaturesPieceComponent} from '../../component/features-piece/features-piece.component';
import {AboutPieceComponent} from '../../component/about-piece/about-piece.component';
import {FactCounterComponent} from '../../component/fact-counter/fact-counter.component';
import {ServicePieceComponent} from '../../component/service-piece/service-piece.component';
import {CategoriesPieceComponent} from '../../component/categories-piece/categories-piece.component';
import {CentralProcessComponent} from '../../component/central-process/central-process.component';
import {BlogPiecesComponent} from '../../component/blog-pieces/blog-pieces.component';
import {BannerComponent} from '../../component/banner/banner.component';
import {TeamsComponent} from '../../component/teams/teams.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true,
  imports: [
    NgForOf,
    FeaturesPieceComponent,
    AboutPieceComponent,
    FactCounterComponent,
    ServicePieceComponent,
    CategoriesPieceComponent,
    CentralProcessComponent,
    BlogPiecesComponent,
    BannerComponent,
    TeamsComponent
  ]
})
export class HomeComponent{
  carouselItems = [
    {
      image: '/assets/img/carousel-2.jpg',
      heading: 'Get 15% off your rental Plan your trip now',
      subheading: 'Treat yourself in USA',
      formData: {
        carOptions: ['VW Golf VII', 'Audi A1 S-Line', 'Toyota Camry', 'BMW 320 ModernLine'],
        placeholder: 'Enter a City or Airport'
      }
    },
    {
      image: '/assets/img/carousel-1.jpg',
      heading: 'Get 15% off your rental! Choose Your Model',
      subheading: 'Treat yourself in USA',
      formData: {
        carOptions: ['VW Golf VII', 'Audi A1 S-Line', 'Toyota Camry', 'BMW 320 ModernLine'],
        placeholder: 'Enter a City or Airport'
      }
    }
  ];

  // ngAfterViewInit(): void {
  //   const carouselElement = document.getElementById('carouselId');
  //   if (carouselElement) {
  //     const carousel = new bootstrap.Carousel(carouselElement, {
  //       interval: 30000, // 30 seconds
  //       ride: 'carousel'
  //     });
  //   }
  // }

}
