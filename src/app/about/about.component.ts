import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  template: `
        <div class="container padding-without">
            <div class="col-md-9">
            <div class="col-md-12 padding-without">
                <div class="box-gray-light-img">
                    <blockquote class="blockquote-reverse margin-without">
                        <p class="title-high">{{ title }}</p>
                    </blockquote>
                </div>
            </div>
                <div class="col-md-12 padding-without padding-top-10">
                <img class="img-responsive" style="width: 100%; height: 250px;" [src]="banner">
                </div>
            <div class="col-md-12 padding-without">
                <div class="padding-top-10">
                    <div class="box-gray-light-img text-center">
                        <p>
                        <em>
                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                            <ng-container *ngFor="let text of texts">{{ text.text1 }}</ng-container>
                        </em>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 padding-without">
                <div class="padding-top-10">
                    <div class="box-gray-light-img text-justify">
                        <p><ng-container *ngFor="let text of texts">{{ text.text2 }}</ng-container></p>
                        <p><ng-container *ngFor="let text of texts">{{ text.text3 }}</ng-container></p>
                    </div>
                </div>
            </div>
                <div class="col-md-12 padding-without">
                <div class="padding-top-10">
                    <div class="col-md-12 box-gray-light-img">
                        <div class="col-md-12 box-blue-title-up font-16">
                        <p class="margin-without text-center">
                            <ng-container >{{ semilinks.header }}</ng-container>
                        </p>
                        </div>
                        <div class="col-md-12 padding-without box-blue-up text-center">
                        <a class="list-group-item" *ngFor="let titles of semilinks.objs" [href]="titles.url">{{ titles.titles }}</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- Side area -->
            <div class="col-md-3 text-center padding-sm20"><app-side-area></app-side-area></div>
        </div>`,
  providers: [ Globals ]
})
export class AboutComponent implements OnInit {
  title: string = 'About Us';
  banner: string = '../assets/images/company.jpg';
  // header: string = "More abour us";

  texts = [
    {
      text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    }, {
      text2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    }, {
      text3: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    }
  ];

  semilinks: Object = {
      header: 'More about us',
      objs: [{
        titles: 'Executive President',
        url: '/actuary'
      }, {
        titles: 'Our Hisroty',
        url: '/history'
      }, {
        titles: 'Resume',
        url: '/resume'
      }, {
        titles: 'Our Books',
        url: '/books'
      }]
  };



  sobject: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3, 4, 5]
    }
  };

  constructor(private globals: Globals) {  }

  ngOnInit() {

  }

}
