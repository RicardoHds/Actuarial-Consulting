import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
// import { SideAreaComponent } from './side-area.component';
import { AppRoutingModule } from '../app-routing.module';
import { ActuaryComponent } from './actuary.component';
import { HisotryComponent } from './history.component';

@NgModule({
  imports: [
        CommonModule,
        AppRoutingModule
    ],
  declarations: [
        AboutComponent,
        ActuaryComponent,
        HisotryComponent
    ],
  exports: [
],
})
export class SitemapModule { }
