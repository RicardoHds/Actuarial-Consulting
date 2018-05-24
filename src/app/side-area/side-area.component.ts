import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-side-area',
  template: `
    <div class="box-gray-light">
        <p class="title-high">{{ title }}</p>
        <hr class="hr-default">
        <p><i class="fa fa-phone"></i><a class="ico-color" href="tel:{{ globals.phone }}"> {{ globals.phone }}</a></p>
        <p><i class="fa fa-envelope"></i><a class="mailto" href="mailto:{{ globals.email }}"> {{ globals.email }}</a></p>
        </div>
        <div class="padding-top-10">
        <div class="col-md-12 col-xs-12 box-form">
            <p class="title-high">{{ subtitle }}</p>
            <hr class="hr-default">
            <p class="col-md-12">{{ subdescription }}</p>
            <div class="col-md-12 col-xs-12">
                <div class="col-md-6 col-xs-6 sub-mini" *ngFor="let item of options">
                <a [href]="item.url">
                    <div class="col-md-12 mini-box-blue-border mini-box-cotiza">
                        <img [src]="item.image">
                        <p class="text-minibox">{{ item.title }}</p>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
    `,
  styleUrls: [],
  providers: [ Globals ]
})
export class SideAreaComponent implements OnInit {
  title: string = 'Customer Service';
  subtitle: string = 'Get a Quote';
  subdescription: string = 'Select the type of quote that you need';
  options = [{
    title: 'Private Corporations',
    image: '../assets/icons/home-7.png',
    url: '/investment'
    }, {
    title: 'Government Institutions',
    image: '../assets/icons/home-8.png',
    url: '/government'
  }];

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
