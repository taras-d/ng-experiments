import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

export class ObservableManager {

  private subs: Subscription[] = [];

  constructor(
    private config: {
      [key: string]: {
        create: (...args: any[]) => Observable<any>;
        next?: (data: any, ...args: any[]) => void;
        error?: (error: any, ...args: any[]) => void;
        complete?: (args: any[]) => void; 
      }
    },
    private options?: {
      next?: (name: string, data: any, ...args: any[]) => void;
      error?: (name: string, error: any, ...args: any[]) => void;
      complete?: (name: string, ...args: any[]) => void;
    }
  ) {

  }

  invoke(name: string, ...args: any[]): void {
    const config = this.config[name];

    if (!config) {
      console.warn(`Observer with name "${name}" not found`);
      return;
    }

    this.unsub(name);

    const options = this.options || {};

    this.subs[name] = config.create(...args).subscribe(
      data => {
        this.callFn(config.next, data, ...args);
        this.callFn(options.next, name, data, ...args);
      },
      error => {
        this.callFn(config.error, error, ...args);
        this.callFn(options.error, name, error, ...args);
      },
      () => {
        this.callFn(config.complete, ...args);
        this.callFn(options.complete, name, ...args);
      }
    );
  }

  unsub(name: string): void {
    if (name in this.subs) {
      this.subs[name].unsubscribe();
    }
  }

  unsubAll(): void {
    Object.keys(this.config).forEach(name => this.unsub(name));
  }

  private callFn(fn: Function, ...args: any[]): any {
    if (typeof fn === 'function') {
      return fn(...args);
    }
  }

}
