import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

import { HousingCooperativeComponent } from '../components/projects/housing-cooperative/housing-cooperative.component';
import { UssrComponent } from '../components/projects/ussr/ussr.component';
import { PensionFundComponent } from '../components/projects/pension-fund/pension-fund.component';
import { MunicipalServicesComponent } from '../components/projects/municipal-services/municipal-services.component';
import { BankComponent } from '../components/projects/bank/bank.component';

import { ParticipantComponent } from '../components/management/participant/participant.component';
import { ProposalComponent } from '../components/management/proposal/proposal.component';
import { HistorianRecordComponent } from '../components/composer/historian-record/historian-record.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},

  { path: 'projects/housing-cooperative', component: HousingCooperativeComponent},
  { path: 'projects/ussr-2.0', component: UssrComponent},
  { path: 'projects/pension-fund', component: PensionFundComponent},
  { path: 'projects/municipal-services', component: MunicipalServicesComponent},
  { path: 'projects/bank', component: BankComponent},

  { path: 'projects/management/participants', component: ParticipantComponent},
  { path: 'projects/management/assets', component: ProposalComponent},
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
