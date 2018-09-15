import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

import { SampleAsset } from './su.blockchain';

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
    console.log('Create ' + JSON.stringify(item));
    return this.restangular.all('SampleAsset').post(item);
  }

  update(item: any): Observable<SampleAsset> {
    console.log('Update ' + JSON.stringify(item));
    return this.restangular.all('SampleAsset').post(item);
  }

  delete(id: any): Observable<SampleAsset> {
    console.log('Delete ' + id);
    return this.restangular.one('SampleAsset', id).remove();
  }
}

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
}
