import {
  AlertComponent,
  AuthLayoutComponent
} from "./chunk-C2ANS7R5.js";
import "./chunk-MPQ3OGVH.js";
import {
  AuthFacade
} from "./chunk-FXJ6RP46.js";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  TextInputComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-LQ5V6LWH.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DRS7UU5E.js";
import {
  AsyncPipe,
  Router,
  RouterLink
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
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QV2K65GU.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/pages/login-page.component.ts
function LoginPageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui-alert", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("message", ctx);
  }
}
var LoginPageComponent = class _LoginPageComponent {
  constructor() {
    this.authFacade = inject(AuthFacade);
    this.router = inject(Router);
    this.error$ = this.authFacade.error$;
    this.form = new FormGroup({
      email: new FormControl("demo@bar21.local", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("Demo12345", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
    this.submitting = false;
  }
  submit() {
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.authFacade.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitting = false;
        void this.router.navigate(["/cocktails"]);
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPageComponent, selectors: [["app-login-page"]], decls: 12, vars: 8, consts: [["eyebrow", "\u0432\u0445\u043E\u0434", "title", "\u0412\u043E\u0439\u0442\u0438", "description", "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432."], [1, "space-y-3", 3, "ngSubmit", "formGroup"], ["label", "Email", "type", "email", "autocomplete", "email", "error", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email", 3, "control"], ["label", "\u041F\u0430\u0440\u043E\u043B\u044C", "type", "password", "autocomplete", "current-password", "error", "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432", 3, "control"], [3, "message"], ["mat-flat-button", "", "type", "submit", 1, "!mt-5", "!h-12", "!w-full", 3, "disabled"], [1, "pt-4", "text-center", "text-sm", "text-white/45"], ["routerLink", "/auth/register", 1, "font-semibold", "text-white", "hover:text-[#72f6ff]"]], template: function LoginPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-auth-layout", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_1_listener() {
          return ctx.submit();
        });
        \u0275\u0275element(2, "ui-text-input", 2)(3, "ui-text-input", 3);
        \u0275\u0275conditionalCreate(4, LoginPageComponent_Conditional_4_Template, 1, 1, "ui-alert", 4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9, " \u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? ");
        \u0275\u0275elementStart(10, "a", 7);
        \u0275\u0275text(11, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("control", ctx.form.controls.email);
        \u0275\u0275advance();
        \u0275\u0275property("control", ctx.form.controls.password);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(5, 6, ctx.error$)) ? 4 : -1, tmp_3_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting ? "\u0412\u0445\u043E\u0434..." : "\u0412\u043E\u0439\u0442\u0438", " ");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      RouterLink,
      MatButtonModule,
      MatButton,
      AuthLayoutComponent,
      TextInputComponent,
      AlertComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPageComponent, [{
    type: Component,
    args: [{
      selector: "app-login-page",
      standalone: true,
      imports: [
        ReactiveFormsModule,
        RouterLink,
        MatButtonModule,
        AsyncPipe,
        AuthLayoutComponent,
        TextInputComponent,
        AlertComponent
      ],
      template: `
    <app-auth-layout
      eyebrow="\u0432\u0445\u043E\u0434"
      title="\u0412\u043E\u0439\u0442\u0438"
      description="\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432."
    >
      <form [formGroup]="form" class="space-y-3" (ngSubmit)="submit()">
        <ui-text-input
          label="Email"
          type="email"
          autocomplete="email"
          [control]="form.controls.email"
          error="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email"
        />

        <ui-text-input
          label="\u041F\u0430\u0440\u043E\u043B\u044C"
          type="password"
          autocomplete="current-password"
          [control]="form.controls.password"
          error="\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
        />

        @if (error$ | async; as error) {
          <ui-alert [message]="error" />
        }

        <button
          mat-flat-button
          type="submit"
          class="!mt-5 !h-12 !w-full"
          [disabled]="form.invalid || submitting"
        >
          {{ submitting ? '\u0412\u0445\u043E\u0434...' : '\u0412\u043E\u0439\u0442\u0438' }}
        </button>

        <div class="pt-4 text-center text-sm text-white/45">
          \u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?
          <a routerLink="/auth/register" class="font-semibold text-white hover:text-[#72f6ff]">
            \u0421\u043E\u0437\u0434\u0430\u0442\u044C
          </a>
        </div>
      </form>
    </app-auth-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPageComponent, { className: "LoginPageComponent", filePath: "src/app/features/auth/pages/login-page.component.ts", lineNumber: 74 });
})();
export {
  LoginPageComponent
};
//# sourceMappingURL=chunk-AOPBO35S.js.map
