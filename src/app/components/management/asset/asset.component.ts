import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../services/data.service';
import { SampleAsset } from '../../../services/su.blockchain';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  providers: [DataService, { provide: 'TypeName', useValue: 'SampleAsset' }, { provide: 'IdName', useValue: 'assetId' }],
})
export class AssetComponent implements OnInit {

  form: FormGroup;

  asset: SampleAsset;
  allAssets: SampleAsset[];
  currentId: number;
  errors: string;

  formErrors = {
    assetId: '',
    owner: '',
    value: ''
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

  constructor(private dataService: DataService<SampleAsset>, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      assetId: ['', []],
      owner: ['', [Validators.required]],
      value: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
    });

    this.loadAll();

    this.onValueChanged(this.form, this.formErrors, this.validationMessages);

    this.form.valueChanges
      .subscribe(
        data => { this.onValueChanged(this.form, this.formErrors, this.validationMessages, data); },
        error => this.errors = <any>error.message);
  }

  loadAll(): void {
    this.resetForm();
    this.dataService.list().subscribe(
      result => {
        this.allAssets = result;
        this.errors = null;
      },
      error => this.errors = <any>error.message);
  }

  save(): void {
    this.asset = this.form.value;
    this.asset['$class'] = 'su.blockchain.SampleAsset';

    this.dataService.save(this.asset).subscribe(
      () => this.loadAll(),
      error => this.errors = <any>error.message);
  }

  delete(): void {
    this.dataService.delete(this.currentId).subscribe(
      () => this.loadAll(),
      error => this.errors = <any>error.message);
  }

  setId(id: any): void {
    this.currentId = id;
  }

  editForm(id: any): void {
    this.dataService.one(id).subscribe(
      result => this.setForm(result),
      error => this.errors = <any>error.message);
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
      assetId: '',
      owner: '',
      value: ''
    };
  }

  onValueChanged(form: FormGroup, formErrors: object, validationMessages: object, data?: any) {
    if (!form) { return; }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
