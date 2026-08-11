import {
  HttpClient,
  ReduxStoreService,
  authFailed,
  authStarted,
  authSucceeded,
  environment,
  getApiErrorMessage,
  signedOut
} from "./chunk-4CMED7CG.js";
import {
  Injectable,
  catchError,
  inject,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-QV2K65GU.js";

// src/app/core/auth/auth.facade.ts
var AuthFacade = class _AuthFacade {
  constructor() {
    this.http = inject(HttpClient);
    this.store = inject(ReduxStoreService);
    this.tokenKey = "bar21_token";
    this.user$ = this.store.select((state) => state.auth.user);
    this.status$ = this.store.select((state) => state.auth.status);
    this.error$ = this.store.select((state) => state.auth.error);
  }
  get token() {
    return localStorage.getItem(this.tokenKey);
  }
  get isAuthenticated() {
    return Boolean(this.token);
  }
  login(payload) {
    this.store.dispatch(authStarted());
    return this.http.post(`${environment.apiUrl}/auth/login`, payload).pipe(tap((response) => this.acceptAuth(response)), catchError((error) => {
      const message = getApiErrorMessage(error);
      this.store.dispatch(authFailed(message));
      return throwError(() => error);
    }));
  }
  register(payload) {
    this.store.dispatch(authStarted());
    return this.http.post(`${environment.apiUrl}/auth/register`, payload).pipe(tap((response) => this.acceptAuth(response)), catchError((error) => {
      const message = getApiErrorMessage(error);
      this.store.dispatch(authFailed(message));
      return throwError(() => error);
    }));
  }
  restoreSession() {
    if (!this.token || this.store.getState().auth.user) {
      return;
    }
    this.store.dispatch(authStarted());
    this.http.get(`${environment.apiUrl}/auth/me`).pipe(tap((user) => this.store.dispatch(authSucceeded(user))), catchError(() => {
      this.logout();
      return of(null);
    })).subscribe();
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.store.dispatch(signedOut());
  }
  acceptAuth(response) {
    localStorage.setItem(this.tokenKey, response.token);
    this.store.dispatch(authSucceeded(response.user));
  }
  static {
    this.\u0275fac = function AuthFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthFacade)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthFacade, factory: _AuthFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthFacade
};
//# sourceMappingURL=chunk-FXJ6RP46.js.map
