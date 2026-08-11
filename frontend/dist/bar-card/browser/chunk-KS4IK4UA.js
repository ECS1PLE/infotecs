import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QV2K65GU.js";

// src/app/shared/ui/page-header/page-header.component.ts
var _c0 = ["*"];
function PageHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.eyebrow(), " ");
  }
}
function PageHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.description(), " ");
  }
}
var PageHeaderComponent = class _PageHeaderComponent {
  constructor() {
    this.eyebrow = input("", ...ngDevMode ? [{ debugName: "eyebrow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input.required(...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.description = input("", ...ngDevMode ? [{ debugName: "description" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function PageHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeaderComponent, selectors: [["ui-page-header"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], description: [1, "description"] }, ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[1, "mb-8", "flex", "flex-col", "gap-4", "md:flex-row", "md:items-end", "md:justify-between"], [1, "mb-2", "text-xs", "font-semibold", "uppercase", "tracking-[0.22em]", "text-[#72f6ff]"], [1, "text-gradient", "text-4xl", "font-black", "tracking-[-0.055em]", "md:text-6xl"], [1, "mt-4", "max-w-2xl", "text-sm", "leading-6", "text-white/50", "md:text-base"]], template: function PageHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "header", 0)(1, "div");
        \u0275\u0275conditionalCreate(2, PageHeaderComponent_Conditional_2_Template, 2, 1, "div", 1);
        \u0275\u0275domElementStart(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(5, PageHeaderComponent_Conditional_5_Template, 2, 1, "p", 3);
        \u0275\u0275domElementEnd();
        \u0275\u0275projection(6);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.eyebrow() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.description() ? 5 : -1);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "ui-page-header",
      standalone: true,
      template: `
    <header class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        @if (eyebrow()) {
          <div class="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#72f6ff]">
            {{ eyebrow() }}
          </div>
        }
        <h1 class="text-gradient text-4xl font-black tracking-[-0.055em] md:text-6xl">
          {{ title() }}
        </h1>
        @if (description()) {
          <p class="mt-4 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
            {{ description() }}
          </p>
        }
      </div>
      <ng-content />
    </header>
  `
    }]
  }], null, { eyebrow: [{ type: Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src/app/shared/ui/page-header/page-header.component.ts", lineNumber: 27 });
})();

export {
  PageHeaderComponent
};
//# sourceMappingURL=chunk-KS4IK4UA.js.map
