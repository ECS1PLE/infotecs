import {
  BrandComponent
} from "./chunk-MPQ3OGVH.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QV2K65GU.js";

// src/app/shared/ui/alert/alert.component.ts
var AlertComponent = class _AlertComponent {
  constructor() {
    this.message = input.required(...ngDevMode ? [{ debugName: "message" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["ui-alert"]], inputs: { message: [1, "message"] }, decls: 2, vars: 1, consts: [[1, "rounded-xl", "border", "border-[#ff4d73]/25", "bg-[#ff4d73]/10", "px-4", "py-3", "text-sm", "text-[#ff8da6]"]], template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.message(), " ");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "ui-alert",
      standalone: true,
      template: `
    <div class="rounded-xl border border-[#ff4d73]/25 bg-[#ff4d73]/10 px-4 py-3 text-sm text-[#ff8da6]">
      {{ message() }}
    </div>
  `
    }]
  }], null, { message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/shared/ui/alert/alert.component.ts", lineNumber: 12 });
})();

// src/app/features/auth/components/auth-layout.component.ts
var _c0 = ["*"];
var AuthLayoutComponent = class _AuthLayoutComponent {
  constructor() {
    this.eyebrow = input.required(...ngDevMode ? [{ debugName: "eyebrow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input.required(...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.description = input.required(...ngDevMode ? [{ debugName: "description" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function AuthLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthLayoutComponent, selectors: [["app-auth-layout"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], description: [1, "description"] }, ngContentSelectors: _c0, decls: 24, vars: 3, consts: [[1, "relative", "h-screen", "overflow-hidden", "px-5", "py-5", "md:px-8", "md:py-8"], [1, "neon-orb", "-left-24", "top-10", "h-72", "w-72", "bg-[#7c5cff]"], [1, "neon-orb", "bottom-0", "right-0", "h-96", "w-96", "bg-[#35e8ff]"], [1, "mx-auto", "flex", "h-full", "max-w-7xl", "flex-col"], [1, "flex", "shrink-0", "items-center", "justify-between"], [1, "grid", "min-h-0", "flex-1", "items-center", "gap-8", "py-6", "lg:grid-cols-[1.08fr_0.92fr]", "lg:gap-12", "lg:py-8"], [1, "hidden", "lg:block"], [1, "max-w-2xl"], [1, "text-gradient", "text-7xl", "font-black", "leading-[0.88]", "tracking-[-0.075em]", "xl:text-8xl"], [1, "mt-7", "max-w-xl", "text-base", "leading-7", "text-white/45"], [1, "glass-panel", "mx-auto", "max-h-full", "w-full", "max-w-xl", "overflow-y-auto", "rounded-[2rem]", "p-6", "shadow-neon", "sm:p-9"], [1, "mb-8"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.2em]", "text-[#c6ff3d]"], [1, "mt-3", "text-3xl", "font-black", "tracking-[-0.045em]"], [1, "mt-3", "text-sm", "leading-6", "text-white/45"]], template: function AuthLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "main", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "ui-brand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "section", 6)(8, "div", 7)(9, "h1", 8);
        \u0275\u0275text(10, " \u0411\u0430\u0440\u043D\u0430\u044F");
        \u0275\u0275element(11, "br");
        \u0275\u0275text(12, "\u043A\u0430\u0440\u0442\u0430 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 9);
        \u0275\u0275text(14, " \u0420\u0435\u0446\u0435\u043F\u0442\u044B \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u0435\u0439 \u0441 \u0448\u0430\u0433\u0430\u043C\u0438 \u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 10)(16, "div", 11)(17, "div", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "h2", 13);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 14);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275projection(23);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate1(" ", ctx.eyebrow(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.description(), " ");
      }
    }, dependencies: [BrandComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthLayoutComponent, [{
    type: Component,
    args: [{
      selector: "app-auth-layout",
      standalone: true,
      imports: [BrandComponent],
      template: `
    <main class="relative h-screen overflow-hidden px-5 py-5 md:px-8 md:py-8">
      <div class="neon-orb -left-24 top-10 h-72 w-72 bg-[#7c5cff]"></div>
      <div class="neon-orb bottom-0 right-0 h-96 w-96 bg-[#35e8ff]"></div>

      <div class="mx-auto flex h-full max-w-7xl flex-col">
        <div class="flex shrink-0 items-center justify-between">
          <ui-brand />
        </div>

        <div class="grid min-h-0 flex-1 items-center gap-8 py-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-8">
          <section class="hidden lg:block">
            <div class="max-w-2xl">
              <h1 class="text-gradient text-7xl font-black leading-[0.88] tracking-[-0.075em] xl:text-8xl">
                \u0411\u0430\u0440\u043D\u0430\u044F<br>\u043A\u0430\u0440\u0442\u0430
              </h1>
              <p class="mt-7 max-w-xl text-base leading-7 text-white/45">
                \u0420\u0435\u0446\u0435\u043F\u0442\u044B \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u0435\u0439 \u0441 \u0448\u0430\u0433\u0430\u043C\u0438 \u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438.
              </p>
            </div>
          </section>

          <section class="glass-panel mx-auto max-h-full w-full max-w-xl overflow-y-auto rounded-[2rem] p-6 shadow-neon sm:p-9">
            <div class="mb-8">
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c6ff3d]">
                {{ eyebrow() }}
              </div>
              <h2 class="mt-3 text-3xl font-black tracking-[-0.045em]">
                {{ title() }}
              </h2>
              <p class="mt-3 text-sm leading-6 text-white/45">
                {{ description() }}
              </p>
            </div>
            <ng-content />
          </section>
        </div>
      </div>
    </main>
  `
    }]
  }], null, { eyebrow: [{ type: Input, args: [{ isSignal: true, alias: "eyebrow", required: true }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthLayoutComponent, { className: "AuthLayoutComponent", filePath: "src/app/features/auth/components/auth-layout.component.ts", lineNumber: 49 });
})();

export {
  AlertComponent,
  AuthLayoutComponent
};
//# sourceMappingURL=chunk-C2ANS7R5.js.map
