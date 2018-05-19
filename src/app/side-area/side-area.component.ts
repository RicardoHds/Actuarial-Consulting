import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-side-area',
  templateUrl: './side-area.component.html',
  styleUrls: ['./side-area.component.css'],
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
  },{
    title: 'Government Institutions',
    image: '../assets/icons/home-8.png',
    url: '/government'
  }];

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
