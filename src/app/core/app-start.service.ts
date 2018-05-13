import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AppStartService {

  constructor(private apiService: ApiService) {

  }

  load(): Promise<any> {
    return of(null).toPromise();
  }

}
