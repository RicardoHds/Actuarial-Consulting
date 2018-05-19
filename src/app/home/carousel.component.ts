import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home.component';
import { carousel } from './carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel = [
    new carousel(1, 'EXPERIENCE THAT DELIVERS TRIST', 'Meet our costumers', './assets/images/carousel/carousel-1.jpg', '/about'),
    new carousel(2, 'NIF D-3', 'Know the information than you need', './assets/images/carousel/carousel-2.jpg', '/services')
  ];

  carousels = this.carousel[0];


  constructor() { }

  ngOnInit() {
  }

}
