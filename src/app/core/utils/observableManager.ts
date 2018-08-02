import { Observable, Subscription } from 'rxjs';

const exec = (fn, ...args) => fn && fn(...args);

export class ObservableManager {

  private subs: Subscription[] = [];

  constructor(
    private observers: {
      [observerName: string]: {
        create: (...createArgs: any[]) => Observable<any>;
        next?: (value: any, ...createArgs: any[]) => void;
        error?: (error: any, ...createArgs: any[]) => void;
        complete?: (...createArgs: any[]) => void;
      }
    },
    private options?: {
      next?: (observerName: string, value: any, ...createArgs: any[]) => void;
      error?: (observerName: string, error: any, ...createArgs: any[]) => void;
      complete?: (observerName: string, ...createArgs: any[]) => void;
    }
  ) {

  }

  invoke(observerName: string, ...createArgs: any[]): void {
    const observer = this.observers[observerName];

    if (!observer) {
      console.warn(`Observer with name "${observerName}" not found`);
      return;
    }

    this.unsub(observerName);

    const options = this.options || {};

    this.subs[observerName] = observer.create(...createArgs).subscribe(
      value => {
        exec(observer.next, value, ...createArgs);
        exec(options.next, observerName, value, ...createArgs);
      },
      error => {
        exec(observer.error, error, ...createArgs);
        exec(options.error, observerName, error, ...createArgs);
      },
      () => {
        exec(observer.complete, ...createArgs);
        exec(options.complete, observerName, ...createArgs);
      }
    );
  }

  unsub(observerName: string): void {
    if (observerName in this.subs) {
      this.subs[observerName].unsubscribe();
    }
  }

  unsubAll(): void {
    Object.keys(this.observers).forEach(name => this.unsub(name));
  }

}
