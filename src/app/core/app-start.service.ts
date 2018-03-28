import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

@Injectable()
export class AppStartService {

  constructor(private apiService: ApiService) {

  }

  load(): Promise<any> {
    return Observable.of(null).toPromise();
  }

}