import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../services/data.service';
import { ManagementProposal} from '../../../services/su.blockchain';
import { BaseComponent } from '../../base.component';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  providers: [DataService, { provide: 'TypeName', useValue: 'ManagementProposal' }, { provide: 'IdName', useValue: 'id' }],
})
export class ProposalComponent extends BaseComponent<ManagementProposal> {

  formErrors = {
    id: null,
    creator: null,
    header: null,
    body: null
  };

  validationMessages = {
    creator: {
      required: 'Creator is required.',
    },
    header: {
      required: 'Header is required.',
      min: 'Header must be at least 1.',
      max: 'Header cannot be more than 1000.'
    },
    body: {
      required: 'Body is required.',
      min: 'Body must be at least 1.',
      max: 'Body cannot be more than 10000.'
    },
  };

  constructor(dataService: DataService<ManagementProposal>, builder: FormBuilder, private restangular: Restangular) {
    super(dataService, builder);
  }

  getClassName(): string {
    return 'su.ManagementProposal';
  }

  getFormErrors() {
    return this.formErrors;
  }

  getValidationMessages() {
    return this.validationMessages;
  }

  buildForm() {
    return this.builder.group({
      id: ['', []],
      creator: ['', [Validators.required]],
      header: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      body: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
    });
  }

  setForm(item: ManagementProposal): void {
    this.form.setValue({
      id: item.id,
      creator: item.creator,
      header: item.header,
      body: item.body,
    });
  }

  resetForm(): void {
    this.form.setValue({
      id: null,
      creator: null,
      header: null,
      body: null
    });

    this.formErrors = {
      id: null,
      creator: null,
      header: null,
      body: null
    };
  }

  protected beforeSave(item: ManagementProposal) {
    item.country = ' ';
    item.city = ' ';
    item.district = ' ';

    item.approved = 0;
    item.rejected = 0;
    item.abstained = 0;
  }

  approve(id: string) {
    this.vote(id, 'APPROVE');
  }

  reject(id: string) {
    this.vote(id, 'REJECT');
  }

  abstain(id: string) {
    this.vote(id, 'ABSTAIN');
  }

  private vote(id: string, type: string) {
    const tx = {
      $class: 'su.ManagementTransaction',
      creator: 'resource:su.ManagementParticipant#1',
      asset: 'resource:su.ManagementProposal#' + id,
      type: type
    };

    this.restangular.all('ManagementTransaction').post(tx).subscribe(
      () => this.loadAll(),
      error => this.errors = <any>error.message);
  }

}
