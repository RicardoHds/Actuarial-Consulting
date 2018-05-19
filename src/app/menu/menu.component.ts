import { Component, OnInit } from '@angular/core';
import { parentMenu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
