import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  providers: [ Globals ]
})
export class FooterComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
