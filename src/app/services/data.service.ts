import { Injectable, Inject } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DataService<Type> {

  constructor(@Inject('typeName') private typeName: string, private restangular: Restangular) { }

  list(): Observable<Type[]> {
    console.log('list ');
    return this.restangular.all(this.typeName).getList();
  }

  one(id: any): Observable<Type> {
    console.log('One ' + id);
    return this.restangular.one(this.typeName, id).get();
  }

  create(item: any): Observable<Type> {
    item.assetId = uuid();
    console.log('Create ' + JSON.stringify(item));
    return this.restangular.all(this.typeName).post(item);
  }

  update(item: any): Observable<Type> {
    const id = item.assetId;
    item.assetId = undefined;
    console.log('Update ' + JSON.stringify(item));
    return this.restangular.one(this.typeName + '/' + id).customPUT(item);
  }

  delete(id: any): Observable<Type> {
    console.log('Delete ' + id);
    return this.restangular.one(this.typeName, id).remove();
  }
}

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
}

function replacer(key, value) {
  if (key === 'id' || key === 'assetId' || key === 'participantId') {
    return undefined;
  } else {
    return value;
  }
}
