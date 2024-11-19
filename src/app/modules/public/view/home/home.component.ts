import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import { NgForOf } from '@angular/common';
import {TeamsComponent} from '../../component/teams/teams.component';
import {BannerComponent} from '../../component/banner/banner.component';
import {BlogPiecesComponent} from '../../component/blog-pieces/blog-pieces.component';
import {CentralProcessComponent} from '../../component/central-process/central-process.component';
import {CategoriesPieceComponent} from '../../component/categories-piece/categories-piece.component';
import {ServicePieceComponent} from '../../component/service-piece/service-piece.component';
import {FactCounterComponent} from '../../component/fact-counter/fact-counter.component';
import {AboutPieceComponent} from '../../component/about-piece/about-piece.component';
import {FeaturesPieceComponent} from '../../component/features-piece/features-piece.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [NgForOf, TeamsComponent, BannerComponent, BlogPiecesComponent, CentralProcessComponent, CategoriesPieceComponent, ServicePieceComponent, FactCounterComponent, AboutPieceComponent, FeaturesPieceComponent]
})
//
export class HomeComponent implements OnInit, OnDestroy{
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

  activeIndex = 0;  // To track the active slide
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
    }, 30000); // Slide changes every 30 seconds
  }

  goToSlide(index: number): void {
    if (index < 0) {
      this.activeIndex = this.carouselItems.length - 1;
    } else if (index >= this.carouselItems.length) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = index;
    }
  }
}
