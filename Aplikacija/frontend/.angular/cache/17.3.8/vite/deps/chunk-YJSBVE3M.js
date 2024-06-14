import {
  NG_VALUE_ACCESSOR
} from "./chunk-W5LCDGX2.js";
import {
  CommonModule,
  NgIf
} from "./chunk-FFHMW6MK.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZSXHSHHJ.js";
import {
  queueScheduler
} from "./chunk-6DGBS3KI.js";
import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  map,
  observeOn,
  scan
} from "./chunk-BBOSN5EW.js";

// node_modules/ngx-bootstrap/mini-ngrx/fesm2022/ngx-bootstrap-mini-ngrx.mjs
var MiniState = class extends BehaviorSubject {
  constructor(_initialState, actionsDispatcher$, reducer) {
    super(_initialState);
    const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
    const state$ = actionInQueue$.pipe(scan((state, action) => {
      if (!action) {
        return state;
      }
      return reducer(state, action);
    }, _initialState));
    state$.subscribe((value) => this.next(value));
  }
};
var MiniStore = class _MiniStore extends Observable {
  constructor(_dispatcher, _reducer, state$) {
    super();
    this._dispatcher = _dispatcher;
    this._reducer = _reducer;
    this.source = state$;
  }
  select(pathOrMapFn) {
    const mapped$ = this.source?.pipe(map(pathOrMapFn)) || new Observable().pipe(map(pathOrMapFn));
    return mapped$.pipe(distinctUntilChanged());
  }
  lift(operator) {
    const store = new _MiniStore(this._dispatcher, this._reducer, this);
    store.operator = operator;
    return store;
  }
  dispatch(action) {
    this._dispatcher.next(action);
  }
  next(action) {
    this._dispatcher.next(action);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(err) {
    this._dispatcher.error(err);
  }
  complete() {
  }
};

// node_modules/ngx-bootstrap/timepicker/fesm2022/ngx-bootstrap-timepicker.mjs
function TimepickerComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(ctx_r1.minuteStep));
    });
    ɵɵelement(2, "span", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(ctx_r1.secondsStep));
    });
    ɵɵelement(2, "span", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canIncrementSeconds || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function TimepickerComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " : ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4)(1, "input", 5);
    ɵɵlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.prevDef($event);
      return ɵɵresetView(ctx_r1.changeMinutes(ctx_r1.minuteStep * ctx_r1.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(ctx_r1.minuteStep, "key"));
    })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(-ctx_r1.minuteStep, "key"));
    })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateMinutes($event.target));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("has-error", ctx_r1.invalidMinutes);
    ɵɵadvance();
    ɵɵclassProp("is-invalid", ctx_r1.invalidMinutes);
    ɵɵproperty("placeholder", ctx_r1.minutesPlaceholder)("readonly", ctx_r1.readonlyInput)("disabled", ctx_r1.disabled)("value", ctx_r1.minutes);
    ɵɵattribute("aria-label", ctx_r1.labelMinutes);
  }
}
function TimepickerComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " : ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4)(1, "input", 5);
    ɵɵlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.prevDef($event);
      return ɵɵresetView(ctx_r1.changeSeconds(ctx_r1.secondsStep * ctx_r1.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(ctx_r1.secondsStep, "key"));
    })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(-ctx_r1.secondsStep, "key"));
    })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSeconds($event.target));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("has-error", ctx_r1.invalidSeconds);
    ɵɵadvance();
    ɵɵclassProp("is-invalid", ctx_r1.invalidSeconds);
    ɵɵproperty("placeholder", ctx_r1.secondsPlaceholder)("readonly", ctx_r1.readonlyInput)("disabled", ctx_r1.disabled)("value", ctx_r1.seconds);
    ɵɵattribute("aria-label", ctx_r1.labelSeconds);
  }
}
function TimepickerComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "button", 8);
    ɵɵlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridian());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.isEditable || !ctx_r1.canToggleMeridian);
    ɵɵproperty("disabled", !ctx_r1.isEditable || !ctx_r1.canToggleMeridian);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r1.meridian, " ");
  }
}
function TimepickerComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinutes(-ctx_r1.minuteStep));
    });
    ɵɵelement(2, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canDecrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "a", 1);
    ɵɵlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeSeconds(-ctx_r1.secondsStep));
    });
    ɵɵelement(2, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("disabled", !ctx_r1.canDecrementSeconds || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
}
function TimepickerComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
var _TimepickerActions = class _TimepickerActions {
  writeValue(value) {
    return {
      type: _TimepickerActions.WRITE_VALUE,
      payload: value
    };
  }
  changeHours(event) {
    return {
      type: _TimepickerActions.CHANGE_HOURS,
      payload: event
    };
  }
  changeMinutes(event) {
    return {
      type: _TimepickerActions.CHANGE_MINUTES,
      payload: event
    };
  }
  changeSeconds(event) {
    return {
      type: _TimepickerActions.CHANGE_SECONDS,
      payload: event
    };
  }
  setTime(value) {
    return {
      type: _TimepickerActions.SET_TIME_UNIT,
      payload: value
    };
  }
  updateControls(value) {
    return {
      type: _TimepickerActions.UPDATE_CONTROLS,
      payload: value
    };
  }
};
_TimepickerActions.WRITE_VALUE = "[timepicker] write value from ng model";
_TimepickerActions.CHANGE_HOURS = "[timepicker] change hours";
_TimepickerActions.CHANGE_MINUTES = "[timepicker] change minutes";
_TimepickerActions.CHANGE_SECONDS = "[timepicker] change seconds";
_TimepickerActions.SET_TIME_UNIT = "[timepicker] set time unit";
_TimepickerActions.UPDATE_CONTROLS = "[timepicker] update controls";
_TimepickerActions.ɵfac = function TimepickerActions_Factory(t) {
  return new (t || _TimepickerActions)();
};
_TimepickerActions.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerActions,
  factory: _TimepickerActions.ɵfac,
  providedIn: "platform"
});
var TimepickerActions = _TimepickerActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerActions, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], null, null);
})();
var dex = 10;
var hoursPerDay = 24;
var hoursPerDayHalf = 12;
var minutesPerHour = 60;
var secondsPerMinute = 60;
function isValidDate(value) {
  if (!value) {
    return false;
  }
  if (value instanceof Date && isNaN(value.getHours())) {
    return false;
  }
  if (typeof value === "string") {
    return isValidDate(new Date(value));
  }
  return true;
}
function isValidLimit(controls, newDate) {
  if (controls.min && newDate < controls.min) {
    return false;
  }
  if (controls.max && newDate > controls.max) {
    return false;
  }
  return true;
}
function toNumber(value) {
  if (typeof value === "undefined") {
    return NaN;
  }
  if (typeof value === "number") {
    return value;
  }
  return parseInt(value, dex);
}
function parseHours(value, isPM = false) {
  const hour = toNumber(value);
  if (isNaN(hour) || hour < 0 || hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
    return NaN;
  }
  return hour;
}
function parseMinutes(value) {
  const minute = toNumber(value);
  if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
    return NaN;
  }
  return minute;
}
function parseSeconds(value) {
  const seconds = toNumber(value);
  if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
    return NaN;
  }
  return seconds;
}
function parseTime(value) {
  if (typeof value === "string") {
    return new Date(value);
  }
  return value;
}
function changeTime(value, diff) {
  if (!value) {
    return changeTime(createDate(/* @__PURE__ */ new Date(), 0, 0, 0), diff);
  }
  if (!diff) {
    return value;
  }
  let hour = value.getHours();
  let minutes = value.getMinutes();
  let seconds = value.getSeconds();
  if (diff.hour) {
    hour = hour + toNumber(diff.hour);
  }
  if (diff.minute) {
    minutes = minutes + toNumber(diff.minute);
  }
  if (diff.seconds) {
    seconds = seconds + toNumber(diff.seconds);
  }
  return createDate(value, hour, minutes, seconds);
}
function setTime(value, opts) {
  let hour = parseHours(opts.hour);
  const minute = parseMinutes(opts.minute);
  const seconds = parseSeconds(opts.seconds) || 0;
  if (opts.isPM && hour !== 12) {
    hour += hoursPerDayHalf;
  }
  if (!value) {
    if (!isNaN(hour) && !isNaN(minute)) {
      return createDate(/* @__PURE__ */ new Date(), hour, minute, seconds);
    }
    return value;
  }
  if (isNaN(hour) || isNaN(minute)) {
    return value;
  }
  return createDate(value, hour, minute, seconds);
}
function createDate(value, hours, minutes, seconds) {
  const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
  newValue.setFullYear(value.getFullYear());
  newValue.setMonth(value.getMonth());
  newValue.setDate(value.getDate());
  return newValue;
}
function padNumber(value) {
  const _value = value.toString();
  if (_value.length > 1) {
    return _value;
  }
  return `0${_value}`;
}
function isHourInputValid(hours, isPM) {
  return !isNaN(parseHours(hours, isPM));
}
function isMinuteInputValid(minutes) {
  return !isNaN(parseMinutes(minutes));
}
function isSecondInputValid(seconds) {
  return !isNaN(parseSeconds(seconds));
}
function isInputLimitValid(diff, max, min) {
  const newDate = setTime(/* @__PURE__ */ new Date(), diff);
  if (!newDate) {
    return false;
  }
  if (max && newDate > max) {
    return false;
  }
  if (min && newDate < min) {
    return false;
  }
  return true;
}
function isOneOfDatesEmpty(hours, minutes, seconds) {
  return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
function isInputValid(hours, minutes = "0", seconds = "0", isPM) {
  return isHourInputValid(hours, isPM) && isMinuteInputValid(minutes) && isSecondInputValid(seconds);
}
function canChangeValue(state, event) {
  if (state.readonlyInput || state.disabled) {
    return false;
  }
  if (event) {
    if (event.source === "wheel" && !state.mousewheel) {
      return false;
    }
    if (event.source === "key" && !state.arrowkeys) {
      return false;
    }
  }
  return true;
}
function canChangeHours(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementHours) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementHours) {
    return false;
  }
  return true;
}
function canChangeMinutes(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementMinutes) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementMinutes) {
    return false;
  }
  return true;
}
function canChangeSeconds(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementSeconds) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementSeconds) {
    return false;
  }
  return true;
}
function getControlsValue(state) {
  const {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  } = state;
  return {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  };
}
function timepickerControls(value, state) {
  const hoursPerDay2 = 24;
  const hoursPerDayHalf2 = 12;
  const {
    min,
    max,
    hourStep,
    minuteStep,
    secondsStep,
    showSeconds
  } = state;
  const res = {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  };
  if (!value) {
    return res;
  }
  if (max) {
    const _newHour = changeTime(value, {
      hour: hourStep
    });
    res.canIncrementHours = max > _newHour && value.getHours() + hourStep < hoursPerDay2;
    if (!res.canIncrementHours) {
      const _newMinutes = changeTime(value, {
        minute: minuteStep
      });
      res.canIncrementMinutes = showSeconds ? max > _newMinutes : max >= _newMinutes;
    }
    if (!res.canIncrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: secondsStep
      });
      res.canIncrementSeconds = max >= _newSeconds;
    }
    if (value.getHours() < hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: hoursPerDayHalf2
      }) < max;
    }
  }
  if (min) {
    const _newHour = changeTime(value, {
      hour: -hourStep
    });
    res.canDecrementHours = min < _newHour;
    if (!res.canDecrementHours) {
      const _newMinutes = changeTime(value, {
        minute: -minuteStep
      });
      res.canDecrementMinutes = showSeconds ? min < _newMinutes : min <= _newMinutes;
    }
    if (!res.canDecrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: -secondsStep
      });
      res.canDecrementSeconds = min <= _newSeconds;
    }
    if (value.getHours() >= hoursPerDayHalf2) {
      res.canToggleMeridian = changeTime(value, {
        hour: -hoursPerDayHalf2
      }) > min;
    }
  }
  return res;
}
var _TimepickerConfig = class _TimepickerConfig {
  constructor() {
    this.hourStep = 1;
    this.minuteStep = 5;
    this.secondsStep = 10;
    this.showMeridian = true;
    this.meridians = ["AM", "PM"];
    this.readonlyInput = false;
    this.disabled = false;
    this.allowEmptyTime = false;
    this.mousewheel = true;
    this.arrowkeys = true;
    this.showSpinners = true;
    this.showSeconds = false;
    this.showMinutes = true;
    this.hoursPlaceholder = "HH";
    this.minutesPlaceholder = "MM";
    this.secondsPlaceholder = "SS";
    this.ariaLabelHours = "hours";
    this.ariaLabelMinutes = "minutes";
    this.ariaLabelSeconds = "seconds";
  }
};
_TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) {
  return new (t || _TimepickerConfig)();
};
_TimepickerConfig.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerConfig,
  factory: _TimepickerConfig.ɵfac,
  providedIn: "root"
});
var TimepickerConfig = _TimepickerConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var initialState = {
  value: void 0,
  config: new TimepickerConfig(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
};
function timepickerReducer(state = initialState, action) {
  switch (action.type) {
    case TimepickerActions.WRITE_VALUE: {
      return Object.assign({}, state, {
        value: action.payload
      });
    }
    case TimepickerActions.CHANGE_HOURS: {
      if (!canChangeValue(state.config, action.payload) || !canChangeHours(action.payload, state.controls)) {
        return state;
      }
      const _newTime = changeTime(state.value, {
        hour: action.payload.step
      });
      if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
        return state;
      }
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_MINUTES: {
      if (!canChangeValue(state.config, action.payload) || !canChangeMinutes(action.payload, state.controls)) {
        return state;
      }
      const _newTime = changeTime(state.value, {
        minute: action.payload.step
      });
      if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
        return state;
      }
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.CHANGE_SECONDS: {
      if (!canChangeValue(state.config, action.payload) || !canChangeSeconds(action.payload, state.controls)) {
        return state;
      }
      const _newTime = changeTime(state.value, {
        seconds: action.payload.step
      });
      if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
        return state;
      }
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.SET_TIME_UNIT: {
      if (!canChangeValue(state.config)) {
        return state;
      }
      const _newTime = setTime(state.value, action.payload);
      return Object.assign({}, state, {
        value: _newTime
      });
    }
    case TimepickerActions.UPDATE_CONTROLS: {
      const _newControlsState = timepickerControls(state.value, action.payload);
      const _newState = {
        value: state.value,
        config: action.payload,
        controls: _newControlsState
      };
      if (state.config.showMeridian !== _newState.config.showMeridian) {
        if (state.value) {
          _newState.value = new Date(state.value);
        }
      }
      return Object.assign({}, state, _newState);
    }
    default:
      return state;
  }
}
var _TimepickerStore = class _TimepickerStore extends MiniStore {
  constructor() {
    const _dispatcher = new BehaviorSubject({
      type: "[mini-ngrx] dispatcher init"
    });
    const state = new MiniState(initialState, _dispatcher, timepickerReducer);
    super(_dispatcher, timepickerReducer, state);
  }
};
_TimepickerStore.ɵfac = function TimepickerStore_Factory(t) {
  return new (t || _TimepickerStore)();
};
_TimepickerStore.ɵprov = ɵɵdefineInjectable({
  token: _TimepickerStore,
  factory: _TimepickerStore.ɵfac,
  providedIn: "platform"
});
var TimepickerStore = _TimepickerStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerStore, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimepickerComponent),
  multi: true
};
var _TimepickerComponent = class _TimepickerComponent {
  constructor(_config, _cd, _store, _timepickerActions) {
    this._cd = _cd;
    this._store = _store;
    this._timepickerActions = _timepickerActions;
    this.hourStep = 1;
    this.minuteStep = 5;
    this.secondsStep = 10;
    this.readonlyInput = false;
    this.disabled = false;
    this.mousewheel = true;
    this.arrowkeys = true;
    this.showSpinners = true;
    this.showMeridian = true;
    this.showMinutes = true;
    this.showSeconds = false;
    this.meridians = ["AM", "PM"];
    this.hoursPlaceholder = "HH";
    this.minutesPlaceholder = "MM";
    this.secondsPlaceholder = "SS";
    this.isValid = new EventEmitter();
    this.meridianChange = new EventEmitter();
    this.hours = "";
    this.minutes = "";
    this.seconds = "";
    this.meridian = "";
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
    this.labelHours = "hours";
    this.labelMinutes = "minutes";
    this.labelSeconds = "seconds";
    this.canIncrementHours = true;
    this.canIncrementMinutes = true;
    this.canIncrementSeconds = true;
    this.canDecrementHours = true;
    this.canDecrementMinutes = true;
    this.canDecrementSeconds = true;
    this.canToggleMeridian = true;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.config = _config;
    Object.assign(this, this.config);
    this.timepickerSub = _store.select((state) => state.value).subscribe((value) => {
      this._renderTime(value);
      this.onChange(value);
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    });
    _store.select((state) => state.controls).subscribe((controlsState) => {
      const isTimepickerInputValid = isInputValid(this.hours, this.minutes, this.seconds, this.isPM());
      const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
      this.isValid.emit(isValid);
      Object.assign(this, controlsState);
      _cd.markForCheck();
    });
  }
  /** @deprecated - please use `isEditable` instead */
  get isSpinnersVisible() {
    return this.showSpinners && !this.readonlyInput;
  }
  get isEditable() {
    return !(this.readonlyInput || this.disabled);
  }
  resetValidation() {
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
  }
  isPM() {
    return this.showMeridian && this.meridian === this.meridians[1];
  }
  prevDef($event) {
    $event.preventDefault();
  }
  wheelSign($event) {
    return Math.sign($event.deltaY || 0) * -1;
  }
  ngOnChanges() {
    this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
  }
  changeHours(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeHours({
      step,
      source
    }));
  }
  changeMinutes(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeMinutes({
      step,
      source
    }));
  }
  changeSeconds(step, source = "") {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeSeconds({
      step,
      source
    }));
  }
  updateHours(target) {
    this.resetValidation();
    this.hours = target.value;
    const isTimepickerInputValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.invalidHours = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateMinutes(target) {
    this.resetValidation();
    this.minutes = target.value;
    const isTimepickerInputValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.invalidMinutes = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateSeconds(target) {
    this.resetValidation();
    this.seconds = target.value;
    const isTimepickerInputValid = isSecondInputValid(this.seconds) && this.isValidLimit();
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.invalidSeconds = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  isValidLimit() {
    return isInputLimitValid({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }, this.max, this.min);
  }
  isOneOfDatesIsEmpty() {
    return isOneOfDatesEmpty(this.hours, this.minutes, this.seconds);
  }
  _updateTime() {
    const _seconds = this.showSeconds ? this.seconds : void 0;
    const _minutes = this.showMinutes ? this.minutes : void 0;
    const isTimepickerInputValid = isInputValid(this.hours, _minutes, _seconds, this.isPM());
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._store.dispatch(this._timepickerActions.setTime({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }));
  }
  toggleMeridian() {
    if (!this.showMeridian || !this.isEditable) {
      return;
    }
    const _hoursPerDayHalf = 12;
    this._store.dispatch(this._timepickerActions.changeHours({
      step: _hoursPerDayHalf,
      source: ""
    }));
  }
  /**
   * Write a new value to the element.
   */
  writeValue(obj) {
    if (isValidDate(obj)) {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
    } else if (obj == null) {
      this._store.dispatch(this._timepickerActions.writeValue());
    }
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * This function is called when the control status changes to or from "disabled".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._cd.markForCheck();
  }
  ngOnDestroy() {
    this.timepickerSub?.unsubscribe();
  }
  _renderTime(value) {
    if (!value || !isValidDate(value)) {
      this.hours = "";
      this.minutes = "";
      this.seconds = "";
      this.meridian = this.meridians[0];
      this.meridianChange.emit(this.meridian);
      return;
    }
    const _value = parseTime(value);
    if (!_value) {
      return;
    }
    const _hoursPerDayHalf = 12;
    let _hours = _value.getHours();
    if (this.showMeridian) {
      this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
      this.meridianChange.emit(this.meridian);
      _hours = _hours % _hoursPerDayHalf;
      if (_hours === 0) {
        _hours = _hoursPerDayHalf;
      }
    }
    this.hours = padNumber(_hours);
    this.minutes = padNumber(_value.getMinutes());
    this.seconds = padNumber(_value.getUTCSeconds());
  }
};
_TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) {
  return new (t || _TimepickerComponent)(ɵɵdirectiveInject(TimepickerConfig), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimepickerStore), ɵɵdirectiveInject(TimepickerActions));
};
_TimepickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _TimepickerComponent,
  selectors: [["timepicker"]],
  inputs: {
    hourStep: "hourStep",
    minuteStep: "minuteStep",
    secondsStep: "secondsStep",
    readonlyInput: "readonlyInput",
    disabled: "disabled",
    mousewheel: "mousewheel",
    arrowkeys: "arrowkeys",
    showSpinners: "showSpinners",
    showMeridian: "showMeridian",
    showMinutes: "showMinutes",
    showSeconds: "showSeconds",
    meridians: "meridians",
    min: "min",
    max: "max",
    hoursPlaceholder: "hoursPlaceholder",
    minutesPlaceholder: "minutesPlaceholder",
    secondsPlaceholder: "secondsPlaceholder"
  },
  outputs: {
    isValid: "isValid",
    meridianChange: "meridianChange"
  },
  features: [ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), ɵɵNgOnChangesFeature],
  decls: 31,
  vars: 33,
  consts: [[1, "text-center", 3, "hidden"], ["href", "javascript:void(0);", 1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change", "placeholder", "readonly", "disabled", "value"], ["class", "form-group mb-3", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "click", "disabled"]],
  template: function TimepickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1);
      ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() {
        return ctx.changeHours(ctx.hourStep);
      });
      ɵɵelement(5, "span", 2);
      ɵɵelementEnd()();
      ɵɵtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", 3)(7, TimepickerComponent_td_7_Template, 3, 2, "td", 3)(8, TimepickerComponent_td_8_Template, 2, 0, "td", 3)(9, TimepickerComponent_td_9_Template, 3, 2, "td", 3)(10, TimepickerComponent_td_10_Template, 2, 0, "td", 3)(11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
      ɵɵelementEnd();
      ɵɵelementStart(12, "tr")(13, "td", 4)(14, "input", 5);
      ɵɵlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) {
        ctx.prevDef($event);
        return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel");
      })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() {
        return ctx.changeHours(ctx.hourStep, "key");
      })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() {
        return ctx.changeHours(-ctx.hourStep, "key");
      })("change", function TimepickerComponent_Template_input_change_14_listener($event) {
        return ctx.updateHours($event.target);
      });
      ɵɵelementEnd()();
      ɵɵtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", 3)(16, TimepickerComponent_td_16_Template, 2, 9, "td", 6)(17, TimepickerComponent_td_17_Template, 2, 0, "td", 3)(18, TimepickerComponent_td_18_Template, 2, 9, "td", 6)(19, TimepickerComponent_td_19_Template, 2, 0, "td", 3)(20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
      ɵɵelementEnd();
      ɵɵelementStart(21, "tr", 0)(22, "td")(23, "a", 1);
      ɵɵlistener("click", function TimepickerComponent_Template_a_click_23_listener() {
        return ctx.changeHours(-ctx.hourStep);
      });
      ɵɵelement(24, "span", 7);
      ɵɵelementEnd()();
      ɵɵtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", 3)(26, TimepickerComponent_td_26_Template, 3, 2, "td", 3)(27, TimepickerComponent_td_27_Template, 2, 0, "td", 3)(28, TimepickerComponent_td_28_Template, 3, 2, "td", 3)(29, TimepickerComponent_td_29_Template, 2, 0, "td", 3)(30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("hidden", !ctx.showSpinners);
      ɵɵadvance(2);
      ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance(2);
      ɵɵclassProp("has-error", ctx.invalidHours);
      ɵɵadvance();
      ɵɵclassProp("is-invalid", ctx.invalidHours);
      ɵɵproperty("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
      ɵɵattribute("aria-label", ctx.labelHours);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("hidden", !ctx.showSpinners);
      ɵɵadvance(2);
      ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinutes);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSeconds);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMeridian);
    }
  },
  dependencies: [NgIf],
  styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TimepickerComponent = _TimepickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerComponent, [{
    type: Component,
    args: [{
      selector: "timepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
      encapsulation: ViewEncapsulation$1.None,
      template: `<table>
  <tbody>
  <tr class="text-center" [hidden]="!showSpinners">
    <!-- increment hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"
         (click)="changeHours(hourStep)"
         href="javascript:void(0);"
      ><span class="bs-chevron bs-chevron-up"></span></a>
    </td>
    <!-- divider -->
    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>
    <!-- increment minutes button -->
    <td *ngIf="showMinutes">
      <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"
         (click)="changeMinutes(minuteStep)"
         href="javascript:void(0);"
      ><span class="bs-chevron bs-chevron-up"></span></a>
    </td>
    <!-- divider -->
    <td *ngIf="showSeconds">&nbsp;</td>
    <!-- increment seconds button -->
    <td *ngIf="showSeconds">
      <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"
         (click)="changeSeconds(secondsStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-up"></span>
      </a>
    </td>
    <!-- space between -->
    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
    <!-- meridian placeholder-->
    <td *ngIf="showMeridian"></td>
  </tr>
  <tr>
    <!-- hours -->
    <td class="form-group mb-3" [class.has-error]="invalidHours">
      <input type="text" [class.is-invalid]="invalidHours"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="hoursPlaceholder"
             maxlength="2"
             [readonly]="readonlyInput"
             [disabled]="disabled"
             [value]="hours"
             (wheel)="prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeHours(hourStep, 'key')"
             (keydown.ArrowDown)="changeHours(-hourStep, 'key')"
             (change)="updateHours($event.target)" [attr.aria-label]="labelHours"></td>
    <!-- divider -->
    <td *ngIf="showMinutes">&nbsp;:&nbsp;</td>
    <!-- minutes -->
    <td class="form-group mb-3" *ngIf="showMinutes" [class.has-error]="invalidMinutes">
      <input type="text" [class.is-invalid]="invalidMinutes"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="minutesPlaceholder"
             maxlength="2"
             [readonly]="readonlyInput"
             [disabled]="disabled"
             [value]="minutes"
             (wheel)="prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeMinutes(minuteStep, 'key')"
             (keydown.ArrowDown)="changeMinutes(-minuteStep, 'key')"
             (change)="updateMinutes($event.target)" [attr.aria-label]="labelMinutes">
    </td>
    <!-- divider -->
    <td *ngIf="showSeconds">&nbsp;:&nbsp;</td>
    <!-- seconds -->
    <td class="form-group mb-3" *ngIf="showSeconds" [class.has-error]="invalidSeconds">
      <input type="text" [class.is-invalid]="invalidSeconds"
             class="form-control text-center bs-timepicker-field"
             [placeholder]="secondsPlaceholder"
             maxlength="2"
             [readonly]="readonlyInput"
             [disabled]="disabled"
             [value]="seconds"
             (wheel)="prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')"
             (keydown.ArrowUp)="changeSeconds(secondsStep, 'key')"
             (keydown.ArrowDown)="changeSeconds(-secondsStep, 'key')"
             (change)="updateSeconds($event.target)" [attr.aria-label]="labelSeconds">
    </td>
    <!-- space between -->
    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
    <!-- meridian -->
    <td *ngIf="showMeridian">
      <button type="button" class="btn btn-default text-center"
              [disabled]="!isEditable || !canToggleMeridian"
              [class.disabled]="!isEditable || !canToggleMeridian"
              (click)="toggleMeridian()"
      >{{ meridian }}
      </button>
    </td>
  </tr>
  <tr class="text-center" [hidden]="!showSpinners">
    <!-- decrement hours button-->
    <td>
      <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"
         (click)="changeHours(-hourStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- divider -->
    <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>
    <!-- decrement minutes button-->
    <td *ngIf="showMinutes">
      <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"
         (click)="changeMinutes(-minuteStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- divider -->
    <td *ngIf="showSeconds">&nbsp;</td>
    <!-- decrement seconds button-->
    <td *ngIf="showSeconds">
      <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"
         (click)="changeSeconds(-secondsStep)"
         href="javascript:void(0);"
      >
        <span class="bs-chevron bs-chevron-down"></span>
      </a>
    </td>
    <!-- space between -->
    <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
    <!-- meridian placeholder-->
    <td *ngIf="showMeridian"></td>
  </tr>
  </tbody>
</table>
`,
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"]
    }]
  }], () => [{
    type: TimepickerConfig
  }, {
    type: ChangeDetectorRef
  }, {
    type: TimepickerStore
  }, {
    type: TimepickerActions
  }], {
    hourStep: [{
      type: Input
    }],
    minuteStep: [{
      type: Input
    }],
    secondsStep: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mousewheel: [{
      type: Input
    }],
    arrowkeys: [{
      type: Input
    }],
    showSpinners: [{
      type: Input
    }],
    showMeridian: [{
      type: Input
    }],
    showMinutes: [{
      type: Input
    }],
    showSeconds: [{
      type: Input
    }],
    meridians: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    hoursPlaceholder: [{
      type: Input
    }],
    minutesPlaceholder: [{
      type: Input
    }],
    secondsPlaceholder: [{
      type: Input
    }],
    isValid: [{
      type: Output
    }],
    meridianChange: [{
      type: Output
    }]
  });
})();
var _TimepickerModule = class _TimepickerModule {
  static forRoot() {
    return {
      ngModule: _TimepickerModule,
      providers: [TimepickerActions, TimepickerStore]
    };
  }
};
_TimepickerModule.ɵfac = function TimepickerModule_Factory(t) {
  return new (t || _TimepickerModule)();
};
_TimepickerModule.ɵmod = ɵɵdefineNgModule({
  type: _TimepickerModule,
  declarations: [TimepickerComponent],
  imports: [CommonModule],
  exports: [TimepickerComponent]
});
_TimepickerModule.ɵinj = ɵɵdefineInjector({
  providers: [TimepickerStore],
  imports: [CommonModule]
});
var TimepickerModule = _TimepickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TimepickerComponent],
      exports: [TimepickerComponent],
      providers: [TimepickerStore]
    }]
  }], null, null);
})();

export {
  MiniState,
  MiniStore,
  TimepickerActions,
  TimepickerConfig,
  TimepickerStore,
  TimepickerComponent,
  TimepickerModule
};
//# sourceMappingURL=chunk-YJSBVE3M.js.map
