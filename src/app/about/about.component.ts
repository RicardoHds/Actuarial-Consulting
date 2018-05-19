import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ Globals ]
})
export class AboutComponent implements OnInit {
  title: string = 'About Us';
  banner: string = '../assets/images/company.jpg';
  //header: string = "More abour us";
  
  texts = [
    {
      text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },{
      text2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    },{
      text3: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    }
  ];

  semilinks: Object = {
      header: 'More about us',
      objs: [{
        titles: 'Executive President',
        url: '/actuary'
      },{
        titles: 'Our Hisroty',
        url: '/history'
      },{
        titles: 'Resume',
        url: '/resume'
      },{
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

  constructor(private globals: Globals) { }

  ngOnInit() {
    
    //let keys = Object.keys(this.semilinks);
    //this.keys = Object.keys(this.semilinks);
  }

}
