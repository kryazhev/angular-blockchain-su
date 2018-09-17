import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../services/data.service';
import { SampleAsset } from '../../../services/su.blockchain';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  providers: [DataService, { provide: 'TypeName', useValue: 'SampleAsset' }, { provide: 'IdName', useValue: 'assetId' }],
})
export class AssetComponent extends BaseComponent<SampleAsset> {

  formErrors = {
    assetId: null,
    owner: null,
    value: null
  };

  validationMessages = {
    owner: {
      required: 'Owner is required.',
    },
    value: {
      required: 'Value is required.',
      min: 'Value must be at least 1.',
      max: 'Value cannot be more than 1000.'
    },
  };

  constructor(dataService: DataService<SampleAsset>, builder: FormBuilder) {
    super(dataService, builder);
  }

  getClassName(): string {
    return 'su.blockchain.SampleAsset';
  }

  getFormErrors() {
    return this.formErrors;
  }

  getValidationMessages() {
    return this.validationMessages;
  }

  buildForm() {
    return this.builder.group({
      assetId: ['', []],
      owner: ['', [Validators.required]],
      value: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
    });
  }

  setForm(item: SampleAsset): void {
    this.form.setValue({
      assetId: item.assetId,
      owner: item.owner,
      value: item.value
    });
  }

  resetForm(): void {
    this.form.setValue({
      assetId: null,
      owner: null,
      value: null
    });

    this.formErrors = {
      assetId: null,
      owner: null,
      value: null
    };
  }

}
