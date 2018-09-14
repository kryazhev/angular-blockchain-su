import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  assetId = new FormControl('', Validators.required);
  owner = new FormControl('', Validators.required);
  value = new FormControl('', Validators.required);

  constructor(public dataService: DataService, fb: FormBuilder) {
    this.myForm = fb.group({
      assetId: this.assetId,
      owner: this.owner,
      value: this.value
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.dataService.getAll().subscribe(
      result => {
        this.errorMessage = null;
        this.allAssets = result;
      }, this.errorHandler);
  }

  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): void {
    this.asset = {
      $class: 'su.blockchain.SampleAsset',
      'assetId': this.assetId.value,
      'owner': this.owner.value,
      'value': this.value.value
    };

    this.myForm.setValue({
      'assetId': null,
      'owner': null,
      'value': null
    });

    this.dataService.addAsset(this.asset).subscribe(
      () => {
        this.errorMessage = null;
        this.myForm.setValue({
          'assetId': null,
          'owner': null,
          'value': null
        });
        this.loadAll();
      }, this.errorHandler);
  }

  updateAsset(form: any): void {
    this.asset = {
      $class: 'su.blockchain.SampleAsset',
      'owner': this.owner.value,
      'value': this.value.value
    };

    this.dataService.updateAsset(form.get('assetId').value, this.asset).subscribe(
      () => {
        this.errorMessage = null;
        this.loadAll();
      }, this.errorHandler);
  }


  deleteAsset(): void {
    this.dataService.deleteAsset(this.currentId).subscribe(
      () => {
        this.errorMessage = null;
        this.loadAll();
      }, this.errorHandler);
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): void {
    this.dataService.getAsset(id).subscribe(
      result => {
        this.errorMessage = null;
        const formObject = {
          'assetId': null,
          'owner': null,
          'value': null
        };

        if (result.assetId) {
          formObject.assetId = result.assetId;
        } else {
          formObject.assetId = null;
        }

        if (result.owner) {
          formObject.owner = result.owner;
        } else {
          formObject.owner = null;
        }

        if (result.value) {
          formObject.value = result.value;
        } else {
          formObject.value = null;
        }

        this.myForm.setValue(formObject);
      }, this.errorHandler);
  }

  resetForm(): void {
    this.myForm.setValue({
      'assetId': null,
      'owner': null,
      'value': null
    });
  }

  errorHandler(error?: any) {
    if (error === 'Server error') {
      this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
    } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
    } else {
      this.errorMessage = error;
    }
  }

}
