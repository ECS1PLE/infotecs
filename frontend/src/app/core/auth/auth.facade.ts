import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  User
} from '../models/user.model';
import {
  authFailed,
  authStarted,
  authSucceeded,
  signedOut
} from '../store/auth.slice';
import { ReduxStoreService } from '../store/redux-store.service';
import { getApiErrorMessage } from '../api/api-error.util';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  private readonly http = inject(HttpClient);
  private readonly store = inject(ReduxStoreService);
  private readonly tokenKey = 'bar21_token';

  readonly user$ = this.store.select((state) => state.auth.user);
  readonly status$ = this.store.select((state) => state.auth.status);
  readonly error$ = this.store.select((state) => state.auth.error);

  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  login(payload: LoginPayload): Observable<AuthResponse> {
    this.store.dispatch(authStarted());

    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/auth/login`, payload)
      .pipe(
        tap((response) => this.acceptAuth(response)),
        catchError((error: unknown) => {
          const message = getApiErrorMessage(error);
          this.store.dispatch(authFailed(message));
          return throwError(() => error);
        })
      );
  }

  register(payload: RegisterPayload): Observable<AuthResponse> {
    this.store.dispatch(authStarted());

    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/auth/register`, payload)
      .pipe(
        tap((response) => this.acceptAuth(response)),
        catchError((error: unknown) => {
          const message = getApiErrorMessage(error);
          this.store.dispatch(authFailed(message));
          return throwError(() => error);
        })
      );
  }

  restoreSession(): void {
    if (!this.token || this.store.getState().auth.user) {
      return;
    }

    this.store.dispatch(authStarted());
    this.http
      .get<User>(`${environment.apiUrl}/auth/me`)
      .pipe(
        tap((user) => this.store.dispatch(authSucceeded(user))),
        catchError(() => {
          this.logout();
          return of(null);
        })
      )
      .subscribe();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.store.dispatch(signedOut());
  }

  private acceptAuth(response: AuthResponse): void {
    localStorage.setItem(this.tokenKey, response.token);
    this.store.dispatch(authSucceeded(response.user));
  }
}
