import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ObserverManager } from './observerManager';

describe('ObserverManager', () => {

  it('create ObserverManager', () => {
    const om = new ObserverManager({});
    expect(om instanceof ObserverManager).toBeTruthy();
  });

  it('invoke observer which emits value', done => {
    const om = new ObserverManager({
      obs: {
        create: () => of('data'),
        next: value => expect(value).toBe('data'),
        complete: () => done()
      }
    }, {
      create: (observerName) => {
        expect(observerName).toEqual('obs');
      },
      next: (observerName, value) => {
        expect(observerName).toEqual('obs');
        expect(value).toBe('data');
      }
    });
    om.invoke('obs');
  });

  it('invoke observer which throws error', done => {
    const om = new ObserverManager({
      obs: {
        create: () => throwError('error'),
        error: err => {
          expect(err).toBe('error');
          done();
        }
      }
    }, {
      create: (observerName) => {
        expect(observerName).toEqual('obs');
      },
      error: (observerName, err) => {
        expect(observerName).toEqual('obs');
        expect(err).toBe('error');
      }
    });
    om.invoke('obs');
  });

  it('invoke observer (with parameters) which emits value', done => {
    const om = new ObserverManager({
      obs: {
        create: (p1, p2) => {
          expect(p1).toBe(1);
          expect(p2).toBe(2);
          return of('data');
        },
        next: (value, p1, p2) => {
          expect(value).toBe('data');
          expect(p1).toBe(1);
          expect(p2).toBe(2);
        },
        complete: () => done()
      }
    }, {
      create: (observerName, p1, p2) => {
        expect(observerName).toEqual('obs');
        expect(p1).toBe(1);
        expect(p2).toBe(2);
      },
      next: (observerName, value, p1, p2) => {
        expect(observerName).toBe('obs');
        expect(value).toBe('data');
        expect(p1).toBe(1);
        expect(p2).toBe(2);
      }
    });
    om.invoke('obs', 1, 2);
  });

  it('invoke observer (with parameters) which throws error', done => {
    const om = new ObserverManager({
      obs: {
        create: (p1, p2) => {
          expect(p1).toBe(1);
          expect(p2).toBe(2);
          return throwError('error');
        },
        error: (value, p1, p2) => {
          expect(value).toBe('error');
          expect(p1).toBe(1);
          expect(p2).toBe(2);
          done();
        }
      }
    }, {
      create: (observerName, p1, p2) => {
        expect(observerName).toEqual('obs');
        expect(p1).toBe(1);
        expect(p2).toBe(2);
      },
      error: (observerName, err, p1, p2) => {
        expect(observerName).toBe('obs');
        expect(err).toBe('error');
        expect(p1).toBe(1);
        expect(p2).toBe(2);
      }
    });
    om.invoke('obs', 1, 2);
  });

  it('unsubscribe observers', () => {
    const om = new ObserverManager({
      obs: {
        create: () => of('data').pipe(delay(300))
      }
    });

    om.invoke('obs');
    const sub = om['subs']['obs'];

    expect(sub.closed).toBeFalsy();
    om.unsubAll();
    expect(sub.closed).toBeTruthy();
  });

});
