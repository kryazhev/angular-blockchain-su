import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { BaseComponent } from '../../base.component';
import { HistorianRecord } from '../../../services/org.hyperledger.composer.system';
import { FormBuilder } from '@angular/forms';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-historian-record',
  templateUrl: './historian-record.component.html',
  styleUrls: ['./historian-record.component.scss'],
  providers: [DataService],
})
export class HistorianRecordComponent extends BaseComponent<HistorianRecord> {

  formErrors = {};

  validationMessages = {};

  constructor(private restangular: Restangular, builder: FormBuilder) {
    super(new DataService<HistorianRecord>('system/historian', 'transactionId', restangular), builder);
  }

  getClassName(): string {
    return 'org.hyperledger.composer.system.HistorianRecord';
  }

  getFormErrors() {
    return this.formErrors;
  }

  getValidationMessages() {
    return this.validationMessages;
  }

  buildForm() {
    return this.builder.group({
      transactionId: [{ value: '', disabled: true }, []],
      transactionType: [{ value: '', disabled: true }, []],
      transactionInvoked: [{ value: '', disabled: true }, []],
      participantInvoking: [{ value: '', disabled: true }, []],
      identityUsed: [{ value: '', disabled: true }, []],
      eventsEmitted: [{ value: '', disabled: true }, []],
      transactionTimestamp: [{ value: '', disabled: true }, []],
    });
  }

  setForm(item: HistorianRecord): void {
    this.form.setValue({
      transactionId: item.transactionId || '',
      transactionType: item.transactionType || '',
      transactionInvoked: item.transactionInvoked || '',
      participantInvoking: item.participantInvoking || '',
      identityUsed: item.identityUsed || '',
      eventsEmitted: item.eventsEmitted || '',
      transactionTimestamp: item.transactionTimestamp || ''
    });
  }

  resetForm(): void {
    this.form.setValue({
      transactionId: null,
      transactionType: null,
      transactionInvoked: null,
      participantInvoking: null,
      identityUsed: null,
      eventsEmitted: null,
      transactionTimestamp: null,
    });
    this.formErrors = {};
  }

}
