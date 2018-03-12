import { Injectable, APP_INITIALIZER, FactoryProvider } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
 
@Injectable()
export class AppInitializer {

    static factory: FactoryProvider;

    constructor(private apiService: ApiService) {

    }

    init(): Promise<any> {
        return Observable.of(null).toPromise();
    }

}

AppInitializer.factory = {
    provide: APP_INITIALIZER,
    useFactory: initializer => () => initializer.init(),
    deps: [AppInitializer],
    multi: true
};
