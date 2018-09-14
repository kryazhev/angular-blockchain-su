import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AssetComponent } from '../components/management/asset/asset.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'projects', component: AppComponent},
  { path: 'about-us', component: AppComponent},
  { path: 'contact-us', component: AppComponent},

  { path: 'projects/management/participants', component: AppComponent},
  { path: 'projects/management/assets', component: AssetComponent},
  { path: 'projects/management/transactions', component: AppComponent},
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
