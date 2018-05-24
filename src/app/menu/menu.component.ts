import { Component, OnInit } from '@angular/core';
import { parentMenu } from './menu';

@Component({
  selector: 'app-menu',
  template: `
    <!-- Menu -->
    <nav class="navbar navbar-default nav-mainheader">
        <div class="container padding-without padding-sides-sm15">
            <div class="navbar-header">
                <a class="navbar-brand" [routerLink]="['/']">
                <img src="../assets/images/rahs-logo.png" alt="" title="" class="img-responsive">
                </a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse navbar-right nav-mainbar padding-left-without padding-left-sm15" id="myNavbar">
                <ul class="nav navbar-nav">
                <li class="dropdown" *ngFor="let page of parentMenu">
                    <a class="dropdown-toggle" aria-expanded="false" data-toggle="dropdown"
                        data-hover="dropdown" role="button" aria-haspopup="false"
                        *ngIf="!page.child" then routerLink='{{ page.url }}'>{{ page.title }}
                    <span class="glyphicon glyphicon-triangle-bottom font-10" *ngIf="page.child === true"></span>
                    </a>
                    <a class="dropdown-toggle" aria-expanded="false" data-toggle="dropdown"
                        data-hover="dropdown" role="button" aria-haspopup="false"
                        *ngIf="page.child">{{ page.title }}
                    <span class="glyphicon glyphicon-triangle-bottom font-10" *ngIf="page.child === true"></span>
                    </a>
                    <ul class="dropdown-menu" *ngIf="page.child === true" >
                        <li *ngFor="let pageChild of page.titleChild"><a routerLink='{{ pageChild.url }}'>{{ pageChild.title }}</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>`
})
export class MenuComponent implements OnInit {
  parentMenu = [
    new parentMenu(1, 'Company', '', true,
      [
        {title: 'About Us', url: '/about'},
        {title: 'Actuary', url: '/actuary'},
        {title: 'History', url: '/history'},
        {title: 'Alliances', url: '/alliances'},
        {title: 'Books', url: '/books'},
        {title: 'Added Value', url: '/added_value'}
      ]),
    new parentMenu(2, 'Private Initiative', '', true,
      [
        {title: 'Sevices', url: '/services'},
        {title: 'Labor Liabilities', url: '/liabilities'},
        {title: 'Pension Plans', url: '/plans'},
        {title: 'Liquidity', url: '/liquidity'}
      ]),
    new parentMenu(3, 'Government Institution', '', true,
      [
        {title: 'Government Institution', url: '/government'},
        {title: 'General Law', url: '/law'}
      ]),
    new parentMenu(4, 'Investment Counsel', '/investment', false, []),
    new parentMenu(5, 'Newspaper', '', true,
      [
        {title: 'Pensions', url: '/pensions'},
        {title: 'Inversions', url: '/inversions'}
      ]),
    new parentMenu(6, 'Contact', '/contact', false, [])
  ];

  oneMenu = this.parentMenu[0];


  constructor() { }

  ngOnInit() {
  }

}
