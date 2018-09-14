import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

import { SampleAsset } from './su.blockchain';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private restangular: Restangular) { }

  public getAll(): Observable<SampleAsset[]> {
    return this.restangular.all('SampleAsset').getList();
  }

  public getAsset(id: any): Observable<SampleAsset> {
    return this.restangular.one('SampleAsset/' + id).get();
  }

  public save(itemToAdd: any): Observable<SampleAsset> {
    return this.restangular.all('SampleAsset').save(itemToAdd);
  }

  public deleteAsset(id: any): Observable<SampleAsset> {
    return this.restangular.all('SampleAsset').delete(id);
  }
}

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
}
