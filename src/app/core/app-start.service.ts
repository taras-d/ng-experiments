import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppStartService {
  load(): Promise<any> {
    return of(null).toPromise();
  }
}
