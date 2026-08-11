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

// src/app/features/auth/pages/register-page.component.ts
function RegisterPageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui-alert", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("message", ctx);
  }
}
var RegisterPageComponent = class _RegisterPageComponent {
  constructor() {
    this.authFacade = inject(AuthFacade);
    this.router = inject(Router);
    this.error$ = this.authFacade.error$;
    this.form = new FormGroup({
      name: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
      }),
      email: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl("", {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/)
        ]
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
    this.authFacade.register(this.form.getRawValue()).subscribe({
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
    this.\u0275fac = function RegisterPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPageComponent, selectors: [["app-register-page"]], decls: 13, vars: 9, consts: [["eyebrow", "\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", "title", "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", "description", "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442\u044B."], [1, "space-y-3", 3, "ngSubmit", "formGroup"], ["label", "\u0418\u043C\u044F", "autocomplete", "name", "error", "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430", 3, "control"], ["label", "Email", "type", "email", "autocomplete", "email", "error", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email", 3, "control"], ["label", "\u041F\u0430\u0440\u043E\u043B\u044C", "type", "password", "autocomplete", "new-password", "error", "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0431\u0443\u043A\u0432\u0430 \u0438 \u0446\u0438\u0444\u0440\u0430", 3, "control"], [3, "message"], ["mat-flat-button", "", "type", "submit", 1, "!mt-5", "!h-12", "!w-full", 3, "disabled"], [1, "pt-4", "text-center", "text-sm", "text-white/45"], ["routerLink", "/auth/login", 1, "font-semibold", "text-white", "hover:text-[#72f6ff]"]], template: function RegisterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-auth-layout", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_1_listener() {
          return ctx.submit();
        });
        \u0275\u0275element(2, "ui-text-input", 2)(3, "ui-text-input", 3)(4, "ui-text-input", 4);
        \u0275\u0275conditionalCreate(5, RegisterPageComponent_Conditional_5_Template, 1, 1, "ui-alert", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275text(10, " \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? ");
        \u0275\u0275elementStart(11, "a", 8);
        \u0275\u0275text(12, " \u0412\u043E\u0439\u0442\u0438 ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("control", ctx.form.controls.name);
        \u0275\u0275advance();
        \u0275\u0275property("control", ctx.form.controls.email);
        \u0275\u0275advance();
        \u0275\u0275property("control", ctx.form.controls.password);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_4_0 = \u0275\u0275pipeBind1(6, 7, ctx.error$)) ? 5 : -1, tmp_4_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442", " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPageComponent, [{
    type: Component,
    args: [{
      selector: "app-register-page",
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
      eyebrow="\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      title="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      description="\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0440\u0435\u0446\u0435\u043F\u0442\u044B."
    >
      <form [formGroup]="form" class="space-y-3" (ngSubmit)="submit()">
        <ui-text-input
          label="\u0418\u043C\u044F"
          autocomplete="name"
          [control]="form.controls.name"
          error="\u041C\u0438\u043D\u0438\u043C\u0443\u043C 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"
        />

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
          autocomplete="new-password"
          [control]="form.controls.password"
          error="\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0431\u0443\u043A\u0432\u0430 \u0438 \u0446\u0438\u0444\u0440\u0430"
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
          {{ submitting ? '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...' : '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442' }}
        </button>

        <div class="pt-4 text-center text-sm text-white/45">
          \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?
          <a routerLink="/auth/login" class="font-semibold text-white hover:text-[#72f6ff]">
            \u0412\u043E\u0439\u0442\u0438
          </a>
        </div>
      </form>
    </app-auth-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPageComponent, { className: "RegisterPageComponent", filePath: "src/app/features/auth/pages/register-page.component.ts", lineNumber: 81 });
})();
export {
  RegisterPageComponent
};
//# sourceMappingURL=chunk-4VGCX6GU.js.map
