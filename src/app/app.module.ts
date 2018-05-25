import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
// import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SitemapModule } from './sitemap/sitemap.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import * as globals from './globals';
import { SideAreaComponent } from './side-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SideAreaComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SitemapModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
