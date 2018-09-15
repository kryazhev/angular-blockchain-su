import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AssetComponent } from '../components/management/asset/asset.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: HomeComponent},
  { path: 'about-us', component: HomeComponent},
  { path: 'contact-us', component: HomeComponent},

  { path: 'projects/management/participants', component: HomeComponent},
  { path: 'projects/management/assets', component: AssetComponent},
  { path: 'projects/management/transactions', component: HomeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
