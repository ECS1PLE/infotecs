import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-QV2K65GU.js";

// src/app/shared/ui/brand/brand.component.ts
var BrandComponent = class _BrandComponent {
  static {
    this.\u0275fac = function BrandComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrandComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandComponent, selectors: [["ui-brand"]], decls: 7, vars: 0, consts: [[1, "flex", "items-center", "gap-3"], [1, "grid", "h-10", "w-10", "place-items-center", "rounded-xl", "border", "border-white/10", "bg-white/[0.04]", "text-sm", "font-black", "tracking-tight", "shadow-neon"], [1, "font-display", "text-lg", "font-black", "leading-none", "tracking-tight"], [1, "text-[#7c5cff]"]], template: function BrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2, " VB ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 2);
        \u0275\u0275text(4, " Vavilov");
        \u0275\u0275domElementStart(5, "span", 3);
        \u0275\u0275text(6, ".Bar");
        \u0275\u0275domElementEnd()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandComponent, [{
    type: Component,
    args: [{
      selector: "ui-brand",
      standalone: true,
      template: `
    <div class="flex items-center gap-3">
      <div
        class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-black tracking-tight shadow-neon"
      >
        VB
      </div>
      <div class="font-display text-lg font-black leading-none tracking-tight">
        Vavilov<span class="text-[#7c5cff]">.Bar</span>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandComponent, { className: "BrandComponent", filePath: "src/app/shared/ui/brand/brand.component.ts", lineNumber: 19 });
})();

export {
  BrandComponent
};
//# sourceMappingURL=chunk-MPQ3OGVH.js.map
