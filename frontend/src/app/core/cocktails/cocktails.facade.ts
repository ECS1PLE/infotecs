import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { getApiErrorMessage } from '../api/api-error.util';
import {
  Cocktail,
  CocktailPayload,
  CocktailSummary
} from '../models/cocktail.model';
import {
  clearCurrent,
  currentStarted,
  currentSucceeded,
  deleteSucceeded,
  listStarted,
  listSucceeded,
  mutationStarted,
  mutationSucceeded,
  requestFailed,
  resetMutation
} from '../store/cocktails.slice';
import { ReduxStoreService } from '../store/redux-store.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailsFacade {
  private readonly http = inject(HttpClient);
  private readonly store = inject(ReduxStoreService);

  readonly items$ = this.store.select((state) => state.cocktails.items);
  readonly current$ = this.store.select((state) => state.cocktails.current);
  readonly status$ = this.store.select((state) => state.cocktails.status);
  readonly mutationStatus$ = this.store.select(
    (state) => state.cocktails.mutationStatus
  );
  readonly error$ = this.store.select((state) => state.cocktails.error);

  loadList(): void {
    this.store.dispatch(listStarted());

    this.http
      .get<CocktailSummary[]>(`${environment.apiUrl}/cocktails`)
      .pipe(
        tap((items) => this.store.dispatch(listSucceeded(items))),
        catchError((error: unknown) => {
          this.store.dispatch(requestFailed(getApiErrorMessage(error)));
          return throwError(() => error);
        })
      )
      .subscribe({ error: () => undefined });
  }

  loadOne(id: string): void {
    this.store.dispatch(currentStarted());

    this.http
      .get<Cocktail>(`${environment.apiUrl}/cocktails/${id}`)
      .pipe(
        tap((cocktail) => this.store.dispatch(currentSucceeded(cocktail))),
        catchError((error: unknown) => {
          this.store.dispatch(requestFailed(getApiErrorMessage(error)));
          return throwError(() => error);
        })
      )
      .subscribe({ error: () => undefined });
  }

  create(payload: CocktailPayload): Observable<Cocktail> {
    this.store.dispatch(mutationStarted());

    return this.http
      .post<Cocktail>(`${environment.apiUrl}/cocktails`, payload)
      .pipe(
        tap((cocktail) => this.store.dispatch(mutationSucceeded(cocktail))),
        catchError((error: unknown) => {
          this.store.dispatch(requestFailed(getApiErrorMessage(error)));
          return throwError(() => error);
        })
      );
  }

  update(id: string, payload: CocktailPayload): Observable<Cocktail> {
    this.store.dispatch(mutationStarted());

    return this.http
      .put<Cocktail>(`${environment.apiUrl}/cocktails/${id}`, payload)
      .pipe(
        tap((cocktail) => this.store.dispatch(mutationSucceeded(cocktail))),
        catchError((error: unknown) => {
          this.store.dispatch(requestFailed(getApiErrorMessage(error)));
          return throwError(() => error);
        })
      );
  }

  delete(id: string): Observable<void> {
    this.store.dispatch(mutationStarted());

    return this.http
      .delete<void>(`${environment.apiUrl}/cocktails/${id}`)
      .pipe(
        tap(() => this.store.dispatch(deleteSucceeded(id))),
        catchError((error: unknown) => {
          this.store.dispatch(requestFailed(getApiErrorMessage(error)));
          return throwError(() => error);
        })
      );
  }

  clearCurrent(): void {
    this.store.dispatch(clearCurrent());
  }

  resetMutation(): void {
    this.store.dispatch(resetMutation());
  }
}
