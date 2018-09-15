import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../../../services/data.service';
import { SampleAsset } from '../../../services/su.blockchain';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  myForm: FormGroup;

  private asset;
  allAssets: SampleAsset[];
  currentId: number;
  errorMessage: string;

  constructor(private dataService: DataService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      assetId: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });

    this.loadAll();
  }

  loadAll(): void {
    this.dataService.list().subscribe(
      result => {
        this.errorMessage = null;
        this.allAssets = result;
      }, this.errorHandler);
  }

  saveAsset(): void {
    this.asset = this.myForm.value;
    this.asset.$class = 'su.blockchain.SampleAsset';

    if (!this.asset.id) {
      this.dataService.create(this.asset).subscribe(
        () => {
          this.errorMessage = null;
          this.resetForm();
          this.loadAll();
        }, this.errorHandler);
    } else {
      this.dataService.update(this.asset).subscribe(
        () => {
          this.errorMessage = null;
          this.resetForm();
          this.loadAll();
        }, this.errorHandler);
    }
  }

  deleteAsset(): void {
    this.dataService.delete(this.currentId).subscribe(
      () => {
        this.errorMessage = null;
        this.loadAll();
      }, this.errorHandler);
  }

  setId(id: any): void {
    this.currentId = id;
  }

  editForm(id: any): void {
    this.dataService.one(id).subscribe(
      result => {
        this.errorMessage = null;
        this.myForm.setValue({
          assetId: result.assetId,
          owner: result.owner,
          value: result.value
        });
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
