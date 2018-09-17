import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

import { SampleAsset } from './su.blockchain';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private restangular: Restangular) { }

  list(): Observable<SampleAsset[]> {
    console.log('list ');
    return this.restangular.all('SampleAsset').getList();
  }

  one(id: any): Observable<SampleAsset> {
    console.log('One ' + id);
    return this.restangular.one('SampleAsset', id).get();
  }

  create(item: any): Observable<SampleAsset> {
    item.assetId = uuid();
    console.log('Create ' + JSON.stringify(item));
    return this.restangular.all('SampleAsset').post(item);
  }

  update(item: any): Observable<SampleAsset> {
    const id = item.assetId;
    item.assetId = undefined;
    console.log('Update ' + JSON.stringify(item));
    return this.restangular.one('SampleAsset/' + id).customPUT(item);
  }

  delete(id: any): Observable<SampleAsset> {
    console.log('Delete ' + id);
    return this.restangular.one('SampleAsset', id).remove();
  }
}

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
}

function replacer(key, value) {
  if (key === 'id') {
    return undefined;
  } else if (key === 'assetId') {
    return undefined;
  } else {
    return value;
  }
}
