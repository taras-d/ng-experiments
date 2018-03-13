import { Injectable, APP_INITIALIZER, FactoryProvider } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
 
@Injectable()
export class AppInitializerService {

    static factory: FactoryProvider;

    constructor(private apiService: ApiService) {

    }

    init(): Promise<any> {
        return Observable.of(null).toPromise();
    }

}

AppInitializerService.factory = {
    provide: APP_INITIALIZER,
    useFactory: initializer => () => initializer.init(),
    deps: [AppInitializerService],
    multi: true
};
