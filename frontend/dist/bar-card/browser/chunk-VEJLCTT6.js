import {
  ConfirmDialogComponent,
  MatDialog
} from "./chunk-HG2QYJXS.js";
import {
  CocktailsFacade,
  LoadingStateComponent,
  MatSnackBar,
  MediaUrlPipe
} from "./chunk-7H3GKCAO.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-DRS7UU5E.js";
import {
  AsyncPipe,
  DatePipe,
  DecimalPipe,
  Router,
  RouterLink
} from "./chunk-4CMED7CG.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QV2K65GU.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/cocktails/components/cocktail-step-card.component.ts
function CocktailStepCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 5);
    \u0275\u0275pipe(1, "mediaUrl");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind1(1, 2, ctx_r0.step().imageUrl), \u0275\u0275sanitizeUrl)("alt", "\u0428\u0430\u0433 " + (ctx_r0.index() + 1));
  }
}
function CocktailStepCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1, " \u043D\u0435\u0442 \u0444\u043E\u0442\u043E ");
    \u0275\u0275domElementEnd();
  }
}
var CocktailStepCardComponent = class _CocktailStepCardComponent {
  constructor() {
    this.step = input.required(...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    ));
    this.index = input.required(...ngDevMode ? [{ debugName: "index" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function CocktailStepCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CocktailStepCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CocktailStepCardComponent, selectors: [["app-cocktail-step-card"]], inputs: { step: [1, "step"], index: [1, "index"] }, decls: 10, vars: 6, consts: [[1, "glass-panel", "grid", "overflow-hidden", "rounded-3xl", "md:grid-cols-[1fr_0.78fr]"], [1, "p-6", "md:p-8"], [1, "mb-5", "text-5xl", "font-black", "tracking-[-0.08em]", "text-white/10"], [1, "max-w-2xl", "text-base", "leading-7", "text-white/65"], [1, "relative", "h-[16rem]", "border-t", "border-white/10", "bg-black/20", "md:h-full", "md:min-h-[16.75rem]", "md:border-l", "md:border-t-0"], [1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "grid", "h-full", "place-items-center", "text-xs", "uppercase", "tracking-[0.18em]", "text-white/20"]], template: function CocktailStepCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "article", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "number");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "div", 4);
        \u0275\u0275conditionalCreate(8, CocktailStepCardComponent_Conditional_8_Template, 2, 4, "img", 5)(9, CocktailStepCardComponent_Conditional_9_Template, 2, 0, "div", 6);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, ctx.index() + 1, "2.0-0"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.step().description, " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.step().imageUrl ? 8 : 9);
      }
    }, dependencies: [DecimalPipe, MediaUrlPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CocktailStepCardComponent, [{
    type: Component,
    args: [{
      selector: "app-cocktail-step-card",
      standalone: true,
      imports: [DecimalPipe, MediaUrlPipe],
      template: `
    <article class="glass-panel grid overflow-hidden rounded-3xl md:grid-cols-[1fr_0.78fr]">
      <div class="p-6 md:p-8">
        <div class="mb-5 text-5xl font-black tracking-[-0.08em] text-white/10">
          {{ index() + 1 | number: '2.0-0' }}
        </div>
        <p class="max-w-2xl text-base leading-7 text-white/65">
          {{ step().description }}
        </p>
      </div>
      <div class="relative h-[16rem] border-t border-white/10 bg-black/20 md:h-full md:min-h-[16.75rem] md:border-l md:border-t-0">
        @if (step().imageUrl) {
          <img
            [src]="step().imageUrl | mediaUrl"
            [alt]="'\u0428\u0430\u0433 ' + (index() + 1)"
            class="absolute inset-0 h-full w-full object-cover"
          >
        } @else {
          <div class="grid h-full place-items-center text-xs uppercase tracking-[0.18em] text-white/20">
            \u043D\u0435\u0442 \u0444\u043E\u0442\u043E
          </div>
        }
      </div>
    </article>
  `
    }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: true }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CocktailStepCardComponent, { className: "CocktailStepCardComponent", filePath: "src/app/features/cocktails/components/cocktail-step-card.component.ts", lineNumber: 36 });
})();

// src/app/features/cocktails/pages/cocktail-detail-page.component.ts
var _c0 = (a0) => ["/cocktails", a0, "edit"];
var _forTrack0 = ($index, $item) => $item.id;
function CocktailDetailPageComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
    \u0275\u0275pipe(1, "mediaUrl");
  }
  if (rf & 2) {
    const cocktail_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 2, cocktail_r2.imageUrl), \u0275\u0275sanitizeUrl)("alt", cocktail_r2.name);
  }
}
function CocktailDetailPageComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " \u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F ");
    \u0275\u0275elementEnd();
  }
}
function CocktailDetailPageComponent_Conditional_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-cocktail-step-card", 20);
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_57_r5 = ctx.$index;
    \u0275\u0275property("step", step_r4)("index", \u0275$index_57_r5);
  }
}
function CocktailDetailPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article")(1, "div", 1)(2, "a", 2);
    \u0275\u0275text(3, "\u2190 \u041D\u0430\u0437\u0430\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "a", 4);
    \u0275\u0275text(6, " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function CocktailDetailPageComponent_Conditional_0_Template_button_click_7_listener() {
      const cocktail_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(cocktail_r2.id, cocktail_r2.name));
    });
    \u0275\u0275text(8, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "section", 6)(10, "div", 7);
    \u0275\u0275element(11, "div", 8);
    \u0275\u0275elementStart(12, "div", 9)(13, "div", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h1", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 12);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14);
    \u0275\u0275conditionalCreate(24, CocktailDetailPageComponent_Conditional_0_Conditional_24_Template, 2, 4, "img", 15)(25, CocktailDetailPageComponent_Conditional_0_Conditional_25_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "section", 17)(27, "h2", 18);
    \u0275\u0275text(28, "\u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19);
    \u0275\u0275repeaterCreate(30, CocktailDetailPageComponent_Conditional_0_For_31_Template, 1, 2, "app-cocktail-step-card", 20, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cocktail_r2 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, cocktail_r2.id));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 6, cocktail_r2.createdAt, "dd.MM.yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cocktail_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cocktail_r2.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E ", \u0275\u0275pipeBind2(22, 9, cocktail_r2.updatedAt, "dd.MM.yyyy, HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(cocktail_r2.imageUrl ? 24 : 25);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(cocktail_r2.steps);
  }
}
function CocktailDetailPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui-loading-state", 0);
  }
}
var CocktailDetailPageComponent = class _CocktailDetailPageComponent {
  constructor() {
    this.cocktailsFacade = inject(CocktailsFacade);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.id = input.required(...ngDevMode ? [{ debugName: "id" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cocktail$ = this.cocktailsFacade.current$;
  }
  ngOnInit() {
    this.cocktailsFacade.loadOne(this.id());
  }
  ngOnDestroy() {
    this.cocktailsFacade.clearCurrent();
  }
  confirmDelete(id, name) {
    const data = {
      title: `\u0423\u0434\u0430\u043B\u0438\u0442\u044C \xAB${name}\xBB?`,
      description: "\u0420\u0435\u0446\u0435\u043F\u0442 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F.",
      confirmLabel: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
    };
    this.dialog.open(ConfirmDialogComponent, { data, width: "440px" }).afterClosed().subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }
      this.cocktailsFacade.delete(id).subscribe({
        next: () => {
          this.snackBar.open("\u0420\u0435\u0446\u0435\u043F\u0442 \u0443\u0434\u0430\u043B\u0451\u043D", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", { duration: 2500 });
          void this.router.navigate(["/cocktails"]);
        }
      });
    });
  }
  static {
    this.\u0275fac = function CocktailDetailPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CocktailDetailPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CocktailDetailPageComponent, selectors: [["app-cocktail-detail-page"]], inputs: { id: [1, "id"] }, decls: 3, vars: 3, consts: [["label", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430..."], [1, "mb-8", "flex", "flex-wrap", "items-center", "justify-between", "gap-4"], ["mat-button", "", "routerLink", "/cocktails"], [1, "flex", "gap-2"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-button", "", "type", "button", 3, "click"], [1, "grid", "gap-6", "lg:grid-cols-[1.06fr_0.94fr]"], [1, "glass-panel", "relative", "overflow-hidden", "rounded-[2rem]", "p-6", "md:p-10"], [1, "neon-orb", "-left-16", "top-8", "h-52", "w-52", "bg-[#7c5cff]"], [1, "relative"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-[0.22em]", "text-[#72f6ff]"], [1, "text-gradient", "max-w-3xl", "text-5xl", "font-black", "leading-[0.93]", "tracking-[-0.065em]", "md:text-7xl"], [1, "mt-7", "max-w-2xl", "text-base", "leading-7", "text-white/55"], [1, "mt-10", "text-xs", "uppercase", "tracking-[0.18em]", "text-white/25"], [1, "relative", "h-80", "overflow-hidden", "rounded-[2rem]", "border", "border-white/10", "bg-white/[0.025]", "lg:h-full", "lg:min-h-80"], [1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "grid", "h-full", "place-items-center", "px-8", "text-center", "text-sm", "text-white/25"], [1, "mt-14"], [1, "mb-7", "text-3xl", "font-black", "tracking-[-0.045em]"], [1, "space-y-5"], [3, "step", "index"]], template: function CocktailDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CocktailDetailPageComponent_Conditional_0_Template, 32, 14, "article");
        \u0275\u0275pipe(1, "async");
        \u0275\u0275conditionalBranchCreate(2, CocktailDetailPageComponent_Conditional_2_Template, 1, 0, "ui-loading-state", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.cocktail$)) ? 0 : 2, tmp_0_0);
      }
    }, dependencies: [
      RouterLink,
      MatButtonModule,
      MatButton,
      LoadingStateComponent,
      CocktailStepCardComponent,
      AsyncPipe,
      DatePipe,
      MediaUrlPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CocktailDetailPageComponent, [{
    type: Component,
    args: [{
      selector: "app-cocktail-detail-page",
      standalone: true,
      imports: [
        AsyncPipe,
        DatePipe,
        RouterLink,
        MatButtonModule,
        MediaUrlPipe,
        LoadingStateComponent,
        CocktailStepCardComponent
      ],
      template: `
    @if (cocktail$ | async; as cocktail) {
      <article>
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a mat-button routerLink="/cocktails">\u2190 \u041D\u0430\u0437\u0430\u0434</a>
          <div class="flex gap-2">
            <a mat-stroked-button [routerLink]="['/cocktails', cocktail.id, 'edit']">
              \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C
            </a>
            <button mat-button type="button" (click)="confirmDelete(cocktail.id, cocktail.name)">
              \u0423\u0434\u0430\u043B\u0438\u0442\u044C
            </button>
          </div>
        </div>

        <section class="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div class="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-10">
            <div class="neon-orb -left-16 top-8 h-52 w-52 bg-[#7c5cff]"></div>
            <div class="relative">
              <div class="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#72f6ff]">
                {{ cocktail.createdAt | date: 'dd.MM.yyyy' }}
              </div>
              <h1 class="text-gradient max-w-3xl text-5xl font-black leading-[0.93] tracking-[-0.065em] md:text-7xl">
                {{ cocktail.name }}
              </h1>
              <p class="mt-7 max-w-2xl text-base leading-7 text-white/55">
                {{ cocktail.description }}
              </p>
              <div class="mt-10 text-xs uppercase tracking-[0.18em] text-white/25">
                \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E {{ cocktail.updatedAt | date: 'dd.MM.yyyy, HH:mm' }}
              </div>
            </div>
          </div>

          <div class="relative h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:h-full lg:min-h-80">
            @if (cocktail.imageUrl) {
              <img
                [src]="cocktail.imageUrl | mediaUrl"
                [alt]="cocktail.name"
                class="absolute inset-0 h-full w-full object-cover"
              >
            } @else {
              <div class="grid h-full place-items-center px-8 text-center text-sm text-white/25">
                \u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F
              </div>
            }
          </div>
        </section>

        <section class="mt-14">
          <h2 class="mb-7 text-3xl font-black tracking-[-0.045em]">\u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435</h2>
          <div class="space-y-5">
            @for (step of cocktail.steps; track step.id; let index = $index) {
              <app-cocktail-step-card [step]="step" [index]="index" />
            }
          </div>
        </section>
      </article>
    } @else {
      <ui-loading-state label="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430..." />
    }
  `
    }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CocktailDetailPageComponent, { className: "CocktailDetailPageComponent", filePath: "src/app/features/cocktails/pages/cocktail-detail-page.component.ts", lineNumber: 91 });
})();
export {
  CocktailDetailPageComponent
};
//# sourceMappingURL=chunk-VEJLCTT6.js.map
