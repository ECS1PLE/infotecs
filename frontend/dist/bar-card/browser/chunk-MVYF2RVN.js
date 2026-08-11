import {
  DefaultValueAccessor,
  FormArray,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  TextInputComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-LQ5V6LWH.js";
import {
  PageHeaderComponent
} from "./chunk-KS4IK4UA.js";
import {
  CocktailsFacade,
  LoadingStateComponent,
  MatSnackBar,
  MediaUrlPipe
} from "./chunk-7H3GKCAO.js";
import {
  BidiModule,
  MatButton,
  MatButtonModule,
  _getAnimationsState
} from "./chunk-DRS7UU5E.js";
import {
  AsyncPipe,
  DecimalPipe,
  HttpClient,
  Router,
  environment
} from "./chunk-4CMED7CG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewEncapsulation,
  combineLatest,
  inject,
  input,
  map,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QV2K65GU.js";
import "./chunk-WDMUDEB6.js";

// src/app/shared/ui/textarea/textarea.component.ts
function TextareaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var TextareaComponent = class _TextareaComponent {
  constructor() {
    this.control = input.required(...ngDevMode ? [{ debugName: "control" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = input(5, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.maxLength = input(null, ...ngDevMode ? [{ debugName: "maxLength" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = input("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function TextareaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextareaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextareaComponent, selectors: [["ui-textarea"]], inputs: { control: [1, "control"], label: [1, "label"], rows: [1, "rows"], maxLength: [1, "maxLength"], error: [1, "error"] }, decls: 5, vars: 5, consts: [["appearance", "outline"], ["matInput", "", 3, "formControl", "rows"]], template: function TextareaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-label");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "textarea", 1);
        \u0275\u0275conditionalCreate(4, TextareaComponent_Conditional_4_Template, 2, 1, "mat-error");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.control())("rows", ctx.rows());
        \u0275\u0275attribute("maxlength", ctx.maxLength() || null);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.control().invalid && ctx.control().touched && ctx.error() ? 4 : -1);
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaComponent, [{
    type: Component,
    args: [{
      selector: "ui-textarea",
      standalone: true,
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
      template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ label() }}</mat-label>
      <textarea
        matInput
        [formControl]="control()"
        [rows]="rows()"
        [attr.maxlength]="maxLength() || null"
      ></textarea>
      @if (control().invalid && control().touched && error()) {
        <mat-error>{{ error() }}</mat-error>
      }
    </mat-form-field>
  `
    }]
  }], null, { control: [{ type: Input, args: [{ isSignal: true, alias: "control", required: true }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }], maxLength: [{ type: Input, args: [{ isSignal: true, alias: "maxLength", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextareaComponent, { className: "TextareaComponent", filePath: "src/app/shared/ui/textarea/textarea.component.ts", lineNumber: 25 });
})();

// ../node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();

// src/app/core/uploads/upload.service.ts
var UploadService = class _UploadService {
  constructor() {
    this.http = inject(HttpClient);
  }
  upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${environment.apiUrl}/uploads`, formData);
  }
  static {
    this.\u0275fac = function UploadService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadService, factory: _UploadService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/ui/image-upload/image-upload.component.ts
function ImageUploadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275pipe(2, "mediaUrl");
    \u0275\u0275elementStart(3, "div", 7)(4, "button", 8);
    \u0275\u0275listener("click", function ImageUploadComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275nextContext();
      const fileInput_r2 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(fileInput_r2.click());
    });
    \u0275\u0275text(5, " \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function ImageUploadComponent_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove());
    });
    \u0275\u0275text(7, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 2, ctx_r2.value()), \u0275\u0275sanitizeUrl)("alt", ctx_r2.label());
  }
}
function ImageUploadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ImageUploadComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      \u0275\u0275nextContext();
      const fileInput_r2 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(fileInput_r2.click());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, "PNG, JPG \u0438\u043B\u0438 WEBP \u0434\u043E 8 \u041C\u0411");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label());
  }
}
function ImageUploadComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var ImageUploadComponent = class _ImageUploadComponent {
  constructor() {
    this.uploadService = inject(UploadService);
    this.value = input(null, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.valueChange = output();
    this.uploading = signal(false, ...ngDevMode ? [{ debugName: "uploading" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  onFileSelected(event) {
    const el = event.target;
    const file = el.files?.[0];
    if (!file) {
      return;
    }
    this.uploading.set(true);
    this.uploadService.upload(file).subscribe({
      next: ({ url }) => {
        this.valueChange.emit(url);
        this.uploading.set(false);
        el.value = "";
      },
      error: () => {
        this.uploading.set(false);
        el.value = "";
      }
    });
  }
  remove() {
    this.valueChange.emit(null);
  }
  static {
    this.\u0275fac = function ImageUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageUploadComponent, selectors: [["ui-image-upload"]], inputs: { value: [1, "value"], label: [1, "label"] }, outputs: { valueChange: "valueChange" }, decls: 6, vars: 2, consts: [["fileInput", ""], [1, "overflow-hidden", "rounded-2xl", "border", "border-white/10", "bg-black/20"], [1, "relative", "aspect-[16/9]", "overflow-hidden", "bg-black/30"], ["type", "button", 1, "flex", "min-h-40", "w-full", "flex-col", "items-center", "justify-center", "gap-2", "px-5", "py-8", "text-center", "transition", "hover:bg-white/[0.035]"], ["mode", "indeterminate"], ["hidden", "", "type", "file", "accept", "image/png,image/jpeg,image/webp", 3, "change"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-x-0", "bottom-0", "flex", "justify-end", "gap-2", "bg-gradient-to-t", "from-black/80", "to-transparent", "p-4", "pt-10"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "button", 1, "flex", "min-h-40", "w-full", "flex-col", "items-center", "justify-center", "gap-2", "px-5", "py-8", "text-center", "transition", "hover:bg-white/[0.035]", 3, "click"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-white/40"]], template: function ImageUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, ImageUploadComponent_Conditional_1_Template, 8, 4, "div", 2)(2, ImageUploadComponent_Conditional_2_Template, 5, 1, "button", 3);
        \u0275\u0275conditionalCreate(3, ImageUploadComponent_Conditional_3_Template, 1, 0, "mat-progress-bar", 4);
        \u0275\u0275elementStart(4, "input", 5, 0);
        \u0275\u0275listener("change", function ImageUploadComponent_Template_input_change_4_listener($event) {
          return ctx.onFileSelected($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value() ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.uploading() ? 3 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatProgressBarModule, MatProgressBar, MediaUrlPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageUploadComponent, [{
    type: Component,
    args: [{
      selector: "ui-image-upload",
      standalone: true,
      imports: [MatButtonModule, MatProgressBarModule, MediaUrlPipe],
      template: `
    <div class="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      @if (value()) {
        <div class="relative aspect-[16/9] overflow-hidden bg-black/30">
          <img
            [src]="value() | mediaUrl"
            [alt]="label()"
            class="h-full w-full object-cover"
          >
          <div class="absolute inset-x-0 bottom-0 flex justify-end gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
            <button mat-stroked-button type="button" (click)="fileInput.click()">
              \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C
            </button>
            <button mat-stroked-button type="button" (click)="remove()">
              \u0423\u0434\u0430\u043B\u0438\u0442\u044C
            </button>
          </div>
        </div>
      } @else {
        <button
          type="button"
          class="flex min-h-40 w-full flex-col items-center justify-center gap-2 px-5 py-8 text-center transition hover:bg-white/[0.035]"
          (click)="fileInput.click()"
        >
          <span class="text-sm font-semibold">{{ label() }}</span>
          <span class="text-xs text-white/40">PNG, JPG \u0438\u043B\u0438 WEBP \u0434\u043E 8 \u041C\u0411</span>
        </button>
      }

      @if (uploading()) {
        <mat-progress-bar mode="indeterminate" />
      }

      <input
        #fileInput
        hidden
        type="file"
        accept="image/png,image/jpeg,image/webp"
        (change)="onFileSelected($event)"
      >
    </div>
  `
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], valueChange: [{ type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageUploadComponent, { className: "ImageUploadComponent", filePath: "src/app/shared/ui/image-upload/image-upload.component.ts", lineNumber: 54 });
})();

// src/app/features/cocktails/components/cocktail-step-form.component.ts
function CocktailStepFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function CocktailStepFormComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove.emit());
    });
    \u0275\u0275text(1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    \u0275\u0275elementEnd();
  }
}
var CocktailStepFormComponent = class _CocktailStepFormComponent {
  constructor() {
    this.group = input.required(...ngDevMode ? [{ debugName: "group" }] : (
      /* istanbul ignore next */
      []
    ));
    this.index = input.required(...ngDevMode ? [{ debugName: "index" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canRemove = input(false, ...ngDevMode ? [{ debugName: "canRemove" }] : (
      /* istanbul ignore next */
      []
    ));
    this.remove = output();
  }
  static {
    this.\u0275fac = function CocktailStepFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CocktailStepFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CocktailStepFormComponent, selectors: [["app-cocktail-step-form"]], inputs: { group: [1, "group"], index: [1, "index"], canRemove: [1, "canRemove"] }, outputs: { remove: "remove" }, decls: 11, vars: 10, consts: [[1, "rounded-2xl", "border", "border-white/10", "bg-black/15", "p-4", "md:p-5"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-sm", "font-bold"], [1, "mr-2", "text-white/25"], ["mat-button", "", "type", "button"], [1, "grid", "gap-4", "lg:grid-cols-[1.2fr_0.8fr]"], ["label", "\u0427\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C", "error", "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435", 3, "control", "rows", "maxLength"], [3, "valueChange", "label", "value"], ["mat-button", "", "type", "button", 3, "click"]], template: function CocktailStepFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " \u0428\u0430\u0433 ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, CocktailStepFormComponent_Conditional_7_Template, 2, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "ui-textarea", 6);
        \u0275\u0275elementStart(10, "ui-image-upload", 7);
        \u0275\u0275listener("valueChange", function CocktailStepFormComponent_Template_ui_image_upload_valueChange_10_listener($event) {
          return ctx.group().controls.imageUrl.setValue($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, ctx.index() + 1, "2.0-0"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.canRemove() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("control", ctx.group().controls.description)("rows", 7)("maxLength", 800);
        \u0275\u0275advance();
        \u0275\u0275property("label", "\u0424\u043E\u0442\u043E \u0448\u0430\u0433\u0430 " + (ctx.index() + 1))("value", ctx.group().controls.imageUrl.value);
      }
    }, dependencies: [MatButtonModule, MatButton, TextareaComponent, ImageUploadComponent, DecimalPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CocktailStepFormComponent, [{
    type: Component,
    args: [{
      selector: "app-cocktail-step-form",
      standalone: true,
      imports: [MatButtonModule, TextareaComponent, ImageUploadComponent, DecimalPipe],
      template: `
    <article class="rounded-2xl border border-white/10 bg-black/15 p-4 md:p-5">
      <div class="mb-4 flex items-center justify-between">
        <div class="text-sm font-bold">
          <span class="mr-2 text-white/25">{{ index() + 1 | number: '2.0-0' }}</span>
          \u0428\u0430\u0433
        </div>
        @if (canRemove()) {
          <button mat-button type="button" (click)="remove.emit()">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
        }
      </div>

      <div class="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ui-textarea
          label="\u0427\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C"
          [control]="group().controls.description"
          [rows]="7"
          [maxLength]="800"
          error="\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
        />

        <ui-image-upload
          [label]="'\u0424\u043E\u0442\u043E \u0448\u0430\u0433\u0430 ' + (index() + 1)"
          [value]="group().controls.imageUrl.value"
          (valueChange)="group().controls.imageUrl.setValue($event)"
        />
      </div>
    </article>
  `
    }]
  }], null, { group: [{ type: Input, args: [{ isSignal: true, alias: "group", required: true }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: true }] }], canRemove: [{ type: Input, args: [{ isSignal: true, alias: "canRemove", required: false }] }], remove: [{ type: Output, args: ["remove"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CocktailStepFormComponent, { className: "CocktailStepFormComponent", filePath: "src/app/features/cocktails/components/cocktail-step-form.component.ts", lineNumber: 47 });
})();

// src/app/features/cocktails/components/cocktail-form.component.ts
function CocktailFormComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cocktail-step-form", 16);
    \u0275\u0275listener("remove", function CocktailFormComponent_For_17_Template_app_cocktail_step_form_remove_0_listener() {
      const \u0275$index_30_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeStep(\u0275$index_30_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_30_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("group", step_r4)("index", \u0275$index_30_r2)("canRemove", ctx_r2.steps.length > 1);
  }
}
var CocktailFormComponent = class _CocktailFormComponent {
  constructor() {
    this.initialValue = input(null, ...ngDevMode ? [{ debugName: "initialValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saving = input(false, ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.submitLabel = input("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", ...ngDevMode ? [{ debugName: "submitLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saved = output();
    this.cancel = output();
    this.form = new FormGroup({
      name: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(100)]
      }),
      description: new FormControl("", {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(1200)]
      }),
      imageUrl: new FormControl(null),
      steps: new FormArray([this.createStep()])
    });
  }
  get steps() {
    return this.form.controls.steps;
  }
  ngOnChanges(changes) {
    if (!changes["initialValue"]) {
      return;
    }
    const cocktail = this.initialValue();
    if (!cocktail) {
      return;
    }
    this.form.controls.name.setValue(cocktail.name);
    this.form.controls.description.setValue(cocktail.description);
    this.form.controls.imageUrl.setValue(cocktail.imageUrl);
    this.steps.clear();
    for (const step of cocktail.steps) {
      this.steps.push(this.createStep(step.description, step.imageUrl));
    }
    if (this.steps.length === 0) {
      this.steps.push(this.createStep());
    }
  }
  addStep() {
    this.steps.push(this.createStep());
  }
  removeStep(index) {
    if (this.steps.length <= 1) {
      return;
    }
    this.steps.removeAt(index);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.saved.emit({
      name: value.name.trim(),
      description: value.description.trim(),
      imageUrl: value.imageUrl,
      steps: value.steps.map((step) => ({
        description: step.description.trim(),
        imageUrl: step.imageUrl
      }))
    });
  }
  createStep(description = "", imageUrl = null) {
    return new FormGroup({
      description: new FormControl(description, {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(800)]
      }),
      imageUrl: new FormControl(imageUrl)
    });
  }
  static {
    this.\u0275fac = function CocktailFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CocktailFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CocktailFormComponent, selectors: [["app-cocktail-form"]], inputs: { initialValue: [1, "initialValue"], saving: [1, "saving"], submitLabel: [1, "submitLabel"] }, outputs: { saved: "saved", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 23, vars: 9, consts: [[1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "glass-panel", "rounded-3xl", "p-5", "md:p-7"], [1, "mb-6", "text-xl", "font-bold", "tracking-tight"], [1, "grid", "gap-5", "lg:grid-cols-[1.25fr_0.75fr]"], [1, "space-y-3"], ["label", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", "error", "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", 3, "control", "maxLength"], ["label", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", "error", "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 3, "control", "rows", "maxLength"], ["label", "\u0418\u0442\u043E\u0433\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", 3, "valueChange", "value"], [1, "mb-6", "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-xl", "font-bold", "tracking-tight"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "space-y-5"], [3, "group", "index", "canRemove"], [1, "flex", "flex-col-reverse", "gap-3", "sm:flex-row", "sm:justify-end"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "type", "submit", 1, "!h-11", 3, "disabled"], [3, "remove", "group", "index", "canRemove"]], template: function CocktailFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function CocktailFormComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(1, "section", 1)(2, "h2", 2);
        \u0275\u0275text(3, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "ui-text-input", 5)(7, "ui-textarea", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "ui-image-upload", 7);
        \u0275\u0275listener("valueChange", function CocktailFormComponent_Template_ui_image_upload_valueChange_8_listener($event) {
          return ctx.form.controls.imageUrl.setValue($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "section", 1)(10, "div", 8)(11, "h2", 9);
        \u0275\u0275text(12, "\u0428\u0430\u0433\u0438");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function CocktailFormComponent_Template_button_click_13_listener() {
          return ctx.addStep();
        });
        \u0275\u0275text(14, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0448\u0430\u0433 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11);
        \u0275\u0275repeaterCreate(16, CocktailFormComponent_For_17_Template, 1, 3, "app-cocktail-step-form", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
        \u0275\u0275listener("click", function CocktailFormComponent_Template_button_click_19_listener() {
          return ctx.cancel.emit();
        });
        \u0275\u0275text(20, "\u041E\u0442\u043C\u0435\u043D\u0430");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("control", ctx.form.controls.name)("maxLength", 100);
        \u0275\u0275advance();
        \u0275\u0275property("control", ctx.form.controls.description)("rows", 8)("maxLength", 1200);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.form.controls.imageUrl.value);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.steps.controls);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435..." : ctx.submitLabel(), " ");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      FormGroupDirective,
      MatButtonModule,
      MatButton,
      TextInputComponent,
      TextareaComponent,
      ImageUploadComponent,
      CocktailStepFormComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CocktailFormComponent, [{
    type: Component,
    args: [{
      selector: "app-cocktail-form",
      standalone: true,
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        TextInputComponent,
        TextareaComponent,
        ImageUploadComponent,
        CocktailStepFormComponent
      ],
      template: `
    <form [formGroup]="form" class="space-y-6" (ngSubmit)="submit()">
      <section class="glass-panel rounded-3xl p-5 md:p-7">
        <h2 class="mb-6 text-xl font-bold tracking-tight">\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435</h2>

        <div class="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div class="space-y-3">
            <ui-text-input
              label="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
              [control]="form.controls.name"
              [maxLength]="100"
              error="\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
            />

            <ui-textarea
              label="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
              [control]="form.controls.description"
              [rows]="8"
              [maxLength]="1200"
              error="\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            />
          </div>

          <ui-image-upload
            label="\u0418\u0442\u043E\u0433\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
            [value]="form.controls.imageUrl.value"
            (valueChange)="form.controls.imageUrl.setValue($event)"
          />
        </div>
      </section>

      <section class="glass-panel rounded-3xl p-5 md:p-7">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-xl font-bold tracking-tight">\u0428\u0430\u0433\u0438</h2>
          <button mat-stroked-button type="button" (click)="addStep()">
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0448\u0430\u0433
          </button>
        </div>

        <div class="space-y-5">
          @for (step of steps.controls; track step; let index = $index) {
            <app-cocktail-step-form
              [group]="step"
              [index]="index"
              [canRemove]="steps.length > 1"
              (remove)="removeStep(index)"
            />
          }
        </div>
      </section>

      <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button mat-button type="button" (click)="cancel.emit()">\u041E\u0442\u043C\u0435\u043D\u0430</button>
        <button
          mat-flat-button
          type="submit"
          class="!h-11"
          [disabled]="saving()"
        >
          {{ saving() ? '\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...' : submitLabel() }}
        </button>
      </div>
    </form>
  `
    }]
  }], null, { initialValue: [{ type: Input, args: [{ isSignal: true, alias: "initialValue", required: false }] }], saving: [{ type: Input, args: [{ isSignal: true, alias: "saving", required: false }] }], submitLabel: [{ type: Input, args: [{ isSignal: true, alias: "submitLabel", required: false }] }], saved: [{ type: Output, args: ["saved"] }], cancel: [{ type: Output, args: ["cancel"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CocktailFormComponent, { className: "CocktailFormComponent", filePath: "src/app/features/cocktails/components/cocktail-form.component.ts", lineNumber: 98 });
})();

// src/app/features/cocktails/pages/cocktail-editor-page.component.ts
function CocktailEditorPageComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui-loading-state", 1);
  }
}
function CocktailEditorPageComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cocktail-form", 3);
    \u0275\u0275listener("saved", function CocktailEditorPageComponent_Conditional_0_Conditional_2_Template_app_cocktail_form_saved_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save($event));
    })("cancel", function CocktailEditorPageComponent_Conditional_0_Conditional_2_Template_app_cocktail_form_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("initialValue", vm_r3.cocktail)("saving", vm_r3.mutationStatus === "loading")("submitLabel", vm_r3.isEdit ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
  }
}
function CocktailEditorPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui-page-header", 0);
    \u0275\u0275conditionalCreate(1, CocktailEditorPageComponent_Conditional_0_Conditional_1_Template, 1, 0, "ui-loading-state", 1)(2, CocktailEditorPageComponent_Conditional_0_Conditional_2_Template, 1, 3, "app-cocktail-form", 2);
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    \u0275\u0275property("eyebrow", vm_r3.isEdit ? "\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435" : "\u043D\u043E\u0432\u044B\u0439")("title", vm_r3.isEdit ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435" : "\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u0446\u0435\u043F\u0442")("description", vm_r3.isEdit ? "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0448\u0430\u0433\u0438 \u0438\u043B\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F." : "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0448\u0430\u0433\u0438 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F.");
    \u0275\u0275advance();
    \u0275\u0275conditional(vm_r3.isEdit && (vm_r3.status === "loading" || !vm_r3.cocktail) ? 1 : 2);
  }
}
var CocktailEditorPageComponent = class _CocktailEditorPageComponent {
  constructor() {
    this.cocktailsFacade = inject(CocktailsFacade);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.id = input(...ngDevMode ? [void 0, { debugName: "id" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewModel$ = combineLatest([
      this.cocktailsFacade.current$,
      this.cocktailsFacade.status$,
      this.cocktailsFacade.mutationStatus$
    ]).pipe(map(([cocktail, status, mutationStatus]) => ({
      cocktail,
      status,
      mutationStatus,
      isEdit: Boolean(this.id())
    })));
  }
  ngOnInit() {
    const id = this.id();
    if (id) {
      this.cocktailsFacade.loadOne(id);
    }
  }
  ngOnDestroy() {
    this.cocktailsFacade.clearCurrent();
    this.cocktailsFacade.resetMutation();
  }
  save(payload) {
    const id = this.id();
    const request$ = id ? this.cocktailsFacade.update(id, payload) : this.cocktailsFacade.create(payload);
    request$.subscribe({
      next: (cocktail) => {
        this.snackBar.open(id ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E" : "\u0420\u0435\u0446\u0435\u043F\u0442 \u0441\u043E\u0437\u0434\u0430\u043D", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", { duration: 2500 });
        void this.router.navigate(["/cocktails", cocktail.id]);
      }
    });
  }
  cancel() {
    const id = this.id();
    void this.router.navigate(id ? ["/cocktails", id] : ["/cocktails"]);
  }
  static {
    this.\u0275fac = function CocktailEditorPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CocktailEditorPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CocktailEditorPageComponent, selectors: [["app-cocktail-editor-page"]], inputs: { id: [1, "id"] }, decls: 2, vars: 3, consts: [[3, "eyebrow", "title", "description"], ["label", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430..."], [3, "initialValue", "saving", "submitLabel"], [3, "saved", "cancel", "initialValue", "saving", "submitLabel"]], template: function CocktailEditorPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CocktailEditorPageComponent_Conditional_0_Template, 3, 4);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [
      PageHeaderComponent,
      LoadingStateComponent,
      CocktailFormComponent,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CocktailEditorPageComponent, [{
    type: Component,
    args: [{
      selector: "app-cocktail-editor-page",
      standalone: true,
      imports: [
        AsyncPipe,
        PageHeaderComponent,
        LoadingStateComponent,
        CocktailFormComponent
      ],
      template: `
    @if (viewModel$ | async; as vm) {
      <ui-page-header
        [eyebrow]="vm.isEdit ? '\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435' : '\u043D\u043E\u0432\u044B\u0439'"
        [title]="vm.isEdit ? '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435' : '\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u0446\u0435\u043F\u0442'"
        [description]="
          vm.isEdit
            ? '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0448\u0430\u0433\u0438 \u0438\u043B\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.'
            : '\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0448\u0430\u0433\u0438 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F.'
        "
      />

      @if (vm.isEdit && (vm.status === 'loading' || !vm.cocktail)) {
        <ui-loading-state label="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430..." />
      } @else {
        <app-cocktail-form
          [initialValue]="vm.cocktail"
          [saving]="vm.mutationStatus === 'loading'"
          [submitLabel]="vm.isEdit ? '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C' : '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'"
          (saved)="save($event)"
          (cancel)="cancel()"
        />
      }
    }
  `
    }]
  }], null, { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CocktailEditorPageComponent, { className: "CocktailEditorPageComponent", filePath: "src/app/features/cocktails/pages/cocktail-editor-page.component.ts", lineNumber: 47 });
})();
export {
  CocktailEditorPageComponent
};
//# sourceMappingURL=chunk-MVYF2RVN.js.map
