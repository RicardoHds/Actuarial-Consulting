import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './sitemap/about.component';
import { ActuaryComponent } from './sitemap/actuary.component';
import { HisotryComponent } from './sitemap/history.component';


const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' }  },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
    { path: 'actuary', component: ActuaryComponent, data: { title: 'Actuary' } },
    { path: 'history', component: HisotryComponent, data: { title: 'History' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  }

