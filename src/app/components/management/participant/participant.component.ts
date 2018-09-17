import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { BaseComponent } from '../../base.component';
import { SampleParticipant } from '../../../services/su.blockchain';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
  providers: [DataService, { provide: 'TypeName', useValue: 'SampleParticipant' }, { provide: 'IdName', useValue: 'participantId' }],
})
export class ParticipantComponent extends BaseComponent<SampleParticipant> {

  formErrors = {
    participantId: null,
    firstName: null,
    lastName: null
  };

  validationMessages = {
    firstName: {
      required: 'First name is required.',
      minlength: 'First name must be at least 1.',
      maxlength: 'First name cannot be more than 100.'
    },
    lastName: {
      required: 'Last name is required.',
      minlength: 'Last name must be at least 1.',
      maxlength: 'Last name cannot be more than 100.'
    },
  };

  constructor(dataService: DataService<SampleParticipant>, builder: FormBuilder) {
    super(dataService, builder);
  }

  getClassName(): string {
    return 'su.blockchain.SampleParticipant';
  }

  getFormErrors() {
    return this.formErrors;
  }

  getValidationMessages() {
    return this.validationMessages;
  }

  buildForm() {
    return this.builder.group({
      participantId: ['', []],
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    });
  }

  setForm(item: SampleParticipant): void {
    this.form.setValue({
      participantId: item.participantId,
      firstName: item.firstName,
      lastName: item.lastName
    });
  }

  resetForm(): void {
    this.form.setValue({
      participantId: null,
      firstName: null,
      lastName: null
    });

    this.formErrors = {
      participantId: null,
      firstName: null,
      lastName: null
    };
  }

}
