import {
  BidiModule,
  Directionality,
  ObserversModule,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _animationsDisabled,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  getSupportedInputTypes
} from "./chunk-DRS7UU5E.js";
import {
  NgTemplateOutlet,
  getDOM
} from "./chunk-4CMED7CG.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  Version,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  afterRenderEffect,
  auditTime,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  filter,
  forkJoin,
  forwardRef,
  from,
  inject,
  input,
  isPromise,
  isSignal,
  isSubscribable,
  map,
  merge,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  takeUntil,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-QV2K65GU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// ../node_modules/@angular/forms/fesm2022/forms.mjs
/**
 * @license Angular v21.2.19
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("21.2.19");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status === PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, id) => {
        opt._setSelected(ids.indexOf(id) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input2) {
    return input2 != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => requiredValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input2) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => emailValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input2) => input2;
  createValidator = (input2) => patternValidator(input2);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// ../node_modules/@angular/cdk/fesm2022/observers-private.mjs
var loopLimitExceededErrorHandler = (e) => {
  if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
};
var SingleBoxSharedResizeObserver = class {
  _box;
  _destroyed = new Subject();
  _resizeSubject = new Subject();
  _resizeObserver;
  _elementObservables = /* @__PURE__ */ new Map();
  constructor(_box) {
    this._box = _box;
    if (typeof ResizeObserver !== "undefined") {
      this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
    }
  }
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new Observable((observer) => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe(filter((entries) => entries.some((entry) => entry.target === target)), shareReplay({
        bufferSize: 1,
        refCount: true
      }), takeUntil(this._destroyed)));
    }
    return this._elementObservables.get(target);
  }
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
};
var SharedResizeObserver = class _SharedResizeObserver {
  _cleanupErrorListener;
  _observers = /* @__PURE__ */ new Map();
  _ngZone = inject(NgZone);
  constructor() {
    if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      this._ngZone.runOutsideAngular(() => {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
      });
    }
  }
  ngOnDestroy() {
    for (const [, observer] of this._observers) {
      observer.destroy();
    }
    this._observers.clear();
    this._cleanupErrorListener?.();
  }
  observe(target, options) {
    const box = options?.box || "content-box";
    if (!this._observers.has(box)) {
      this._observers.set(box, new SingleBoxSharedResizeObserver(box));
    }
    return this._observers.get(box).observe(target);
  }
  static \u0275fac = function SharedResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedResizeObserver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SharedResizeObserver,
    factory: _SharedResizeObserver.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// ../node_modules/@angular/material/fesm2022/_form-field-chunk.mjs
var _c0 = ["notch"];
var _c1 = ["matFormFieldNotchedOutline", ""];
var _c2 = ["*"];
var _c3 = ["iconPrefixContainer"];
var _c4 = ["textPrefixContainer"];
var _c5 = ["iconSuffixContainer"];
var _c6 = ["textSuffixContainer"];
var _c7 = ["textField"];
var _c8 = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c9 = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 20);
    \u0275\u0275projection(1, 1);
    \u0275\u0275conditionalCreate(2, MatFormField_ng_template_0_Conditional_0_Conditional_2_Template, 1, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("floating", ctx_r0._shouldLabelFloat())("monitorResize", ctx_r0._hasOutline())("id", ctx_r0._labelId);
    \u0275\u0275attribute("for", ctx_r0._control.disableAutomaticLabeling ? null : ctx_r0._control.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.hideRequiredMarker && ctx_r0._control.required ? 2 : -1);
  }
}
function MatFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatFormField_ng_template_0_Conditional_0_Template, 3, 5, "label", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0._hasFloatingLabel() ? 0 : -1);
  }
}
function MatFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatFormField_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const labelTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", labelTemplate_r2);
  }
}
function MatFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, MatFormField_Conditional_6_Conditional_1_Template, 1, 1, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matFormFieldNotchedOutlineOpen", ctx_r0._shouldLabelFloat());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0._forceDisplayInfixLabel() ? 1 : -1);
  }
}
function MatFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 2);
    \u0275\u0275projection(2, 2);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 3);
    \u0275\u0275projection(2, 3);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {
}
function MatFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatFormField_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const labelTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", labelTemplate_r2);
  }
}
function MatFormField_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14, 4);
    \u0275\u0275projection(2, 4);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 5);
    \u0275\u0275projection(2, 5);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function MatFormField_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275projection(1, 6);
    \u0275\u0275elementEnd();
  }
}
function MatFormField_Case_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r0._hintLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hintLabel);
  }
}
function MatFormField_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, MatFormField_Case_17_Conditional_1_Template, 2, 2, "mat-hint", 22);
    \u0275\u0275projection(2, 7);
    \u0275\u0275element(3, "div", 23);
    \u0275\u0275projection(4, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hintLabel ? 1 : -1);
  }
}
var MatLabel = class _MatLabel {
  static \u0275fac = function MatLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatLabel,
    selectors: [["mat-label"]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLabel, [{
    type: Directive,
    args: [{
      selector: "mat-label"
    }]
  }], null, null);
})();
var MAT_ERROR = new InjectionToken("MatError");
var MatError = class _MatError {
  id = inject(_IdGenerator).getId("mat-mdc-error-");
  constructor() {
  }
  static \u0275fac = function MatError_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatError)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatError,
    selectors: [["mat-error"], ["", "matError", ""]],
    hostAttrs: [1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"],
    hostVars: 1,
    hostBindings: function MatError_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ERROR,
      useExisting: _MatError
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatError, [{
    type: Directive,
    args: [{
      selector: "mat-error, [matError]",
      host: {
        "class": "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
        "[id]": "id"
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], () => [], {
    id: [{
      type: Input
    }]
  });
})();
var MatHint = class _MatHint {
  align = "start";
  id = inject(_IdGenerator).getId("mat-mdc-hint-");
  static \u0275fac = function MatHint_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatHint)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHint,
    selectors: [["mat-hint"]],
    hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
    hostVars: 4,
    hostBindings: function MatHint_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("align", null);
        \u0275\u0275classProp("mat-mdc-form-field-hint-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align",
      id: "id"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHint, [{
    type: Directive,
    args: [{
      selector: "mat-hint",
      host: {
        "class": "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
        "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
        "[id]": "id",
        "[attr.align]": "null"
      }
    }]
  }], null, {
    align: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var MAT_PREFIX = new InjectionToken("MatPrefix");
var MatPrefix = class _MatPrefix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static \u0275fac = function MatPrefix_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPrefix)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatPrefix,
    selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]],
    inputs: {
      _isTextSelector: [0, "matTextPrefix", "_isTextSelector"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_PREFIX,
      useExisting: _MatPrefix
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPrefix, [{
    type: Directive,
    args: [{
      selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, {
    _isTextSelector: [{
      type: Input,
      args: ["matTextPrefix"]
    }]
  });
})();
var MAT_SUFFIX = new InjectionToken("MatSuffix");
var MatSuffix = class _MatSuffix {
  set _isTextSelector(value) {
    this._isText = true;
  }
  _isText = false;
  static \u0275fac = function MatSuffix_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSuffix)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSuffix,
    selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
    inputs: {
      _isTextSelector: [0, "matTextSuffix", "_isTextSelector"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SUFFIX,
      useExisting: _MatSuffix
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSuffix, [{
    type: Directive,
    args: [{
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, {
    _isTextSelector: [{
      type: Input,
      args: ["matTextSuffix"]
    }]
  });
})();
var FLOATING_LABEL_PARENT = new InjectionToken("FloatingLabelParent");
var MatFormFieldFloatingLabel = class _MatFormFieldFloatingLabel {
  _elementRef = inject(ElementRef);
  get floating() {
    return this._floating;
  }
  set floating(value) {
    this._floating = value;
    if (this.monitorResize) {
      this._handleResize();
    }
  }
  _floating = false;
  get monitorResize() {
    return this._monitorResize;
  }
  set monitorResize(value) {
    this._monitorResize = value;
    if (this._monitorResize) {
      this._subscribeToResize();
    } else {
      this._resizeSubscription.unsubscribe();
    }
  }
  _monitorResize = false;
  _resizeObserver = inject(SharedResizeObserver);
  _ngZone = inject(NgZone);
  _parent = inject(FLOATING_LABEL_PARENT);
  _resizeSubscription = new Subscription();
  constructor() {
  }
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  getWidth() {
    return estimateScrollWidth(this._elementRef.nativeElement);
  }
  get element() {
    return this._elementRef.nativeElement;
  }
  _handleResize() {
    setTimeout(() => this._parent._handleLabelResized());
  }
  _subscribeToResize() {
    this._resizeSubscription.unsubscribe();
    this._ngZone.runOutsideAngular(() => {
      this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
        box: "border-box"
      }).subscribe(() => this._handleResize());
    });
  }
  static \u0275fac = function MatFormFieldFloatingLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldFloatingLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldFloatingLabel,
    selectors: [["label", "matFormFieldFloatingLabel", ""]],
    hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
    hostVars: 2,
    hostBindings: function MatFormFieldFloatingLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-floating-label--float-above", ctx.floating);
      }
    },
    inputs: {
      floating: "floating",
      monitorResize: "monitorResize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldFloatingLabel, [{
    type: Directive,
    args: [{
      selector: "label[matFormFieldFloatingLabel]",
      host: {
        "class": "mdc-floating-label mat-mdc-floating-label",
        "[class.mdc-floating-label--float-above]": "floating"
      }
    }]
  }], () => [], {
    floating: [{
      type: Input
    }],
    monitorResize: [{
      type: Input
    }]
  });
})();
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
var ACTIVATE_CLASS = "mdc-line-ripple--active";
var DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
var MatFormFieldLineRipple = class _MatFormFieldLineRipple {
  _elementRef = inject(ElementRef);
  _cleanupTransitionEnd;
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(Renderer2);
    ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd);
    });
  }
  activate() {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(DEACTIVATING_CLASS);
    classList.add(ACTIVATE_CLASS);
  }
  deactivate() {
    this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
  }
  _handleTransitionEnd = (event) => {
    const classList = this._elementRef.nativeElement.classList;
    const isDeactivating = classList.contains(DEACTIVATING_CLASS);
    if (event.propertyName === "opacity" && isDeactivating) {
      classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
    }
  };
  ngOnDestroy() {
    this._cleanupTransitionEnd();
  }
  static \u0275fac = function MatFormFieldLineRipple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldLineRipple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldLineRipple,
    selectors: [["div", "matFormFieldLineRipple", ""]],
    hostAttrs: [1, "mdc-line-ripple"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldLineRipple, [{
    type: Directive,
    args: [{
      selector: "div[matFormFieldLineRipple]",
      host: {
        "class": "mdc-line-ripple"
      }
    }]
  }], () => [], null);
})();
var MatFormFieldNotchedOutline = class _MatFormFieldNotchedOutline {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  open = false;
  _notch;
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    const label = element.querySelector(".mdc-floating-label");
    if (label) {
      element.classList.add("mdc-notched-outline--upgraded");
      if (typeof requestAnimationFrame === "function") {
        label.style.transitionDuration = "0s";
        this._ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => label.style.transitionDuration = "");
        });
      }
    } else {
      element.classList.add("mdc-notched-outline--no-label");
    }
  }
  _setNotchWidth(labelWidth) {
    const notch = this._notch.nativeElement;
    if (!this.open || !labelWidth) {
      notch.style.width = "";
    } else {
      const NOTCH_ELEMENT_PADDING = 8;
      const NOTCH_ELEMENT_BORDER = 1;
      notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
    }
  }
  _setMaxWidth(prefixAndSuffixWidth) {
    this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${prefixAndSuffixWidth}px)`);
  }
  static \u0275fac = function MatFormFieldNotchedOutline_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldNotchedOutline)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFormFieldNotchedOutline,
    selectors: [["div", "matFormFieldNotchedOutline", ""]],
    viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._notch = _t.first);
      }
    },
    hostAttrs: [1, "mdc-notched-outline"],
    hostVars: 2,
    hostBindings: function MatFormFieldNotchedOutline_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-notched-outline--notched", ctx.open);
      }
    },
    inputs: {
      open: [0, "matFormFieldNotchedOutlineOpen", "open"]
    },
    attrs: _c1,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 0,
    consts: [["notch", ""], [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"], [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"]],
    template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElement(0, "div", 1);
        \u0275\u0275domElementStart(1, "div", 2, 0);
        \u0275\u0275projection(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(4, "div", 3);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldNotchedOutline, [{
    type: Component,
    args: [{
      selector: "div[matFormFieldNotchedOutline]",
      host: {
        "class": "mdc-notched-outline",
        "[class.mdc-notched-outline--notched]": "open"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n'
    }]
  }], null, {
    open: [{
      type: Input,
      args: ["matFormFieldNotchedOutlineOpen"]
    }],
    _notch: [{
      type: ViewChild,
      args: ["notch"]
    }]
  });
})();
var MatFormFieldControl = class _MatFormFieldControl {
  value = null;
  stateChanges;
  id;
  placeholder;
  ngControl = null;
  focused = false;
  empty = false;
  shouldLabelFloat = false;
  required = false;
  disabled = false;
  errorState = false;
  controlType;
  autofilled;
  userAriaDescribedBy;
  disableAutomaticLabeling;
  describedByIds;
  static \u0275fac = function MatFormFieldControl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldControl)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFormFieldControl
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldControl, [{
    type: Directive
  }], null, null);
})();
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var MAT_FORM_FIELD = new InjectionToken("MatFormField");
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
var DEFAULT_APPEARANCE = "fill";
var DEFAULT_FLOAT_LABEL = "auto";
var DEFAULT_SUBSCRIPT_SIZING = "fixed";
var FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
var MatFormField = class _MatFormField {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _platform = inject(Platform);
  _idGenerator = inject(_IdGenerator);
  _ngZone = inject(NgZone);
  _defaults = inject(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
    optional: true
  });
  _currentDirection;
  _textField;
  _iconPrefixContainer;
  _textPrefixContainer;
  _iconSuffixContainer;
  _textSuffixContainer;
  _floatingLabel;
  _notchedOutline;
  _lineRipple;
  _iconPrefixContainerSignal = viewChild("iconPrefixContainer", ...ngDevMode ? [{
    debugName: "_iconPrefixContainerSignal"
  }] : []);
  _textPrefixContainerSignal = viewChild("textPrefixContainer", ...ngDevMode ? [{
    debugName: "_textPrefixContainerSignal"
  }] : []);
  _iconSuffixContainerSignal = viewChild("iconSuffixContainer", ...ngDevMode ? [{
    debugName: "_iconSuffixContainerSignal"
  }] : []);
  _textSuffixContainerSignal = viewChild("textSuffixContainer", ...ngDevMode ? [{
    debugName: "_textSuffixContainerSignal"
  }] : []);
  _prefixSuffixContainers = computed(() => {
    return [this._iconPrefixContainerSignal(), this._textPrefixContainerSignal(), this._iconSuffixContainerSignal(), this._textSuffixContainerSignal()].map((container) => container?.nativeElement).filter((e) => e !== void 0);
  }, ...ngDevMode ? [{
    debugName: "_prefixSuffixContainers"
  }] : []);
  _formFieldControl;
  _prefixChildren;
  _suffixChildren;
  _errorChildren;
  _hintChildren;
  _labelChild = contentChild(MatLabel, ...ngDevMode ? [{
    debugName: "_labelChild"
  }] : []);
  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }
  set hideRequiredMarker(value) {
    this._hideRequiredMarker = coerceBooleanProperty(value);
  }
  _hideRequiredMarker = false;
  color = "primary";
  get floatLabel() {
    return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
  }
  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _floatLabel;
  get appearance() {
    return this._appearanceSignal();
  }
  set appearance(value) {
    const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (newAppearance !== "fill" && newAppearance !== "outline") {
        throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
      }
    }
    this._appearanceSignal.set(newAppearance);
  }
  _appearanceSignal = signal(DEFAULT_APPEARANCE, ...ngDevMode ? [{
    debugName: "_appearanceSignal"
  }] : []);
  get subscriptSizing() {
    return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  set subscriptSizing(value) {
    this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  _subscriptSizing = null;
  get hintLabel() {
    return this._hintLabel;
  }
  set hintLabel(value) {
    this._hintLabel = value;
    this._processHints();
  }
  _hintLabel = "";
  _hasIconPrefix = false;
  _hasTextPrefix = false;
  _hasIconSuffix = false;
  _hasTextSuffix = false;
  _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
  _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
  _describedByIds;
  get _control() {
    return this._explicitFormFieldControl || this._formFieldControl;
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  _destroyed = new Subject();
  _isFocused = null;
  _explicitFormFieldControl;
  _previousControl = null;
  _previousControlValidatorFn = null;
  _stateChanges;
  _valueChanges;
  _describedByChanges;
  _outlineLabelOffsetResizeObserver = null;
  _animationsDisabled = _animationsDisabled();
  constructor() {
    const defaults = this._defaults;
    const dir = inject(Directionality);
    if (defaults) {
      if (defaults.appearance) {
        this.appearance = defaults.appearance;
      }
      this._hideRequiredMarker = Boolean(defaults?.hideRequiredMarker);
      if (defaults.color) {
        this.color = defaults.color;
      }
    }
    effect(() => this._currentDirection = dir.valueSignal());
    this._syncOutlineLabelOffset();
  }
  ngAfterViewInit() {
    this._updateFocusState();
    if (!this._animationsDisabled) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");
        }, 300);
      });
    }
    this._changeDetectorRef.detectChanges();
  }
  ngAfterContentInit() {
    this._assertFormFieldControl();
    this._initializeSubscript();
    this._initializePrefixAndSuffix();
  }
  ngAfterContentChecked() {
    this._assertFormFieldControl();
    if (this._control !== this._previousControl) {
      this._initializeControl(this._previousControl);
      if (this._control.ngControl && this._control.ngControl.control) {
        this._previousControlValidatorFn = this._control.ngControl.control.validator;
      }
      this._previousControl = this._control;
    }
    if (this._control.ngControl && this._control.ngControl.control) {
      const validatorFn = this._control.ngControl.control.validator;
      if (validatorFn !== this._previousControlValidatorFn) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  ngOnDestroy() {
    this._outlineLabelOffsetResizeObserver?.disconnect();
    this._stateChanges?.unsubscribe();
    this._valueChanges?.unsubscribe();
    this._describedByChanges?.unsubscribe();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getLabelId = computed(() => this._hasFloatingLabel() ? this._labelId : null, ...ngDevMode ? [{
    debugName: "getLabelId"
  }] : []);
  getConnectedOverlayOrigin() {
    return this._textField || this._elementRef;
  }
  _animateAndLockLabel() {
    if (this._hasFloatingLabel()) {
      this.floatLabel = "always";
    }
  }
  _initializeControl(previousControl) {
    const control = this._control;
    const classPrefix = "mat-mdc-form-field-type-";
    if (previousControl) {
      this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
    }
    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
    }
    this._stateChanges?.unsubscribe();
    this._stateChanges = control.stateChanges.subscribe(() => {
      this._updateFocusState();
      this._changeDetectorRef.markForCheck();
    });
    this._describedByChanges?.unsubscribe();
    this._describedByChanges = control.stateChanges.pipe(startWith([void 0, void 0]), map(() => [control.errorState, control.userAriaDescribedBy]), pairwise(), filter(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
      return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
    })).subscribe(() => this._syncDescribedByIds());
    this._valueChanges?.unsubscribe();
    if (control.ngControl && control.ngControl.valueChanges) {
      this._valueChanges = control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
  }
  _checkPrefixAndSuffixTypes() {
    this._hasIconPrefix = !!this._prefixChildren.find((p) => !p._isText);
    this._hasTextPrefix = !!this._prefixChildren.find((p) => p._isText);
    this._hasIconSuffix = !!this._suffixChildren.find((s) => !s._isText);
    this._hasTextSuffix = !!this._suffixChildren.find((s) => s._isText);
  }
  _initializePrefixAndSuffix() {
    this._checkPrefixAndSuffixTypes();
    merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._checkPrefixAndSuffixTypes();
      this._changeDetectorRef.markForCheck();
    });
  }
  _initializeSubscript() {
    this._hintChildren.changes.subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    this._errorChildren.changes.subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    this._validateHints();
    this._syncDescribedByIds();
  }
  _assertFormFieldControl() {
    if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  _updateFocusState() {
    const controlFocused = this._control.focused;
    if (controlFocused && !this._isFocused) {
      this._isFocused = true;
      this._lineRipple?.activate();
    } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
      this._isFocused = false;
      this._lineRipple?.deactivate();
    }
    this._elementRef.nativeElement.classList.toggle("mat-focused", controlFocused);
    this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", controlFocused);
  }
  _syncOutlineLabelOffset() {
    afterRenderEffect({
      earlyRead: () => {
        if (this._appearanceSignal() !== "outline") {
          this._outlineLabelOffsetResizeObserver?.disconnect();
          return null;
        }
        if (globalThis.ResizeObserver) {
          this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
            this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
          });
          for (const el of this._prefixSuffixContainers()) {
            this._outlineLabelOffsetResizeObserver.observe(el, {
              box: "border-box"
            });
          }
        }
        return this._getOutlinedLabelOffset();
      },
      write: (labelStyles) => this._writeOutlinedLabelStyles(labelStyles())
    });
  }
  _shouldAlwaysFloat() {
    return this.floatLabel === "always";
  }
  _hasOutline() {
    return this.appearance === "outline";
  }
  _forceDisplayInfixLabel() {
    return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
  }
  _hasFloatingLabel = computed(() => !!this._labelChild(), ...ngDevMode ? [{
    debugName: "_hasFloatingLabel"
  }] : []);
  _shouldLabelFloat() {
    if (!this._hasFloatingLabel()) {
      return false;
    }
    return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
  }
  _shouldForward(prop) {
    const control = this._control ? this._control.ngControl : null;
    return control && control[prop];
  }
  _getSubscriptMessageType() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
  }
  _handleLabelResized() {
    this._refreshOutlineNotchWidth();
  }
  _refreshOutlineNotchWidth() {
    if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
      this._notchedOutline?._setNotchWidth(0);
    } else {
      this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
    }
  }
  _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      let startHint;
      let endHint;
      this._hintChildren.forEach((hint) => {
        if (hint.align === "start") {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError("start");
          }
          startHint = hint;
        } else if (hint.align === "end") {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError("end");
          }
          endHint = hint;
        }
      });
    }
  }
  _syncDescribedByIds() {
    if (this._control) {
      let ids = [];
      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
        ids.push(...this._control.userAriaDescribedBy.split(" "));
      }
      if (this._getSubscriptMessageType() === "hint") {
        const startHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "start") : null;
        const endHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "end") : null;
        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }
        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map((error) => error.id));
      }
      const existingDescribedBy = this._control.describedByIds;
      let toAssign;
      if (existingDescribedBy) {
        const exclude = this._describedByIds || ids;
        toAssign = ids.concat(existingDescribedBy.filter((id) => id && !exclude.includes(id)));
      } else {
        toAssign = ids;
      }
      this._control.setDescribedByIds(toAssign);
      this._describedByIds = ids;
    }
  }
  _getOutlinedLabelOffset() {
    if (!this._hasOutline() || !this._floatingLabel) {
      return null;
    }
    if (!this._iconPrefixContainer && !this._textPrefixContainer) {
      return ["", null];
    }
    if (!this._isAttachedToDom()) {
      return null;
    }
    const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
    const textPrefixContainer = this._textPrefixContainer?.nativeElement;
    const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
    const textSuffixContainer = this._textSuffixContainer?.nativeElement;
    const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
    const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
    const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
    const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
    const negate = this._currentDirection === "rtl" ? "-1" : "1";
    const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
    const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
    const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
    const floatingLabelTransform = `var(--mat-mdc-form-field-label-transform, ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
    const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
    return [floatingLabelTransform, notchedOutlineWidth];
  }
  _writeOutlinedLabelStyles(styles) {
    if (styles !== null) {
      const [floatingLabelTransform, notchedOutlineWidth] = styles;
      if (this._floatingLabel) {
        this._floatingLabel.element.style.transform = floatingLabelTransform;
      }
      if (notchedOutlineWidth !== null) {
        this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
      }
    }
  }
  _isAttachedToDom() {
    const element = this._elementRef.nativeElement;
    if (element.getRootNode) {
      const rootNode = element.getRootNode();
      return rootNode && rootNode !== element;
    }
    return document.documentElement.contains(element);
  }
  static \u0275fac = function MatFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFormField,
    selectors: [["mat-form-field"]],
    contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx._labelChild, MatLabel, 5);
        \u0275\u0275contentQuery(dirIndex, MatFormFieldControl, 5)(dirIndex, MAT_PREFIX, 5)(dirIndex, MAT_SUFFIX, 5)(dirIndex, MAT_ERROR, 5)(dirIndex, MatHint, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._formFieldControl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._prefixChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._suffixChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._errorChildren = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._hintChildren = _t);
      }
    },
    viewQuery: function MatFormField_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._iconPrefixContainerSignal, _c3, 5)(ctx._textPrefixContainerSignal, _c4, 5)(ctx._iconSuffixContainerSignal, _c5, 5)(ctx._textSuffixContainerSignal, _c6, 5);
        \u0275\u0275viewQuery(_c7, 5)(_c3, 5)(_c4, 5)(_c5, 5)(_c6, 5)(MatFormFieldFloatingLabel, 5)(MatFormFieldNotchedOutline, 5)(MatFormFieldLineRipple, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(4);
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textField = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._iconPrefixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textPrefixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._iconSuffixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._textSuffixContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._floatingLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._notchedOutline = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lineRipple = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-form-field"],
    hostVars: 38,
    hostBindings: function MatFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-form-field-label-always-float", ctx._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", ctx._hasIconSuffix)("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-hide-placeholder", ctx._hasFloatingLabel() && !ctx._shouldLabelFloat())("mat-primary", ctx.color !== "accent" && ctx.color !== "warn")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
      }
    },
    inputs: {
      hideRequiredMarker: "hideRequiredMarker",
      color: "color",
      floatLabel: "floatLabel",
      appearance: "appearance",
      subscriptSizing: "subscriptSizing",
      hintLabel: "hintLabel"
    },
    exportAs: ["matFormField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_FORM_FIELD,
      useExisting: _MatFormField
    }, {
      provide: FLOATING_LABEL_PARENT,
      useExisting: _MatFormField
    }])],
    ngContentSelectors: _c9,
    decls: 18,
    vars: 21,
    consts: [["labelTemplate", ""], ["textField", ""], ["iconPrefixContainer", ""], ["textPrefixContainer", ""], ["textSuffixContainer", ""], ["iconSuffixContainer", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], [1, "mat-mdc-form-field-icon-prefix"], [1, "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], ["aria-atomic", "true", "aria-live", "polite", 1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
    template: function MatFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c8);
        \u0275\u0275template(0, MatFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 6, 1);
        \u0275\u0275listener("click", function MatFormField_Template_div_click_2_listener($event) {
          return ctx._control.onContainerClick($event);
        });
        \u0275\u0275conditionalCreate(4, MatFormField_Conditional_4_Template, 1, 0, "div", 7);
        \u0275\u0275elementStart(5, "div", 8);
        \u0275\u0275conditionalCreate(6, MatFormField_Conditional_6_Template, 2, 2, "div", 9);
        \u0275\u0275conditionalCreate(7, MatFormField_Conditional_7_Template, 3, 0, "div", 10);
        \u0275\u0275conditionalCreate(8, MatFormField_Conditional_8_Template, 3, 0, "div", 11);
        \u0275\u0275elementStart(9, "div", 12);
        \u0275\u0275conditionalCreate(10, MatFormField_Conditional_10_Template, 1, 1, null, 13);
        \u0275\u0275projection(11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, MatFormField_Conditional_12_Template, 3, 0, "div", 14);
        \u0275\u0275conditionalCreate(13, MatFormField_Conditional_13_Template, 3, 0, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, MatFormField_Conditional_14_Template, 1, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17);
        \u0275\u0275conditionalCreate(16, MatFormField_Case_16_Template, 2, 0, "div", 18)(17, MatFormField_Case_17_Template, 5, 1, "div", 19);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_17_0;
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-text-field--filled", !ctx._hasOutline())("mdc-text-field--outlined", ctx._hasOutline())("mdc-text-field--no-label", !ctx._hasFloatingLabel())("mdc-text-field--disabled", ctx._control.disabled)("mdc-text-field--invalid", ctx._control.errorState);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._hasOutline() && !ctx._control.disabled ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasOutline() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasIconPrefix ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasTextPrefix ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasTextSuffix ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasIconSuffix ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx._hasOutline() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-mdc-form-field-subscript-dynamic-size", ctx.subscriptSizing === "dynamic");
        const subscriptMessageType_r3 = ctx._getSubscriptMessageType();
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_17_0 = subscriptMessageType_r3) === "error" ? 16 : tmp_17_0 === "hint" ? 17 : -1);
      }
    },
    dependencies: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
    styles: ['.mdc-text-field {\n  display: inline-flex;\n  align-items: baseline;\n  padding: 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  will-change: opacity, transform, color;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.mdc-text-field__input {\n  width: 100%;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  background: none;\n  padding: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 28px;\n}\n.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {\n  display: none;\n}\n.mdc-text-field__input::-ms-clear {\n  display: none;\n}\n.mdc-text-field__input:focus {\n  outline: none;\n}\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n.mdc-text-field__input::placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--outlined .mdc-text-field__input {\n  display: flex;\n  border: none !important;\n  background-color: transparent;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  pointer-events: auto;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));\n  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));\n  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-text-field__input {\n    background-color: Window;\n  }\n}\n\n.mdc-text-field--filled {\n  height: 56px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));\n  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled {\n  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));\n}\n\n.mdc-text-field--outlined {\n  height: 56px;\n  overflow: visible;\n  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);\n}\n[dir=rtl] .mdc-text-field--outlined {\n  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);\n  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n}\n\n.mdc-floating-label {\n  position: absolute;\n  left: 0;\n  transform-origin: left top;\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform;\n}\n[dir=rtl] .mdc-floating-label {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n  text-align: right;\n}\n.mdc-text-field .mdc-floating-label {\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.mdc-notched-outline .mdc-floating-label {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  left: 4px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {\n  left: auto;\n  right: 4px;\n}\n.mdc-text-field--filled .mdc-floating-label {\n  left: 16px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--filled .mdc-floating-label {\n  left: auto;\n  right: 16px;\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  cursor: default;\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-floating-label {\n    z-index: 1;\n  }\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {\n  display: none;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--filled .mdc-floating-label {\n  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\n.mdc-floating-label--float-above {\n  cursor: auto;\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-37.25px) scale(1);\n  font-size: 0.75rem;\n}\n.mdc-notched-outline .mdc-floating-label--float-above {\n  text-overflow: clip;\n}\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: 133.3333333333%;\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-34.75px) scale(0.75);\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n\n.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 1px;\n  margin-right: 0;\n  content: "*";\n}\n[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 0;\n  margin-right: 1px;\n}\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none;\n}\n[dir=rtl] .mdc-notched-outline {\n  text-align: right;\n}\n.mdc-text-field--outlined .mdc-notched-outline {\n  z-index: 1;\n}\n\n.mat-mdc-notch-piece {\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n  border: none;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n}\n.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-width: 2px;\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));\n  border-width: var(--mat-form-field-outlined-outline-width, 1px);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {\n  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);\n}\n\n.mdc-notched-outline__leading {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n}\n[dir=rtl] .mdc-notched-outline__leading {\n  border-left: none;\n  border-right: 1px solid;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__trailing {\n  flex-grow: 1;\n  border-left: none;\n  border-right: 1px solid;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n[dir=rtl] .mdc-notched-outline__trailing {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__notch {\n  flex: 0 0 auto;\n  width: auto;\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {\n  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 1px;\n}\n.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 2px;\n}\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 0;\n  padding-right: 8px;\n  border-top: none;\n}\n[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 8px;\n  padding-right: 0;\n}\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  display: none;\n}\n\n.mdc-line-ripple::before, .mdc-line-ripple::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom-style: solid;\n  content: "";\n}\n.mdc-line-ripple::before {\n  z-index: 1;\n  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));\n}\n.mdc-line-ripple::after {\n  transform: scaleX(0);\n  opacity: 0;\n  z-index: 2;\n}\n.mdc-text-field--filled .mdc-line-ripple::after {\n  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));\n}\n\n.mdc-line-ripple--active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-line-ripple--deactivating::after {\n  opacity: 0;\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n\n.mat-mdc-form-field-textarea-control {\n  vertical-align: middle;\n  resize: vertical;\n  box-sizing: border-box;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: auto;\n}\n\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n}\n\n.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  line-height: normal;\n  pointer-events: all;\n  will-change: auto;\n}\n\n.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {\n  cursor: inherit;\n}\n\n.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  height: auto;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {\n  height: 23px;\n}\n\n.mat-mdc-text-field-wrapper {\n  height: auto;\n  flex: auto;\n  will-change: auto;\n}\n\n.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n  --mat-mdc-form-field-label-offset-x: -16px;\n}\n\n.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n[dir=rtl] .mat-mdc-text-field-wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n.mat-form-field-disabled .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n  opacity: 1;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {\n  left: auto;\n  right: auto;\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {\n  display: inline-block;\n}\n\n.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n\n.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: none;\n  border-right: 1px solid transparent;\n}\n\n.mat-mdc-form-field-infix {\n  min-height: var(--mat-form-field-container-height, 56px);\n  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);\n  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);\n}\n.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {\n  padding-top: var(--mat-form-field-container-vertical-padding, 16px);\n  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {\n  top: calc(var(--mat-form-field-container-height, 56px) / 2);\n}\n\n.mdc-text-field--filled .mat-mdc-floating-label {\n  display: var(--mat-form-field-filled-label-display, block);\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))\n    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));\n  transform: var(--mat-mdc-form-field-label-transform);\n}\n\n@keyframes _mat-form-field-subscript-animation {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mat-mdc-form-field-subscript-wrapper {\n  box-sizing: border-box;\n  width: 100%;\n  position: relative;\n}\n\n.mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-error-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 16px;\n  opacity: 1;\n  transform: translateY(0);\n  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {\n  position: static;\n}\n\n.mat-mdc-form-field-bottom-align::before {\n  content: "";\n  display: inline-block;\n  height: 16px;\n}\n\n.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {\n  content: unset;\n}\n\n.mat-mdc-form-field-hint-end {\n  order: 1;\n}\n\n.mat-mdc-form-field-hint-wrapper {\n  display: flex;\n}\n\n.mat-mdc-form-field-hint-spacer {\n  flex: 1 0 1em;\n}\n\n.mat-mdc-form-field-error {\n  display: block;\n  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));\n}\n\n.mat-mdc-form-field-subscript-wrapper,\n.mat-mdc-form-field-bottom-align::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));\n  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));\n  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));\n  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));\n  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));\n}\n\n.mat-mdc-form-field-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {\n  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {\n  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);\n}\n\nselect.mat-mdc-form-field-input-control {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: transparent;\n  display: inline-flex;\n  box-sizing: border-box;\n}\nselect.mat-mdc-form-field-input-control:not(:disabled) {\n  cursor: pointer;\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {\n  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {\n  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));\n}\n\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -2.5px;\n  pointer-events: none;\n  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  right: auto;\n  left: 0;\n}\n.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {\n  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {\n  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 15px;\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 0;\n  padding-left: 15px;\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {\n    outline: solid 1px;\n  }\n}\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {\n    outline-color: GrayText;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {\n    outline: dashed 3px;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-form-field.mat-focused .mdc-notched-outline {\n    border: dashed 3px;\n  }\n}\n\n.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {\n  line-height: 1;\n}\n.mat-mdc-form-field-input-control::-webkit-datetime-edit {\n  line-height: 1;\n  padding: 0;\n  margin-bottom: -2px;\n}\n\n.mat-mdc-form-field {\n  --mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: left;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));\n  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: var(--mat-form-field-outlined-label-text-populated-size);\n}\n[dir=rtl] .mat-mdc-form-field {\n  text-align: right;\n}\n\n.mat-mdc-form-field-flex {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n}\n\n.mat-mdc-form-field-icon-prefix,\n.mat-mdc-form-field-icon-suffix {\n  align-self: center;\n  line-height: 0;\n  pointer-events: auto;\n  position: relative;\n  z-index: 1;\n}\n.mat-mdc-form-field-icon-prefix > .mat-icon,\n.mat-mdc-form-field-icon-suffix > .mat-icon {\n  padding: 0 12px;\n  box-sizing: content-box;\n}\n\n.mat-mdc-form-field-icon-prefix {\n  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {\n  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));\n}\n.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));\n}\n.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));\n}\n\n.mat-mdc-form-field-icon-prefix,\n[dir=rtl] .mat-mdc-form-field-icon-suffix {\n  padding: 0 4px 0 0;\n}\n\n.mat-mdc-form-field-icon-suffix,\n[dir=rtl] .mat-mdc-form-field-icon-prefix {\n  padding: 0 0 0 4px;\n}\n\n.mat-mdc-form-field-subscript-wrapper .mat-icon,\n.mat-mdc-form-field label .mat-icon {\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n}\n\n.mat-mdc-form-field-infix {\n  flex: auto;\n  min-width: 0;\n  width: 180px;\n  position: relative;\n  box-sizing: border-box;\n}\n.mat-mdc-form-field-infix:has(textarea[cols]) {\n  width: auto;\n}\n\n.mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: -1px;\n  -webkit-clip-path: inset(-9em -999em -9em 1px);\n  clip-path: inset(-9em -999em -9em 1px);\n}\n[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: 0;\n  margin-right: -1px;\n  -webkit-clip-path: inset(-9em 1px -9em -999em);\n  clip-path: inset(-9em 1px -9em -999em);\n}\n\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {\n  transition-duration: 75ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {\n  animation-duration: 300ms;\n}\n\n.mdc-notched-outline .mdc-floating-label {\n  max-width: calc(100% + 1px);\n}\n\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: calc(133.3333333333% + 1px);\n}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormField, [{
    type: Component,
    args: [{
      selector: "mat-form-field",
      exportAs: "matFormField",
      host: {
        "class": "mat-mdc-form-field",
        "[class.mat-mdc-form-field-label-always-float]": "_shouldAlwaysFloat()",
        "[class.mat-mdc-form-field-has-icon-prefix]": "_hasIconPrefix",
        "[class.mat-mdc-form-field-has-icon-suffix]": "_hasIconSuffix",
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-hide-placeholder]": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "[class.mat-primary]": 'color !== "accent" && color !== "warn"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }],
      imports: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div aria-atomic="true" aria-live="polite"\n  class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n  [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  @switch (subscriptMessageType) {\n    @case (\'error\') {\n      <div class="mat-mdc-form-field-error-wrapper">\n        <ng-content select="mat-error, [matError]"></ng-content>\n      </div>\n    }\n\n    @case (\'hint\') {\n      <div class="mat-mdc-form-field-hint-wrapper">\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      </div>\n    }\n  }\n</div>\n',
      styles: ['.mdc-text-field {\n  display: inline-flex;\n  align-items: baseline;\n  padding: 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  will-change: opacity, transform, color;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.mdc-text-field__input {\n  width: 100%;\n  min-width: 0;\n  border: none;\n  border-radius: 0;\n  background: none;\n  padding: 0;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  height: 28px;\n}\n.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {\n  display: none;\n}\n.mdc-text-field__input::-ms-clear {\n  display: none;\n}\n.mdc-text-field__input:focus {\n  outline: none;\n}\n.mdc-text-field__input:invalid {\n  box-shadow: none;\n}\n.mdc-text-field__input::placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field__input:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  opacity: 1;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {\n  opacity: 0;\n}\n.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {\n  height: 100%;\n}\n.mdc-text-field--outlined .mdc-text-field__input {\n  display: flex;\n  border: none !important;\n  background-color: transparent;\n}\n.mdc-text-field--disabled .mdc-text-field__input {\n  pointer-events: auto;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));\n  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));\n  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {\n  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {\n  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-text-field__input {\n    background-color: Window;\n  }\n}\n\n.mdc-text-field--filled {\n  height: 56px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));\n  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) {\n  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled {\n  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));\n}\n\n.mdc-text-field--outlined {\n  height: 56px;\n  overflow: visible;\n  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);\n}\n[dir=rtl] .mdc-text-field--outlined {\n  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);\n  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n}\n\n.mdc-floating-label {\n  position: absolute;\n  left: 0;\n  transform-origin: left top;\n  line-height: 1.15rem;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  overflow: hidden;\n  will-change: transform;\n}\n[dir=rtl] .mdc-floating-label {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n  text-align: right;\n}\n.mdc-text-field .mdc-floating-label {\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.mdc-notched-outline .mdc-floating-label {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  left: 4px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {\n  left: auto;\n  right: 4px;\n}\n.mdc-text-field--filled .mdc-floating-label {\n  left: 16px;\n  right: auto;\n}\n[dir=rtl] .mdc-text-field--filled .mdc-floating-label {\n  left: auto;\n  right: 16px;\n}\n.mdc-text-field--disabled .mdc-floating-label {\n  cursor: default;\n}\n@media (forced-colors: active) {\n  .mdc-text-field--disabled .mdc-floating-label {\n    z-index: 1;\n  }\n}\n.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {\n  display: none;\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--filled .mdc-floating-label {\n  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {\n  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {\n  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {\n  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {\n  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--outlined .mdc-floating-label {\n  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\n.mdc-floating-label--float-above {\n  cursor: auto;\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--filled .mdc-floating-label--float-above {\n  transform: translateY(-106%) scale(0.75);\n}\n.mdc-text-field--outlined .mdc-floating-label--float-above {\n  transform: translateY(-37.25px) scale(1);\n  font-size: 0.75rem;\n}\n.mdc-notched-outline .mdc-floating-label--float-above {\n  text-overflow: clip;\n}\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: 133.3333333333%;\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  transform: translateY(-34.75px) scale(0.75);\n}\n.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: 1rem;\n}\n\n.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 1px;\n  margin-right: 0;\n  content: "*";\n}\n[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {\n  margin-left: 0;\n  margin-right: 1px;\n}\n\n.mdc-notched-outline {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none;\n}\n[dir=rtl] .mdc-notched-outline {\n  text-align: right;\n}\n.mdc-text-field--outlined .mdc-notched-outline {\n  z-index: 1;\n}\n\n.mat-mdc-notch-piece {\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n  border: none;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n}\n.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-width: 2px;\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));\n  border-width: var(--mat-form-field-outlined-outline-width, 1px);\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));\n}\n.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {\n  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));\n}\n.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {\n  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);\n}\n\n.mdc-notched-outline__leading {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {\n  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));\n}\n[dir=rtl] .mdc-notched-outline__leading {\n  border-left: none;\n  border-right: 1px solid;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__trailing {\n  flex-grow: 1;\n  border-left: none;\n  border-right: 1px solid;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n[dir=rtl] .mdc-notched-outline__trailing {\n  border-left: 1px solid;\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));\n}\n\n.mdc-notched-outline__notch {\n  flex: 0 0 auto;\n  width: auto;\n}\n.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {\n  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));\n}\n.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 1px;\n}\n.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-top: 2px;\n}\n.mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 0;\n  padding-right: 8px;\n  border-top: none;\n}\n[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {\n  padding-left: 8px;\n  padding-right: 0;\n}\n.mdc-notched-outline--no-label .mdc-notched-outline__notch {\n  display: none;\n}\n\n.mdc-line-ripple::before, .mdc-line-ripple::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom-style: solid;\n  content: "";\n}\n.mdc-line-ripple::before {\n  z-index: 1;\n  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));\n}\n.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));\n}\n.mdc-line-ripple::after {\n  transform: scaleX(0);\n  opacity: 0;\n  z-index: 2;\n}\n.mdc-text-field--filled .mdc-line-ripple::after {\n  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);\n}\n.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));\n}\n.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {\n  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));\n}\n\n.mdc-line-ripple--active::after {\n  transform: scaleX(1);\n  opacity: 1;\n}\n\n.mdc-line-ripple--deactivating::after {\n  opacity: 0;\n}\n\n.mdc-text-field--disabled {\n  pointer-events: none;\n}\n\n.mat-mdc-form-field-textarea-control {\n  vertical-align: middle;\n  resize: vertical;\n  box-sizing: border-box;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: auto;\n}\n\n.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  border: none;\n}\n\n.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  line-height: normal;\n  pointer-events: all;\n  will-change: auto;\n}\n\n.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {\n  cursor: inherit;\n}\n\n.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n  height: auto;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {\n  height: 23px;\n}\n\n.mat-mdc-text-field-wrapper {\n  height: auto;\n  flex: auto;\n  will-change: auto;\n}\n\n.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n  --mat-mdc-form-field-label-offset-x: -16px;\n}\n\n.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n[dir=rtl] .mat-mdc-text-field-wrapper {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {\n  padding-left: 0;\n}\n[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {\n  padding-right: 0;\n}\n\n.mat-form-field-disabled .mdc-text-field__input::placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {\n  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n  opacity: 1;\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {\n  left: auto;\n  right: auto;\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {\n  display: inline-block;\n}\n\n.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {\n  padding-top: 0;\n}\n\n.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {\n  border-left: none;\n  border-right: 1px solid transparent;\n}\n\n.mat-mdc-form-field-infix {\n  min-height: var(--mat-form-field-container-height, 56px);\n  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);\n  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);\n}\n.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {\n  padding-top: var(--mat-form-field-container-vertical-padding, 16px);\n  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);\n}\n\n.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {\n  top: calc(var(--mat-form-field-container-height, 56px) / 2);\n}\n\n.mdc-text-field--filled .mat-mdc-floating-label {\n  display: var(--mat-form-field-filled-label-display, block);\n}\n\n.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))\n    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));\n  transform: var(--mat-mdc-form-field-label-transform);\n}\n\n@keyframes _mat-form-field-subscript-animation {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mat-mdc-form-field-subscript-wrapper {\n  box-sizing: border-box;\n  width: 100%;\n  position: relative;\n}\n\n.mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-error-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 0 16px;\n  opacity: 1;\n  transform: translateY(0);\n  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {\n  position: static;\n}\n\n.mat-mdc-form-field-bottom-align::before {\n  content: "";\n  display: inline-block;\n  height: 16px;\n}\n\n.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {\n  content: unset;\n}\n\n.mat-mdc-form-field-hint-end {\n  order: 1;\n}\n\n.mat-mdc-form-field-hint-wrapper {\n  display: flex;\n}\n\n.mat-mdc-form-field-hint-spacer {\n  flex: 1 0 1em;\n}\n\n.mat-mdc-form-field-error {\n  display: block;\n  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));\n}\n\n.mat-mdc-form-field-subscript-wrapper,\n.mat-mdc-form-field-bottom-align::before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));\n  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));\n  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));\n  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));\n  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));\n}\n\n.mat-mdc-form-field-focus-overlay {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {\n  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {\n  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);\n}\n\nselect.mat-mdc-form-field-input-control {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: transparent;\n  display: inline-flex;\n  box-sizing: border-box;\n}\nselect.mat-mdc-form-field-input-control:not(:disabled) {\n  cursor: pointer;\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {\n  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));\n}\nselect.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {\n  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));\n}\n\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -2.5px;\n  pointer-events: none;\n  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {\n  right: auto;\n  left: 0;\n}\n.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {\n  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {\n  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 15px;\n}\n[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {\n  padding-right: 0;\n  padding-left: 15px;\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {\n    outline: solid 1px;\n  }\n}\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {\n    outline-color: GrayText;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {\n    outline: dashed 3px;\n  }\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-form-field.mat-focused .mdc-notched-outline {\n    border: dashed 3px;\n  }\n}\n\n.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {\n  line-height: 1;\n}\n.mat-mdc-form-field-input-control::-webkit-datetime-edit {\n  line-height: 1;\n  padding: 0;\n  margin-bottom: -2px;\n}\n\n.mat-mdc-form-field {\n  --mat-mdc-form-field-floating-label-scale: 0.75;\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n  text-align: left;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));\n  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {\n  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));\n}\n.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  font-size: var(--mat-form-field-outlined-label-text-populated-size);\n}\n[dir=rtl] .mat-mdc-form-field {\n  text-align: right;\n}\n\n.mat-mdc-form-field-flex {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.mat-mdc-text-field-wrapper {\n  width: 100%;\n  z-index: 0;\n}\n\n.mat-mdc-form-field-icon-prefix,\n.mat-mdc-form-field-icon-suffix {\n  align-self: center;\n  line-height: 0;\n  pointer-events: auto;\n  position: relative;\n  z-index: 1;\n}\n.mat-mdc-form-field-icon-prefix > .mat-icon,\n.mat-mdc-form-field-icon-suffix > .mat-icon {\n  padding: 0 12px;\n  box-sizing: content-box;\n}\n\n.mat-mdc-form-field-icon-prefix {\n  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {\n  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));\n}\n.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));\n}\n.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {\n  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));\n}\n\n.mat-mdc-form-field-icon-prefix,\n[dir=rtl] .mat-mdc-form-field-icon-suffix {\n  padding: 0 4px 0 0;\n}\n\n.mat-mdc-form-field-icon-suffix,\n[dir=rtl] .mat-mdc-form-field-icon-prefix {\n  padding: 0 0 0 4px;\n}\n\n.mat-mdc-form-field-subscript-wrapper .mat-icon,\n.mat-mdc-form-field label .mat-icon {\n  width: 1em;\n  height: 1em;\n  font-size: inherit;\n}\n\n.mat-mdc-form-field-infix {\n  flex: auto;\n  min-width: 0;\n  width: 180px;\n  position: relative;\n  box-sizing: border-box;\n}\n.mat-mdc-form-field-infix:has(textarea[cols]) {\n  width: auto;\n}\n\n.mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: -1px;\n  -webkit-clip-path: inset(-9em -999em -9em 1px);\n  clip-path: inset(-9em -999em -9em 1px);\n}\n[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {\n  margin-left: 0;\n  margin-right: -1px;\n  -webkit-clip-path: inset(-9em 1px -9em -999em);\n  clip-path: inset(-9em 1px -9em -999em);\n}\n\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {\n  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {\n  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {\n  transition-delay: 40ms;\n  transition-duration: 110ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {\n  transition-duration: 75ms;\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,\n.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {\n  animation-duration: 300ms;\n}\n\n.mdc-notched-outline .mdc-floating-label {\n  max-width: calc(100% + 1px);\n}\n\n.mdc-notched-outline--upgraded .mdc-floating-label--float-above {\n  max-width: calc(133.3333333333% + 1px);\n}\n']
    }]
  }], () => [], {
    _textField: [{
      type: ViewChild,
      args: ["textField"]
    }],
    _iconPrefixContainer: [{
      type: ViewChild,
      args: ["iconPrefixContainer"]
    }],
    _textPrefixContainer: [{
      type: ViewChild,
      args: ["textPrefixContainer"]
    }],
    _iconSuffixContainer: [{
      type: ViewChild,
      args: ["iconSuffixContainer"]
    }],
    _textSuffixContainer: [{
      type: ViewChild,
      args: ["textSuffixContainer"]
    }],
    _floatingLabel: [{
      type: ViewChild,
      args: [MatFormFieldFloatingLabel]
    }],
    _notchedOutline: [{
      type: ViewChild,
      args: [MatFormFieldNotchedOutline]
    }],
    _lineRipple: [{
      type: ViewChild,
      args: [MatFormFieldLineRipple]
    }],
    _iconPrefixContainerSignal: [{
      type: ViewChild,
      args: ["iconPrefixContainer", {
        isSignal: true
      }]
    }],
    _textPrefixContainerSignal: [{
      type: ViewChild,
      args: ["textPrefixContainer", {
        isSignal: true
      }]
    }],
    _iconSuffixContainerSignal: [{
      type: ViewChild,
      args: ["iconSuffixContainer", {
        isSignal: true
      }]
    }],
    _textSuffixContainerSignal: [{
      type: ViewChild,
      args: ["textSuffixContainer", {
        isSignal: true
      }]
    }],
    _formFieldControl: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }],
    _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }],
    _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: ContentChildren,
      args: [MatHint, {
        descendants: true
      }]
    }],
    _labelChild: [{
      type: ContentChild,
      args: [forwardRef(() => MatLabel), {
        isSignal: true
      }]
    }],
    hideRequiredMarker: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    floatLabel: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    subscriptSizing: [{
      type: Input
    }],
    hintLabel: [{
      type: Input
    }]
  });
})();

// ../node_modules/@angular/material/fesm2022/form-field.mjs
var MatFormFieldModule = class _MatFormFieldModule {
  static \u0275fac = function MatFormFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatFormFieldModule,
    imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ObserversModule, MatFormField, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
    }]
  }], null, null);
})();

// ../node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
  static \u0275fac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __CdkTextFieldStyleLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-text-field-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {
    },
    styles: ["textarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes cdk-text-field-autofill-start { /*!*/ }\n@keyframes cdk-text-field-autofill-end { /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes cdk-text-field-autofill-start { /*!*/ }\n@keyframes cdk-text-field-autofill-end { /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = (event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
  static \u0275fac = function AutofillMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutofillMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutofillMonitor,
    factory: _AutofillMonitor.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
  static \u0275fac = function CdkAutofill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAutofill)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  _previousMinRows = -1;
  _textareaElement;
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  _cachedLineHeight;
  _cachedPlaceholderHeight;
  _document = inject(DOCUMENT);
  _hasFocus = false;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  _handleFocusEvent = (event) => {
    this._hasFocus = event.type === "focus";
  };
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
  static \u0275fac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextareaAutosize)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: [0, "cdkAutosizeMinRows", "minRows"],
      maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
      enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var TextFieldModule = class _TextFieldModule {
  static \u0275fac = function TextFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextFieldModule,
    imports: [CdkAutofill, CdkTextareaAutosize],
    exports: [CdkAutofill, CdkTextareaAutosize]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// ../node_modules/@angular/material/fesm2022/_input-value-accessor-chunk.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// ../node_modules/@angular/material/fesm2022/_error-options-chunk.mjs
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
  static \u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ShowOnDirtyErrorStateMatcher,
    factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
  static \u0275fac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorStateMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ErrorStateMatcher,
    factory: _ErrorStateMatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// ../node_modules/@angular/material/fesm2022/_error-state-chunk.mjs
var _ErrorStateTracker = class {
  _defaultMatcher;
  ngControl;
  _parentFormGroup;
  _parentForm;
  _stateChanges;
  errorState = false;
  matcher;
  constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
    this._defaultMatcher = _defaultMatcher;
    this.ngControl = ngControl;
    this._parentFormGroup = _parentFormGroup;
    this._parentForm = _parentForm;
    this._stateChanges = _stateChanges;
  }
  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const matcher = this.matcher || this._defaultMatcher;
    const control = this.ngControl ? this.ngControl.control : null;
    const newState = matcher?.isErrorState(control, parent) ?? false;
    if (newState !== oldState) {
      this.errorState = newState;
      this._stateChanges.next();
    }
  }
};

// ../node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder = null;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  _isServer = false;
  _isNativeSelect = false;
  _isTextarea = false;
  _isInFormField = false;
  focused = false;
  stateChanges = new Subject();
  controlType = "mat-input";
  autofilled = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  placeholder;
  name;
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  userAriaDescribedBy;
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  disabledInteractive;
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  _getPlaceholder() {
    return this.placeholder || null;
  }
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = (event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  };
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
  static \u0275fac = function MatInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-mdc-input-element"],
    hostVars: 21,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
        \u0275\u0275classProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
      }
    },
    inputs: {
      disabled: "disabled",
      id: "id",
      placeholder: "placeholder",
      name: "name",
      required: "required",
      type: "type",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      value: "value",
      readonly: "readonly",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    exportAs: ["matInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatInput
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatInputModule = class _MatInputModule {
  static \u0275fac = function MatInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInputModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatInputModule,
    imports: [MatFormFieldModule, MatInput],
    exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatFormFieldModule, MatFormFieldModule, TextFieldModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
    }]
  }], null, null);
})();

// src/app/shared/ui/text-input/text-input.component.ts
function TextInputComponent_Conditional_4_Template(rf, ctx) {
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
var TextInputComponent = class _TextInputComponent {
  constructor() {
    this.control = input.required(...ngDevMode ? [{ debugName: "control" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.type = input("text", ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    ));
    this.autocomplete = input("", ...ngDevMode ? [{ debugName: "autocomplete" }] : (
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
    this.\u0275fac = function TextInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextInputComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextInputComponent, selectors: [["ui-text-input"]], inputs: { control: [1, "control"], label: [1, "label"], type: [1, "type"], autocomplete: [1, "autocomplete"], maxLength: [1, "maxLength"], error: [1, "error"] }, decls: 5, vars: 6, consts: [["appearance", "outline"], ["matInput", "", 3, "type", "formControl"]], template: function TextInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-label");
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "input", 1);
        \u0275\u0275conditionalCreate(4, TextInputComponent_Conditional_4_Template, 2, 1, "mat-error");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275property("type", ctx.type())("formControl", ctx.control());
        \u0275\u0275attribute("autocomplete", ctx.autocomplete() || null)("maxlength", ctx.maxLength() || null);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.control().invalid && ctx.control().touched && ctx.error() ? 4 : -1);
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextInputComponent, [{
    type: Component,
    args: [{
      selector: "ui-text-input",
      standalone: true,
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
      template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ label() }}</mat-label>
      <input
        matInput
        [type]="type()"
        [formControl]="control()"
        [attr.autocomplete]="autocomplete() || null"
        [attr.maxlength]="maxLength() || null"
      >
      @if (control().invalid && control().touched && error()) {
        <mat-error>{{ error() }}</mat-error>
      }
    </mat-form-field>
  `
    }]
  }], null, { control: [{ type: Input, args: [{ isSignal: true, alias: "control", required: true }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], maxLength: [{ type: Input, args: [{ isSignal: true, alias: "maxLength", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextInputComponent, { className: "TextInputComponent", filePath: "src/app/shared/ui/text-input/text-input.component.ts", lineNumber: 26 });
})();

export {
  DefaultValueAccessor,
  Validators,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroup,
  FormControl,
  ɵNgNoValidate,
  FormArray,
  FormControlDirective,
  FormGroupDirective,
  ReactiveFormsModule,
  MatLabel,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  TextInputComponent
};
//# sourceMappingURL=chunk-LQ5V6LWH.js.map
