import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
      CarouselComponent
  ],
  providers: []
})
export class HomeModule { }
