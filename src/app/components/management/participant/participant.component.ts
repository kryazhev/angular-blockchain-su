import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { BaseComponent } from '../../base.component';
import { ManagementParticipant } from '../../../services/su.blockchain';
import { FormBuilder, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
  providers: [DataService],
})
export class ParticipantComponent extends BaseComponent<ManagementParticipant> {

  formErrors = {
    id: null,
    name: null,
    email: null
  };

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 1.',
      maxlength: 'Name cannot be more than 100.'
    },
    email: {
      required: 'Email is required.',
      minlength: 'Email must be at least 1.',
      maxlength: 'Email cannot be more than 100.'
    },
  };

  constructor(private restangular: Restangular, builder: FormBuilder) {
    super(new DataService<ManagementParticipant>('ManagementParticipant', 'id', restangular), builder);
  }

  getClassName(): string {
    return 'su.ManagementParticipant';
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
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    });
  }

  setForm(item: ManagementParticipant): void {
    this.form.setValue({
      id: item.id,
      name: item.name,
      email: item.email
    });
  }

  resetForm(): void {
    this.form.setValue({
      id: null,
      name: null,
      email: null
    });

    this.formErrors = {
      id: null,
      name: null,
      email: null
    };
  }

}
