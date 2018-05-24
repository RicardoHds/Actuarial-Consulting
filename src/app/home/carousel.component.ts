import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home.component';
import { carousel } from './carousel';

@Component({
  selector: 'app-carousel',
  template: `
        <div class="col-md-8 padding-sm20">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li *ngFor="let item of carousel;
                        let i = index; let first = first"
                        data-target="#carousel-example-generic"
                        [attr.data-slide-to]="i"
                        [class.active]="first">
                </li>
            </ol>
            <div class="carousel-inner" >
                <div *ngFor="let items of carousel; let first = first" class="item" [class.active]="first">
                    <a>
                        <img class="img-responsive" src="{{ items.image }}">
                        <div class="carousel-caption">
                            <h4>{{ items.title }}</h4>
                            <p>{{ items.description }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    `
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
