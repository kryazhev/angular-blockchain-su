import { Injectable, Inject } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DataService<Type> {

  constructor(@Inject('TypeName') private typeName: string, @Inject('IdName') private idName: string, private restangular: Restangular) { }

  list(): Observable<Type[]> {
    console.log('list ');
    return this.restangular.all(this.typeName).getList();
  }

  one(id: any): Observable<Type> {
    console.log('One ' + id);
    return this.restangular.one(this.typeName, id).get();
  }

  save(item: any): Observable<Type> {
    if (item[this.idName]) {
      return this.update(item);
    } else {
      return this.create(item);
    }
  }

  create(item: any): Observable<Type> {
    item[this.idName] = uuid();
    console.log('Create ' + JSON.stringify(item));
    return this.restangular.all(this.typeName).post(item);
  }

  update(item: any): Observable<Type> {
    const id = item[this.idName];
    item[this.idName] = undefined;
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
  if (key === this.idName) {
    return undefined;
  } else {
    return value;
  }
}
