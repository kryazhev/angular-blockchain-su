import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RestangularModule } from 'ngx-restangular';
import { RestangularConfigFactory } from 'src/app/services/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { HousingCooperativeComponent } from './components/projects/housing-cooperative/housing-cooperative.component';
import { UssrComponent } from './components/projects/ussr/ussr.component';
import { PensionFundComponent } from './components/projects/pension-fund/pension-fund.component';
import { MunicipalServicesComponent } from './components/projects/municipal-services/municipal-services.component';
import { BankComponent } from './components/projects/bank/bank.component';

import { AlertComponent } from './components/common/alert/alert.component';
import { UnitPComponent } from './components/common/units/unit-p/unit-p.component';
import { UnitUlComponent } from './components/common/units/unit-ul/unit-ul.component';
import { UnitOlComponent } from './components/common/units/unit-ol/unit-ol.component';

import { ParticipantComponent } from './components/management/participant/participant.component';
import { AssetComponent } from './components/management/asset/asset.component';
import { HistorianRecordComponent } from './components/composer/historian-record/historian-record.component';
import { I18nService } from './services/i18n.service';

import { I18nPipe } from './pipes/i18n.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    I18nPipe,
    SafePipe,

    AppComponent,

    HeaderComponent,
    AlertComponent,
    UnitPComponent,
    UnitUlComponent,
    UnitOlComponent,

    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,

    HousingCooperativeComponent,
    UssrComponent,
    PensionFundComponent,
    MunicipalServicesComponent,
    BankComponent,

    ParticipantComponent,
    AssetComponent,

    HistorianRecordComponent,
  ],
  imports: [
    BrowserModule,

    MatToolbarModule,
    MatButtonModule,
    MatInputModule,

    ReactiveFormsModule,
    FormsModule,

    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [I18nService],
  bootstrap: [AppComponent]
})
export class AppModule { }
