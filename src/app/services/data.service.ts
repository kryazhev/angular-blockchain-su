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
    return this.restangular.all('Asset');
  }

  public getAsset(id: any): Observable<SampleAsset> {
    return this.restangular.one('Asset/' + id);
  }

  public addAsset(itemToAdd: any): Observable<SampleAsset> {
    return this.restangular.all('Asset').save(itemToAdd);
  }

  public updateAsset(id: any, itemToUpdate: any): Observable<SampleAsset> {
    return this.restangular.all('Asset').save(itemToUpdate);
  }

  public deleteAsset(id: any): Observable<SampleAsset> {
    return this.restangular.all('Asset').delete(id);
  }
}

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
}
