import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
