import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable } from 'rxjs';
import { appStore, RootState } from './store';

@Injectable({
  providedIn: 'root'
})
export class ReduxStoreService {
  dispatch(action: Parameters<typeof appStore.dispatch>[0]): void {
    appStore.dispatch(action);
  }

  getState(): RootState {
    return appStore.getState();
  }

  select<T>(selector: (state: RootState) => T): Observable<T> {
    return new Observable<T>((subscriber) => {
      subscriber.next(selector(appStore.getState()));

      const unsubscribe = appStore.subscribe(() => {
        subscriber.next(selector(appStore.getState()));
      });

      return unsubscribe;
    }).pipe(distinctUntilChanged());
  }
}
