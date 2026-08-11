import {
  BrandComponent
} from "./chunk-MPQ3OGVH.js";
import {
  AuthFacade
} from "./chunk-FXJ6RP46.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DRS7UU5E.js";
import {
  AsyncPipe,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-4CMED7CG.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QV2K65GU.js";
import "./chunk-WDMUDEB6.js";

// src/app/shell/app-shell.component.ts
var _c0 = () => ({ exact: true });
function AppShellComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r1 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
var AppShellComponent = class _AppShellComponent {
  constructor() {
    this.authFacade = inject(AuthFacade);
    this.router = inject(Router);
    this.user$ = this.authFacade.user$;
  }
  logout() {
    this.authFacade.logout();
    void this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function AppShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppShellComponent, selectors: [["app-shell"]], decls: 17, vars: 5, consts: [[1, "min-h-screen"], [1, "sticky", "top-0", "z-40", "border-b", "border-white/[0.07]", "bg-[#08080d]/80", "backdrop-blur-2xl"], [1, "mx-auto", "flex", "h-20", "max-w-7xl", "items-center", "justify-between", "px-5", "md:px-8"], ["routerLink", "/cocktails", "aria-label", "Vavilov.Bar"], [1, "hidden", "items-center", "gap-1", "md:flex"], ["routerLink", "/cocktails", "routerLinkActive", "!bg-white/[0.07] !text-white", 1, "rounded-full", "px-4", "py-2", "text-sm", "text-white/45", "transition", "hover:bg-white/[0.04]", "hover:text-white", 3, "routerLinkActiveOptions"], ["routerLink", "/cocktails/new", "routerLinkActive", "!bg-white/[0.07] !text-white", 1, "rounded-full", "px-4", "py-2", "text-sm", "text-white/45", "transition", "hover:bg-white/[0.04]", "hover:text-white"], [1, "flex", "items-center", "gap-3"], [1, "hidden", "text-right", "sm:block"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "mx-auto", "max-w-7xl", "px-5", "py-8", "md:px-8", "md:py-12"], [1, "text-sm", "font-semibold"], [1, "text-[11px]", "text-white/35"]], template: function AppShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275element(4, "ui-brand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 4)(6, "a", 5);
        \u0275\u0275text(7, " \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 6);
        \u0275\u0275text(9, " \u041D\u043E\u0432\u044B\u0439 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275conditionalCreate(11, AppShellComponent_Conditional_11_Template, 5, 2, "div", 8);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function AppShellComponent_Template_button_click_13_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(14, "\u0412\u044B\u0439\u0442\u0438");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "main", 10);
        \u0275\u0275element(16, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pipeBind1(12, 2, ctx.user$)) ? 11 : -1, tmp_1_0);
      }
    }, dependencies: [
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      MatButtonModule,
      MatButton,
      BrandComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppShellComponent, [{
    type: Component,
    args: [{
      selector: "app-shell",
      standalone: true,
      imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatButtonModule,
        AsyncPipe,
        BrandComponent
      ],
      template: `
    <div class="min-h-screen">
      <header class="sticky top-0 z-40 border-b border-white/[0.07] bg-[#08080d]/80 backdrop-blur-2xl">
        <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a routerLink="/cocktails" aria-label="Vavilov.Bar">
            <ui-brand />
          </a>

          <nav class="hidden items-center gap-1 md:flex">
            <a
              routerLink="/cocktails"
              routerLinkActive="!bg-white/[0.07] !text-white"
              [routerLinkActiveOptions]="{ exact: true }"
              class="rounded-full px-4 py-2 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
            >
              \u041A\u0430\u0442\u0430\u043B\u043E\u0433
            </a>
            <a
              routerLink="/cocktails/new"
              routerLinkActive="!bg-white/[0.07] !text-white"
              class="rounded-full px-4 py-2 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
            >
              \u041D\u043E\u0432\u044B\u0439
            </a>
          </nav>

          <div class="flex items-center gap-3">
            @if (user$ | async; as user) {
              <div class="hidden text-right sm:block">
                <div class="text-sm font-semibold">{{ user.name }}</div>
                <div class="text-[11px] text-white/35">{{ user.email }}</div>
              </div>
            }
            <button mat-stroked-button type="button" (click)="logout()">\u0412\u044B\u0439\u0442\u0438</button>
          </div>
        </div>
      </header>

      <main class="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <router-outlet />
      </main>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppShellComponent, { className: "AppShellComponent", filePath: "src/app/shell/app-shell.component.ts", lineNumber: 63 });
})();
export {
  AppShellComponent
};
//# sourceMappingURL=chunk-VXHDP7S6.js.map
