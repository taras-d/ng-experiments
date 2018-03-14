import { Injectable, APP_INITIALIZER, FactoryProvider } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
 
@Injectable()
export class AppStartService {

    static factory: FactoryProvider;

    constructor(private apiService: ApiService) {

    }

    load(): Promise<any> {
        return Observable.of(null).toPromise();
    }

}

AppStartService.factory = {
    provide: APP_INITIALIZER,
    useFactory: appStart => () => appStart.load(),
    deps: [AppStartService],
    multi: true
};
