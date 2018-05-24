import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Title } from '@angular/platform-browser';


const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' }  },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( 'dedede' );
  }
 }
