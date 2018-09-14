import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../services/data.service';
import { Asset } from '../../../services/su.blockchain';

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

  loadAll(): Promise<any> {
    const tempList = [];
    return this.dataService.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(asset => {
          tempList.push(asset);
        });
        this.allAssets = tempList;
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });
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

  addAsset(form: any): Promise<any> {
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

    return this.dataService.addAsset(this.asset)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.myForm.setValue({
          'assetId': null,
          'owner': null,
          'value': null
        });
        this.loadAll();
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else {
          this.errorMessage = error;
        }
      });
  }

  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'su.blockchain.SampleAsset',
      'owner': this.owner.value,
      'value': this.value.value
    };

    return this.dataService.updateAsset(form.get('assetId').value, this.asset)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.loadAll();
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });
  }


  deleteAsset(): Promise<any> {
    return this.dataService.deleteAsset(this.currentId)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.loadAll();
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {
    return this.dataService.getAsset(id)
      .toPromise()
      .then((result) => {
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

      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });
  }

  resetForm(): void {
    this.myForm.setValue({
      'assetId': null,
      'owner': null,
      'value': null
    });
  }

}
