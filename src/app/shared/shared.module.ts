import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContacComponent } from './pages/contac/contac.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
  AboutPageComponent,
  HomePageComponent,
  SidebarComponent,
  ContacComponent,
  SearchBoxComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
 AboutPageComponent,
 HomePageComponent,
 SidebarComponent,
 ContacComponent,
 SearchBoxComponent,
  ]
})
export class SharedModule { }
