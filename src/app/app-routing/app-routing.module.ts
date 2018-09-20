import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

import { BankComponent } from '../components/projects/bank/bank.component';

import { ParticipantComponent } from '../components/management/participant/participant.component';
import { AssetComponent } from '../components/management/asset/asset.component';
import { HistorianRecordComponent } from '../components/composer/historian-record/historian-record.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},

  { path: 'projects/bank', component: BankComponent},

  { path: 'projects/management/participants', component: ParticipantComponent},
  { path: 'projects/management/assets', component: AssetComponent},
  { path: 'projects/management/transactions', component: HomeComponent},

  { path: 'system/historian-records', component: HistorianRecordComponent},
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
