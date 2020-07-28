module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1c45":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3b3b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
  var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

  var utils = function () {
    var me = {};
    var _elementStyle = document.createElement('div').style;

    var _vendor = function () {
      var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
          transform,
          i = 0,
          l = vendors.length;

      for (; i < l; i++) {
        transform = vendors[i] + 'ransform';
        if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
      }

      return false;
    }();

    function _prefixStyle(style) {
      if (_vendor === false) return false;
      if (_vendor === '') return style;
      return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.getTime = Date.now || function getTime() {
      return new Date().getTime();
    };

    me.extend = function (target, obj) {
      for (var i in obj) {
        target[i] = obj[i];
      }
    };

    me.addEvent = function (el, type, fn, capture) {
      el.addEventListener(type, fn, !!capture);
    };

    me.removeEvent = function (el, type, fn, capture) {
      el.removeEventListener(type, fn, !!capture);
    };

    me.prefixPointerEvent = function (pointerEvent) {
      return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
      var distance = current - start,
          speed = Math.abs(distance) / time,
          destination,
          duration;
      deceleration = deceleration === undefined ? 0.0006 : deceleration;
      destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
      duration = speed / deceleration;

      if (destination < lowerMargin) {
        destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
        distance = Math.abs(destination - current);
        duration = distance / speed;
      } else if (destination > 0) {
        destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
        distance = Math.abs(current) + destination;
        duration = distance / speed;
      }

      return {
        destination: Math.round(destination),
        duration: duration
      };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
      hasTransform: _transform !== false,
      hasPerspective: _prefixStyle('perspective') in _elementStyle,
      hasTouch: 'ontouchstart' in window,
      hasPointer: !!(window.PointerEvent || window.MSPointerEvent),
      // IE10 is prefixed
      hasTransition: _prefixStyle('transition') in _elementStyle
    });
    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
      - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
      - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S3 is badAndroid (stock brower, webview)
       `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S4 is badAndroid (stock brower, webview)
       `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S5 is OK
       `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
     - galaxy S6 is OK
       `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
    */

    me.isBadAndroid = function () {
      var appVersion = window.navigator.appVersion; // Android browser is not a chrome browser.

      if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);

        if (safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
          return parseFloat(safariVersion[1]) < 535.19;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }();

    me.extend(me.style = {}, {
      transform: _transform,
      transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
      transitionDuration: _prefixStyle('transitionDuration'),
      transitionDelay: _prefixStyle('transitionDelay'),
      transformOrigin: _prefixStyle('transformOrigin'),
      touchAction: _prefixStyle('touchAction')
    });

    me.hasClass = function (e, c) {
      var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
      return re.test(e.className);
    };

    me.addClass = function (e, c) {
      if (me.hasClass(e, c)) {
        return;
      }

      var newclass = e.className.split(' ');
      newclass.push(c);
      e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
      if (!me.hasClass(e, c)) {
        return;
      }

      var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
      e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
      var left = -el.offsetLeft,
          top = -el.offsetTop; // jshint -W084

      while (el = el.offsetParent) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
      } // jshint +W084


      return {
        left: left,
        top: top
      };
    };

    me.preventDefaultException = function (el, exceptions) {
      for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
          return true;
        }
      }

      return false;
    };

    me.extend(me.eventType = {}, {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
      mousedown: 2,
      mousemove: 2,
      mouseup: 2,
      pointerdown: 3,
      pointermove: 3,
      pointerup: 3,
      MSPointerDown: 3,
      MSPointerMove: 3,
      MSPointerUp: 3
    });
    me.extend(me.ease = {}, {
      quadratic: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (k) {
          return k * (2 - k);
        }
      },
      circular: {
        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
        // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
        fn: function (k) {
          return Math.sqrt(1 - --k * k);
        }
      },
      back: {
        style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fn: function (k) {
          var b = 4;
          return (k = k - 1) * k * ((b + 1) * k + b) + 1;
        }
      },
      bounce: {
        style: '',
        fn: function (k) {
          if ((k /= 1) < 1 / 2.75) {
            return 7.5625 * k * k;
          } else if (k < 2 / 2.75) {
            return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
          } else if (k < 2.5 / 2.75) {
            return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
          } else {
            return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
          }
        }
      },
      elastic: {
        style: '',
        fn: function (k) {
          var f = 0.22,
              e = 0.4;

          if (k === 0) {
            return 0;
          }

          if (k == 1) {
            return 1;
          }

          return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
        }
      }
    });

    me.tap = function (e, eventName) {
      var ev = document.createEvent('Event');
      ev.initEvent(eventName, true, true);
      ev.pageX = e.pageX;
      ev.pageY = e.pageY;
      e.target.dispatchEvent(ev);
    };

    me.click = function (e) {
      var target = e.target,
          ev;

      if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
        // initMouseEvent is deprecated.
        ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
        ev.initEvent('click', true, true);
        ev.view = e.view || window;
        ev.detail = 1;
        ev.screenX = target.screenX || 0;
        ev.screenY = target.screenY || 0;
        ev.clientX = target.clientX || 0;
        ev.clientY = target.clientY || 0;
        ev.ctrlKey = !!e.ctrlKey;
        ev.altKey = !!e.altKey;
        ev.shiftKey = !!e.shiftKey;
        ev.metaKey = !!e.metaKey;
        ev.button = 0;
        ev.relatedTarget = null;
        ev._constructed = true;
        target.dispatchEvent(ev);
      }
    };

    me.getTouchAction = function (eventPassthrough, addPinch) {
      var touchAction = 'none';

      if (eventPassthrough === 'vertical') {
        touchAction = 'pan-y';
      } else if (eventPassthrough === 'horizontal') {
        touchAction = 'pan-x';
      }

      if (addPinch && touchAction != 'none') {
        // add pinch-zoom support if the browser supports it, but if not (eg. Chrome <55) do nothing
        touchAction += ' pinch-zoom';
      }

      return touchAction;
    };

    me.getRect = function (el) {
      if (el instanceof SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };
      } else {
        return {
          top: el.offsetTop,
          left: el.offsetLeft,
          width: el.offsetWidth,
          height: el.offsetHeight
        };
      }
    };

    return me;
  }();

  function IScroll(el, options) {
    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style; // cache style for better performance

    this.options = {
      resizeScrollbars: true,
      mouseWheelSpeed: 20,
      snapThreshold: 0.334,
      // INSERT POINT: OPTIONS
      disablePointer: !utils.hasPointer,
      disableTouch: utils.hasPointer || !utils.hasTouch,
      disableMouse: utils.hasPointer || utils.hasTouch,
      startX: 0,
      startY: 0,
      scrollY: true,
      directionLockThreshold: 5,
      momentum: true,
      bounce: true,
      bounceTime: 600,
      bounceEasing: '',
      preventDefault: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
      },
      HWCompositing: true,
      useTransition: true,
      useTransform: true,
      bindToWrapper: typeof window.onmousedown === "undefined"
    };

    for (var i in options) {
      this.options[i] = options[i];
    }

    this.beforeResetPosition = undefined; // Normalize options

    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;
    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault; // If you want eventPassthrough I have to lock one of the axes

    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX; // With eventPassthrough we also need lockDirection mechanism

    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    } // https://github.com/cubiq/iscroll/issues/1029


    if (!this.options.useTransition && !this.options.useTransform) {
      if (!/relative|absolute/i.test(this.scrollerStyle.position)) {
        this.scrollerStyle.position = "relative";
      }
    }

    if (this.options.shrinkScrollbars == 'scale') {
      this.options.useTransition = false;
    }

    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

    if (this.options.probeType == 3) {
      this.options.useTransition = false;
    } // INSERT POINT: NORMALIZATION
    // Some defaults


    this.endX = this.x = 0;
    this.endY = this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {}; // INSERT POINT: DEFAULTS

    this._init();

    this.refresh();
    this.scrollTo(this.options.startX, this.options.startY);
    this.endX = this.options.startX || this.endX;
    this.endY = this.options.startY || this.endY;
    this.enable();
  }

  IScroll.prototype = {
    version: '5.2.0-snapshot',
    _init: function () {
      this._initEvents();

      if (this.options.scrollbars || this.options.indicators) {
        this._initIndicators();
      }

      if (this.options.mouseWheel) {
        this._initWheel();
      }

      if (this.options.snap) {
        this._initSnap();
      }

      if (this.options.keyBindings) {
        this._initKeys();
      } // INSERT POINT: _init

    },
    destroy: function () {
      this._initEvents(true);

      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;

      this._execEvent('destroy');
    },
    _transitionEnd: function (e) {
      if (e.target != this.scroller || !this.isInTransition) {
        return;
      }

      this._transitionTime();

      if (!this.resetPosition(this.options.bounceTime)) {
        this.isInTransition = false;

        this._execEvent('scrollEnd');
      }
    },
    _start: function (e) {
      // React to left mouse button only
      if (utils.eventType[e.type] != 1) {
        // for button property
        // http://unixpapa.com/js/mouse.html
        var button;

        if (!e.which) {
          /* IE case */
          button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
        } else {
          /* All others */
          button = e.button;
        }

        if (button !== 0) {
          return;
        }
      }

      if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
        e.preventDefault();
      }

      var point = e.touches ? e.touches[0] : e,
          pos;
      this.initiated = utils.eventType[e.type];
      this.moved = false;
      this.distX = 0;
      this.distY = 0;
      this.directionX = 0;
      this.directionY = 0;
      this.directionLocked = 0;
      this.startTime = utils.getTime();

      if (this.options.useTransition && this.isInTransition) {
        this._transitionTime();

        this.isInTransition = false;
        pos = this.getComputedPosition();

        this._translate(Math.round(pos.x), Math.round(pos.y));

        this._execEvent('scrollEnd');
      } else if (!this.options.useTransition && this.isAnimating) {
        this.isAnimating = false;

        this._execEvent('scrollEnd');
      }

      this.startX = this.x;
      this.startY = this.y;
      this.absStartX = this.x;
      this.absStartY = this.y;
      this.pointX = point.pageX;
      this.pointY = point.pageY;

      this._execEvent('beforeScrollStart');
    },
    _move: function (e) {
      if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault) {
        // increases performance on Android? TODO: check!
        e.preventDefault();
      }

      var point = e.touches ? e.touches[0] : e,
          deltaX = point.pageX - this.pointX,
          deltaY = point.pageY - this.pointY,
          timestamp = utils.getTime(),
          newX,
          newY,
          absDistX,
          absDistY;
      this.pointX = point.pageX;
      this.pointY = point.pageY;
      this.distX += deltaX;
      this.distY += deltaY;
      absDistX = Math.abs(this.distX);
      absDistY = Math.abs(this.distY); // We need to move at least 10 pixels for the scrolling to initiate

      if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
        return;
      } // If you are scrolling in one direction lock the other


      if (!this.directionLocked && !this.options.freeScroll) {
        if (absDistX > absDistY + this.options.directionLockThreshold) {
          this.directionLocked = 'h'; // lock horizontally
        } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
          this.directionLocked = 'v'; // lock vertically
        } else {
          this.directionLocked = 'n'; // no lock
        }
      }

      if (this.directionLocked == 'h') {
        if (this.options.eventPassthrough == 'vertical') {
          e.preventDefault();
        } else if (this.options.eventPassthrough == 'horizontal') {
          this.initiated = false;
          return;
        }

        deltaY = 0;
      } else if (this.directionLocked == 'v') {
        if (this.options.eventPassthrough == 'horizontal') {
          e.preventDefault();
        } else if (this.options.eventPassthrough == 'vertical') {
          this.initiated = false;
          return;
        }

        deltaX = 0;
      }

      deltaX = this.hasHorizontalScroll || this.options.forceHorizontalScroll ? deltaX : 0;
      deltaY = this.hasVerticalScroll || this.options.forceVerticalScroll ? deltaY : 0;
      newX = this.x + deltaX;
      newY = this.y + deltaY; // Slow down if outside of the boundaries

      if (newX > 0 || newX < this.maxScrollX) {
        newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
      }

      if (newY > 0 || newY < this.maxScrollY) {
        newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
      }

      this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
      this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

      if (!this.moved) {
        this._execEvent('scrollStart');
      }

      this.moved = true;
      this.endX = newX;
      this.endY = newY;

      this._translate(newX, newY);
      /* REPLACE START: _move */


      if (timestamp - this.startTime > 300) {
        this.startTime = timestamp;
        this.startX = this.x;
        this.startY = this.y;

        if (this.options.probeType == 1) {
          this._execEvent('scroll');
        }
      }

      if (this.options.probeType > 1) {
        this._execEvent('scroll');
      }
      /* REPLACE END: _move */

    },
    _end: function (e) {
      if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
        return;
      }

      if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
        e.preventDefault();
      }

      var point = e.changedTouches ? e.changedTouches[0] : e,
          momentumX,
          momentumY,
          duration = utils.getTime() - this.startTime,
          newX = Math.round(this.x),
          newY = Math.round(this.y),
          distanceX = Math.abs(newX - this.startX),
          distanceY = Math.abs(newY - this.startY),
          time = 0,
          easing = '';
      this.isInTransition = 0;
      this.initiated = 0;
      this.endTime = utils.getTime();

      const next = () => {
        // reset if we are outside of the boundaries
        if (this.resetPosition(this.options.bounceTime)) {
          return;
        }

        this.scrollTo(newX, newY); // ensures that the last position is rounded
        // we scrolled less than 10 pixels

        if (!this.moved) {
          if (this.options.tap) {
            utils.tap(e, this.options.tap);
          }

          if (this.options.click) {
            utils.click(e);
          }

          this._execEvent('scrollCancel');

          return;
        }

        if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
          this._execEvent('flick');

          return;
        } // start momentum animation if needed


        if (this.options.momentum && duration < 300) {
          momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
            destination: newX,
            duration: 0
          };
          momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
            destination: newY,
            duration: 0
          };
          newX = momentumX.destination;
          newY = momentumY.destination;
          time = Math.max(momentumX.duration, momentumY.duration);
          this.isInTransition = 1;
        }

        if (this.options.snap) {
          var snap = this._nearestSnap(newX, newY);

          this.currentPage = snap;
          time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
          newX = snap.x;
          newY = snap.y;
          this.directionX = 0;
          this.directionY = 0;
          easing = this.options.bounceEasing;
        } // INSERT POINT: _end


        if (newX != this.x || newY != this.y) {
          // change easing function when scroller goes out of the boundaries
          if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
            easing = utils.ease.quadratic;
          }

          this.endX = newX;
          this.endY = newY;
          this.scrollTo(newX, newY, time, easing);
          return;
        }

        this._execEvent('scrollEnd');
      };

      this.beforeResetPosition ? (() => {
        this.beforeResetPosition(next);
        this.beforeResetPosition = undefined;
      })() : next();
    },
    _resize: function () {
      var that = this;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(function () {
        that.refresh();
      }, this.options.resizePolling);
    },
    resetPosition: function (time) {
      var x = this.x,
          y = this.y;
      time = time || 0;

      if (!this.hasHorizontalScroll || this.x > 0) {
        x = 0;
      } else if (this.x < this.maxScrollX) {
        x = this.maxScrollX;
      }

      if (!this.hasVerticalScroll || this.y > 0) {
        y = 0;
      } else if (this.y < this.maxScrollY) {
        y = this.maxScrollY;
      }

      if (x == this.x && y == this.y) {
        return false;
      }

      this.endX = x;
      this.endY = y;
      this.scrollTo(x, y, time, this.options.bounceEasing);
      return true;
    },
    disable: function () {
      this.enabled = false;
    },
    enable: function () {
      this.enabled = true;
    },
    refresh: function () {
      utils.getRect(this.wrapper); // Force reflow

      this.wrapperWidth = this.wrapper.clientWidth;
      this.wrapperHeight = this.wrapper.clientHeight;
      var rect = utils.getRect(this.scroller);
      /* REPLACE START: refresh */

      this.scrollerWidth = rect.width;
      this.scrollerHeight = rect.height;
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      /* REPLACE END: refresh */

      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

      if (!this.hasHorizontalScroll) {
        this.maxScrollX = 0;
        this.scrollerWidth = this.wrapperWidth;
      }

      if (!this.hasVerticalScroll) {
        this.maxScrollY = 0;
        this.scrollerHeight = this.wrapperHeight;
      }

      this.endTime = 0;
      this.directionX = 0;
      this.directionY = 0;

      if (utils.hasPointer && !this.options.disablePointer) {
        // The wrapper should have `touchAction` property for using pointerEvent.
        this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, true); // case. not support 'pinch-zoom'
        // https://github.com/cubiq/iscroll/issues/1118#issuecomment-270057583

        if (!this.wrapper.style[utils.style.touchAction]) {
          this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, false);
        }
      }

      this.wrapperOffset = utils.offset(this.wrapper);

      this._execEvent('refresh');

      this.resetPosition(); // INSERT POINT: _refresh
    },
    on: function (type, fn) {
      if (!this._events[type]) {
        this._events[type] = [];
      }

      this._events[type].push(fn);
    },
    off: function (type, fn) {
      if (!this._events[type]) {
        return;
      }

      var index = this._events[type].indexOf(fn);

      if (index > -1) {
        this._events[type].splice(index, 1);
      }
    },
    _execEvent: function (type) {
      if (!this._events[type]) {
        return;
      }

      var i = 0,
          l = this._events[type].length;

      if (!l) {
        return;
      }

      for (; i < l; i++) {
        this._events[type][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function (x, y, time, easing) {
      x = this.x + x;
      y = this.y + y;
      time = time || 0;
      this.scrollTo(x, y, time, easing);
    },
    scrollTo: function (x, y, time, easing) {
      easing = easing || utils.ease.circular;
      this.isInTransition = this.options.useTransition && time > 0;
      var transitionType = this.options.useTransition && easing.style;

      if (!time || transitionType) {
        if (transitionType) {
          this._transitionTimingFunction(easing.style);

          this._transitionTime(time);
        }

        this._translate(x, y);
      } else {
        this._animate(x, y, time, easing.fn);
      }
    },
    scrollToElement: function (el, time, offsetX, offsetY, easing) {
      el = el.nodeType ? el : this.scroller.querySelector(el);

      if (!el) {
        return;
      }

      var pos = utils.offset(el);
      pos.left -= this.wrapperOffset.left;
      pos.top -= this.wrapperOffset.top; // if offsetX/Y are true we center the element to the screen

      var elRect = utils.getRect(el);
      var wrapperRect = utils.getRect(this.wrapper);

      if (offsetX === true) {
        offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2);
      }

      if (offsetY === true) {
        offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2);
      }

      pos.left -= offsetX || 0;
      pos.top -= offsetY || 0;
      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
      pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
      time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
      this.scrollTo(pos.left, pos.top, time, easing);
    },
    _transitionTime: function (time) {
      if (!this.options.useTransition) {
        return;
      }

      time = time || 0;
      var durationProp = utils.style.transitionDuration;

      if (!durationProp) {
        return;
      }

      this.scrollerStyle[durationProp] = time + 'ms';

      if (!time && utils.isBadAndroid) {
        this.scrollerStyle[durationProp] = '0.0001ms'; // remove 0.0001ms

        var self = this;
        rAF(function () {
          if (self.scrollerStyle[durationProp] === '0.0001ms') {
            self.scrollerStyle[durationProp] = '0s';
          }
        });
      }

      if (this.indicators) {
        for (var i = this.indicators.length; i--;) {
          this.indicators[i].transitionTime(time);
        }
      } // INSERT POINT: _transitionTime

    },
    _transitionTimingFunction: function (easing) {
      this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

      if (this.indicators) {
        for (var i = this.indicators.length; i--;) {
          this.indicators[i].transitionTimingFunction(easing);
        }
      } // INSERT POINT: _transitionTimingFunction

    },
    _translate: function (x, y) {
      if (this.options.useTransform) {
        /* REPLACE START: _translate */
        this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
        /* REPLACE END: _translate */
      } else {
        x = Math.round(x);
        y = Math.round(y);
        this.scrollerStyle.left = x + 'px';
        this.scrollerStyle.top = y + 'px';
      }

      this.x = x;
      this.y = y;

      if (this.indicators) {
        for (var i = this.indicators.length; i--;) {
          this.indicators[i].updatePosition();
        }
      } // INSERT POINT: _translate

    },
    _initEvents: function (remove) {
      var eventType = remove ? utils.removeEvent : utils.addEvent,
          target = this.options.bindToWrapper ? this.wrapper : window;
      eventType(window, 'orientationchange', this);
      eventType(window, 'resize', this);

      if (this.options.click) {
        eventType(this.wrapper, 'click', this, true);
      }

      if (!this.options.disableMouse) {
        eventType(this.wrapper, 'mousedown', this);
        eventType(target, 'mousemove', this);
        eventType(target, 'mousecancel', this);
        eventType(target, 'mouseup', this);
      }

      if (utils.hasPointer && !this.options.disablePointer) {
        eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
        eventType(target, utils.prefixPointerEvent('pointermove'), this);
        eventType(target, utils.prefixPointerEvent('pointercancel'), this);
        eventType(target, utils.prefixPointerEvent('pointerup'), this);
      }

      if (utils.hasTouch && !this.options.disableTouch) {
        eventType(this.wrapper, 'touchstart', this);
        eventType(target, 'touchmove', this);
        eventType(target, 'touchcancel', this);
        eventType(target, 'touchend', this);
      }

      eventType(this.scroller, 'transitionend', this);
      eventType(this.scroller, 'webkitTransitionEnd', this);
      eventType(this.scroller, 'oTransitionEnd', this);
      eventType(this.scroller, 'MSTransitionEnd', this);
    },
    getComputedPosition: function () {
      var matrix = window.getComputedStyle(this.scroller, null),
          x,
          y;

      if (this.options.useTransform) {
        matrix = matrix[utils.style.transform].split(')')[0].split(', ');
        x = +(matrix[12] || matrix[4]);
        y = +(matrix[13] || matrix[5]);
      } else {
        x = +matrix.left.replace(/[^-\d.]/g, '');
        y = +matrix.top.replace(/[^-\d.]/g, '');
      }

      return {
        x: x,
        y: y
      };
    },
    _initIndicators: function () {
      var interactive = this.options.interactiveScrollbars,
          customStyle = typeof this.options.scrollbars != 'string',
          indicators = [],
          indicator;
      var that = this;
      this.indicators = [];

      if (this.options.scrollbars) {
        // Vertical scrollbar
        if (this.options.scrollY) {
          indicator = {
            el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
            interactive: interactive,
            defaultScrollbars: true,
            customStyle: customStyle,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenX: false
          };
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        } // Horizontal scrollbar


        if (this.options.scrollX) {
          indicator = {
            el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
            interactive: interactive,
            defaultScrollbars: true,
            customStyle: customStyle,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenY: false
          };
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        }
      }

      if (this.options.indicators) {
        // TODO: check concat compatibility
        indicators = indicators.concat(this.options.indicators);
      }

      for (var i = indicators.length; i--;) {
        this.indicators.push(new Indicator(this, indicators[i]));
      } // TODO: check if we can use array.map (wide compatibility and performance issues)


      function _indicatorsMap(fn) {
        if (that.indicators) {
          for (var i = that.indicators.length; i--;) {
            fn.call(that.indicators[i]);
          }
        }
      }

      if (this.options.fadeScrollbars) {
        this.on('scrollEnd', function () {
          _indicatorsMap(function () {
            this.fade();
          });
        });
        this.on('scrollCancel', function () {
          _indicatorsMap(function () {
            this.fade();
          });
        });
        this.on('scrollStart', function () {
          _indicatorsMap(function () {
            this.fade(1);
          });
        });
        this.on('beforeScrollStart', function () {
          _indicatorsMap(function () {
            this.fade(1, true);
          });
        });
      }

      this.on('refresh', function () {
        _indicatorsMap(function () {
          this.refresh();
        });
      });
      this.on('destroy', function () {
        _indicatorsMap(function () {
          this.destroy();
        });

        delete this.indicators;
      });
    },
    _initWheel: function () {
      utils.addEvent(this.wrapper, 'wheel', this);
      utils.addEvent(this.wrapper, 'mousewheel', this);
      utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
      this.on('destroy', function () {
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = null;
        utils.removeEvent(this.wrapper, 'wheel', this);
        utils.removeEvent(this.wrapper, 'mousewheel', this);
        utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
      });
    },
    _wheel: function (e) {
      if (!this.enabled) {
        return;
      }

      e.preventDefault();
      var wheelDeltaX,
          wheelDeltaY,
          newX,
          newY,
          that = this;

      if (this.wheelTimeout === undefined) {
        that._execEvent('scrollStart');
      } // Execute the scrollEnd event after 400ms the wheel stopped scrolling


      clearTimeout(this.wheelTimeout);
      this.wheelTimeout = setTimeout(function () {
        if (!that.options.snap) {
          that._execEvent('scrollEnd');
        }

        that.wheelTimeout = undefined;
      }, 400);

      if ('deltaX' in e) {
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
          wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
      } else if ('wheelDeltaX' in e) {
        wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
        wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
      } else if ('wheelDelta' in e) {
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
      } else if ('detail' in e) {
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
      } else {
        return;
      }

      wheelDeltaX *= this.options.invertWheelDirection;
      wheelDeltaY *= this.options.invertWheelDirection;

      if (!this.hasVerticalScroll) {
        wheelDeltaX = wheelDeltaY;
        wheelDeltaY = 0;
      }

      if (this.options.snap) {
        newX = this.currentPage.pageX;
        newY = this.currentPage.pageY;

        if (wheelDeltaX > 0) {
          newX--;
        } else if (wheelDeltaX < 0) {
          newX++;
        }

        if (wheelDeltaY > 0) {
          newY--;
        } else if (wheelDeltaY < 0) {
          newY++;
        }

        this.goToPage(newX, newY);
        return;
      }

      newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
      newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
      this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
      this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

      if (newX > 0) {
        newX = 0;
      } else if (newX < this.maxScrollX) {
        newX = this.maxScrollX;
      }

      if (newY > 0) {
        newY = 0;
      } else if (newY < this.maxScrollY) {
        newY = this.maxScrollY;
      }

      this.scrollTo(newX, newY, 0);

      if (this.options.probeType > 1) {
        this._execEvent('scroll');
      } // INSERT POINT: _wheel

    },
    _initSnap: function () {
      this.currentPage = {};

      if (typeof this.options.snap == 'string') {
        this.options.snap = this.scroller.querySelectorAll(this.options.snap);
      }

      this.on('refresh', function () {
        var i = 0,
            l,
            m = 0,
            n,
            cx,
            cy,
            x = 0,
            y,
            stepX = this.options.snapStepX || this.wrapperWidth,
            stepY = this.options.snapStepY || this.wrapperHeight,
            el,
            rect;
        this.pages = [];

        if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
          return;
        }

        if (this.options.snap === true) {
          cx = Math.round(stepX / 2);
          cy = Math.round(stepY / 2);

          while (x > -this.scrollerWidth) {
            this.pages[i] = [];
            l = 0;
            y = 0;

            while (y > -this.scrollerHeight) {
              this.pages[i][l] = {
                x: Math.max(x, this.maxScrollX),
                y: Math.max(y, this.maxScrollY),
                width: stepX,
                height: stepY,
                cx: x - cx,
                cy: y - cy
              };
              y -= stepY;
              l++;
            }

            x -= stepX;
            i++;
          }
        } else {
          el = this.options.snap;
          l = el.length;
          n = -1;

          for (; i < l; i++) {
            rect = utils.getRect(el[i]);

            if (i === 0 || rect.left <= utils.getRect(el[i - 1]).left) {
              m = 0;
              n++;
            }

            if (!this.pages[m]) {
              this.pages[m] = [];
            }

            x = Math.max(-rect.left, this.maxScrollX);
            y = Math.max(-rect.top, this.maxScrollY);
            cx = x - Math.round(rect.width / 2);
            cy = y - Math.round(rect.height / 2);
            this.pages[m][n] = {
              x: x,
              y: y,
              width: rect.width,
              height: rect.height,
              cx: cx,
              cy: cy
            };

            if (x > this.maxScrollX) {
              m++;
            }
          }
        }

        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0); // Update snap threshold if needed

        if (this.options.snapThreshold % 1 === 0) {
          this.snapThresholdX = this.options.snapThreshold;
          this.snapThresholdY = this.options.snapThreshold;
        } else {
          this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
          this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
        }
      });
      this.on('flick', function () {
        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
      });
    },
    _nearestSnap: function (x, y) {
      if (!this.pages.length) {
        return {
          x: 0,
          y: 0,
          pageX: 0,
          pageY: 0
        };
      }

      var i = 0,
          l = this.pages.length,
          m = 0; // Check if we exceeded the snap threshold

      if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
        return this.currentPage;
      }

      if (x > 0) {
        x = 0;
      } else if (x < this.maxScrollX) {
        x = this.maxScrollX;
      }

      if (y > 0) {
        y = 0;
      } else if (y < this.maxScrollY) {
        y = this.maxScrollY;
      }

      for (; i < l; i++) {
        if (x >= this.pages[i][0].cx) {
          x = this.pages[i][0].x;
          break;
        }
      }

      l = this.pages[i].length;

      for (; m < l; m++) {
        if (y >= this.pages[0][m].cy) {
          y = this.pages[0][m].y;
          break;
        }
      }

      if (i == this.currentPage.pageX) {
        i += this.directionX;

        if (i < 0) {
          i = 0;
        } else if (i >= this.pages.length) {
          i = this.pages.length - 1;
        }

        x = this.pages[i][0].x;
      }

      if (m == this.currentPage.pageY) {
        m += this.directionY;

        if (m < 0) {
          m = 0;
        } else if (m >= this.pages[0].length) {
          m = this.pages[0].length - 1;
        }

        y = this.pages[0][m].y;
      }

      return {
        x: x,
        y: y,
        pageX: i,
        pageY: m
      };
    },
    goToPage: function (x, y, time, easing) {
      easing = easing || this.options.bounceEasing;

      if (x >= this.pages.length) {
        x = this.pages.length - 1;
      } else if (x < 0) {
        x = 0;
      }

      if (y >= this.pages[x].length) {
        y = this.pages[x].length - 1;
      } else if (y < 0) {
        y = 0;
      }

      var posX = this.pages[x][y].x,
          posY = this.pages[x][y].y;
      time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
      this.currentPage = {
        x: posX,
        y: posY,
        pageX: x,
        pageY: y
      };
      this.scrollTo(posX, posY, time, easing);
    },
    next: function (time, easing) {
      var x = this.currentPage.pageX,
          y = this.currentPage.pageY;
      x++;

      if (x >= this.pages.length && this.hasVerticalScroll) {
        x = 0;
        y++;
      }

      this.goToPage(x, y, time, easing);
    },
    prev: function (time, easing) {
      var x = this.currentPage.pageX,
          y = this.currentPage.pageY;
      x--;

      if (x < 0 && this.hasVerticalScroll) {
        x = 0;
        y--;
      }

      this.goToPage(x, y, time, easing);
    },
    _initKeys: function (e) {
      // default key bindings
      var keys = {
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
      };
      var i; // if you give me characters I give you keycode

      if (typeof this.options.keyBindings == 'object') {
        for (i in this.options.keyBindings) {
          if (typeof this.options.keyBindings[i] == 'string') {
            this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
          }
        }
      } else {
        this.options.keyBindings = {};
      }

      for (i in keys) {
        this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
      }

      utils.addEvent(window, 'keydown', this);
      this.on('destroy', function () {
        utils.removeEvent(window, 'keydown', this);
      });
    },
    _key: function (e) {
      if (!this.enabled) {
        return;
      }

      var snap = this.options.snap,
          // we are using this alot, better to cache it
      newX = snap ? this.currentPage.pageX : this.x,
          newY = snap ? this.currentPage.pageY : this.y,
          now = utils.getTime(),
          prevTime = this.keyTime || 0,
          acceleration = 0.250,
          pos;

      if (this.options.useTransition && this.isInTransition) {
        pos = this.getComputedPosition();

        this._translate(Math.round(pos.x), Math.round(pos.y));

        this.isInTransition = false;
      }

      this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

      switch (e.keyCode) {
        case this.options.keyBindings.pageUp:
          if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
            newX += snap ? 1 : this.wrapperWidth;
          } else {
            newY += snap ? 1 : this.wrapperHeight;
          }

          break;

        case this.options.keyBindings.pageDown:
          if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
            newX -= snap ? 1 : this.wrapperWidth;
          } else {
            newY -= snap ? 1 : this.wrapperHeight;
          }

          break;

        case this.options.keyBindings.end:
          newX = snap ? this.pages.length - 1 : this.maxScrollX;
          newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
          break;

        case this.options.keyBindings.home:
          newX = 0;
          newY = 0;
          break;

        case this.options.keyBindings.left:
          newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
          break;

        case this.options.keyBindings.up:
          newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
          break;

        case this.options.keyBindings.right:
          newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
          break;

        case this.options.keyBindings.down:
          newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
          break;

        default:
          return;
      }

      if (snap) {
        this.goToPage(newX, newY);
        return;
      }

      if (newX > 0) {
        newX = 0;
        this.keyAcceleration = 0;
      } else if (newX < this.maxScrollX) {
        newX = this.maxScrollX;
        this.keyAcceleration = 0;
      }

      if (newY > 0) {
        newY = 0;
        this.keyAcceleration = 0;
      } else if (newY < this.maxScrollY) {
        newY = this.maxScrollY;
        this.keyAcceleration = 0;
      }

      this.scrollTo(newX, newY, 0);
      this.keyTime = now;
    },
    _animate: function (destX, destY, duration, easingFn) {
      var that = this,
          startX = this.x,
          startY = this.y,
          startTime = utils.getTime(),
          destTime = startTime + duration;

      function step() {
        var now = utils.getTime(),
            newX,
            newY,
            easing;

        if (now >= destTime) {
          that.isAnimating = false;

          that._translate(destX, destY);

          if (!that.resetPosition(that.options.bounceTime)) {
            that._execEvent('scrollEnd');
          }

          return;
        }

        now = (now - startTime) / duration;
        easing = easingFn(now);
        newX = (destX - startX) * easing + startX;
        newY = (destY - startY) * easing + startY;

        that._translate(newX, newY);

        if (that.isAnimating) {
          rAF(step);
        }

        if (that.options.probeType == 3) {
          that._execEvent('scroll');
        }
      }

      this.isAnimating = true;
      step();
    },
    handleEvent: function (e) {
      switch (e.type) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(e);

          break;

        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(e);

          break;

        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(e);

          break;

        case 'orientationchange':
        case 'resize':
          this._resize();

          break;

        case 'transitionend':
        case 'webkitTransitionEnd':
        case 'oTransitionEnd':
        case 'MSTransitionEnd':
          this._transitionEnd(e);

          break;

        case 'wheel':
        case 'DOMMouseScroll':
        case 'mousewheel':
          this._wheel(e);

          break;

        case 'keydown':
          this._key(e);

          break;

        case 'click':
          if (this.enabled && !e._constructed) {
            e.preventDefault();
            e.stopPropagation();
          }

          break;
      }
    }
  };

  function createDefaultScrollbar(direction, interactive, type) {
    var scrollbar = document.createElement('div'),
        indicator = document.createElement('div');

    if (type === true) {
      scrollbar.style.cssText = 'position:absolute;z-index:9999';
      indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
    }

    indicator.className = 'iScrollIndicator';

    if (direction == 'h') {
      if (type === true) {
        scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
        indicator.style.height = '100%';
      }

      scrollbar.className = 'iScrollHorizontalScrollbar';
    } else {
      if (type === true) {
        scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
        indicator.style.width = '100%';
      }

      scrollbar.className = 'iScrollVerticalScrollbar';
    }

    scrollbar.style.cssText += ';overflow:hidden';

    if (!interactive) {
      scrollbar.style.pointerEvents = 'none';
    }

    scrollbar.appendChild(indicator);
    return scrollbar;
  }

  function Indicator(scroller, options) {
    this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;
    this.options = {
      listenX: true,
      listenY: true,
      interactive: false,
      resize: true,
      defaultScrollbars: false,
      shrink: false,
      fade: false,
      speedRatioX: 0,
      speedRatioY: 0
    };

    for (var i in options) {
      this.options[i] = options[i];
    }

    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;

    if (this.options.interactive) {
      if (!this.options.disableTouch) {
        utils.addEvent(this.indicator, 'touchstart', this);
        utils.addEvent(window, 'touchend', this);
      }

      if (!this.options.disablePointer) {
        utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
        utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
      }

      if (!this.options.disableMouse) {
        utils.addEvent(this.indicator, 'mousedown', this);
        utils.addEvent(window, 'mouseup', this);
      }
    }

    if (this.options.fade) {
      this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
      var durationProp = utils.style.transitionDuration;

      if (!durationProp) {
        return;
      }

      this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms'; // remove 0.0001ms

      var self = this;

      if (utils.isBadAndroid) {
        rAF(function () {
          if (self.wrapperStyle[durationProp] === '0.0001ms') {
            self.wrapperStyle[durationProp] = '0s';
          }
        });
      }

      this.wrapperStyle.opacity = '0';
    }
  }

  Indicator.prototype = {
    handleEvent: function (e) {
      switch (e.type) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(e);

          break;

        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(e);

          break;

        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(e);

          break;
      }
    },
    destroy: function () {
      if (this.options.fadeScrollbars) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;
      }

      if (this.options.interactive) {
        utils.removeEvent(this.indicator, 'touchstart', this);
        utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
        utils.removeEvent(this.indicator, 'mousedown', this);
        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);
        utils.removeEvent(window, 'touchend', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
        utils.removeEvent(window, 'mouseup', this);
      }

      if (this.options.defaultScrollbars && this.wrapper.parentNode) {
        this.wrapper.parentNode.removeChild(this.wrapper);
      }
    },
    _start: function (e) {
      var point = e.touches ? e.touches[0] : e;
      e.preventDefault();
      e.stopPropagation();
      this.transitionTime();
      this.initiated = true;
      this.moved = false;
      this.lastPointX = point.pageX;
      this.lastPointY = point.pageY;
      this.startTime = utils.getTime();

      if (!this.options.disableTouch) {
        utils.addEvent(window, 'touchmove', this);
      }

      if (!this.options.disablePointer) {
        utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
      }

      if (!this.options.disableMouse) {
        utils.addEvent(window, 'mousemove', this);
      }

      this.scroller._execEvent('beforeScrollStart');
    },
    _move: function (e) {
      var point = e.touches ? e.touches[0] : e,
          deltaX,
          deltaY,
          newX,
          newY,
          timestamp = utils.getTime();

      if (!this.moved) {
        this.scroller._execEvent('scrollStart');
      }

      this.moved = true;
      deltaX = point.pageX - this.lastPointX;
      this.lastPointX = point.pageX;
      deltaY = point.pageY - this.lastPointY;
      this.lastPointY = point.pageY;
      newX = this.x + deltaX;
      newY = this.y + deltaY;

      this._pos(newX, newY);

      if (this.scroller.options.probeType == 1 && timestamp - this.startTime > 300) {
        this.startTime = timestamp;

        this.scroller._execEvent('scroll');
      } else if (this.scroller.options.probeType > 1) {
        this.scroller._execEvent('scroll');
      } // INSERT POINT: indicator._move


      e.preventDefault();
      e.stopPropagation();
    },
    _end: function (e) {
      if (!this.initiated) {
        return;
      }

      this.initiated = false;
      e.preventDefault();
      e.stopPropagation();
      utils.removeEvent(window, 'touchmove', this);
      utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
      utils.removeEvent(window, 'mousemove', this);

      if (this.scroller.options.snap) {
        var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

        if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
          this.scroller.directionX = 0;
          this.scroller.directionY = 0;
          this.scroller.currentPage = snap;
          this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
        }
      }

      if (this.moved) {
        this.scroller._execEvent('scrollEnd');
      }
    },
    transitionTime: function (time) {
      time = time || 0;
      var durationProp = utils.style.transitionDuration;

      if (!durationProp) {
        return;
      }

      this.indicatorStyle[durationProp] = time + 'ms';

      if (!time && utils.isBadAndroid) {
        this.indicatorStyle[durationProp] = '0.0001ms'; // remove 0.0001ms

        var self = this;
        rAF(function () {
          if (self.indicatorStyle[durationProp] === '0.0001ms') {
            self.indicatorStyle[durationProp] = '0s';
          }
        });
      }
    },
    transitionTimingFunction: function (easing) {
      this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },
    refresh: function () {
      this.transitionTime();

      if (this.options.listenX && !this.options.listenY) {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
      } else if (this.options.listenY && !this.options.listenX) {
        this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
      } else {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
      }

      if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
        utils.addClass(this.wrapper, 'iScrollBothScrollbars');
        utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

        if (this.options.defaultScrollbars && this.options.customStyle) {
          if (this.options.listenX) {
            this.wrapper.style.right = '8px';
          } else {
            this.wrapper.style.bottom = '8px';
          }
        }
      } else {
        utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
        utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

        if (this.options.defaultScrollbars && this.options.customStyle) {
          if (this.options.listenX) {
            this.wrapper.style.right = '2px';
          } else {
            this.wrapper.style.bottom = '2px';
          }
        }
      }

      utils.getRect(this.wrapper); // force refresh

      if (this.options.listenX) {
        this.wrapperWidth = this.wrapper.clientWidth;

        if (this.options.resize) {
          this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
          this.indicatorStyle.width = this.indicatorWidth + 'px';
        } else {
          this.indicatorWidth = this.indicator.clientWidth;
        }

        this.maxPosX = this.wrapperWidth - this.indicatorWidth;

        if (this.options.shrink == 'clip') {
          this.minBoundaryX = -this.indicatorWidth + 8;
          this.maxBoundaryX = this.wrapperWidth - 8;
        } else {
          this.minBoundaryX = 0;
          this.maxBoundaryX = this.maxPosX;
        }

        this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
      }

      if (this.options.listenY) {
        this.wrapperHeight = this.wrapper.clientHeight;

        if (this.options.resize) {
          this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
          this.indicatorStyle.height = this.indicatorHeight + 'px';
        } else {
          this.indicatorHeight = this.indicator.clientHeight;
        }

        this.maxPosY = this.wrapperHeight - this.indicatorHeight;

        if (this.options.shrink == 'clip') {
          this.minBoundaryY = -this.indicatorHeight + 8;
          this.maxBoundaryY = this.wrapperHeight - 8;
        } else {
          this.minBoundaryY = 0;
          this.maxBoundaryY = this.maxPosY;
        }

        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
        this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
      }

      this.updatePosition();
    },
    updatePosition: function () {
      var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
          y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

      if (!this.options.ignoreBoundaries) {
        if (x < this.minBoundaryX) {
          if (this.options.shrink == 'scale') {
            this.width = Math.max(this.indicatorWidth + x, 8);
            this.indicatorStyle.width = this.width + 'px';
          }

          x = this.minBoundaryX;
        } else if (x > this.maxBoundaryX) {
          if (this.options.shrink == 'scale') {
            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
            this.indicatorStyle.width = this.width + 'px';
            x = this.maxPosX + this.indicatorWidth - this.width;
          } else {
            x = this.maxBoundaryX;
          }
        } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
          this.width = this.indicatorWidth;
          this.indicatorStyle.width = this.width + 'px';
        }

        if (y < this.minBoundaryY) {
          if (this.options.shrink == 'scale') {
            this.height = Math.max(this.indicatorHeight + y * 3, 8);
            this.indicatorStyle.height = this.height + 'px';
          }

          y = this.minBoundaryY;
        } else if (y > this.maxBoundaryY) {
          if (this.options.shrink == 'scale') {
            this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
            this.indicatorStyle.height = this.height + 'px';
            y = this.maxPosY + this.indicatorHeight - this.height;
          } else {
            y = this.maxBoundaryY;
          }
        } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
          this.height = this.indicatorHeight;
          this.indicatorStyle.height = this.height + 'px';
        }
      }

      this.x = x;
      this.y = y;

      if (this.scroller.options.useTransform) {
        this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
      } else {
        this.indicatorStyle.left = x + 'px';
        this.indicatorStyle.top = y + 'px';
      }
    },
    _pos: function (x, y) {
      if (x < 0) {
        x = 0;
      } else if (x > this.maxPosX) {
        x = this.maxPosX;
      }

      if (y < 0) {
        y = 0;
      } else if (y > this.maxPosY) {
        y = this.maxPosY;
      }

      x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
      y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
      this.scroller.scrollTo(x, y);
    },
    fade: function (val, hold) {
      if (hold && !this.visible) {
        return;
      }

      clearTimeout(this.fadeTimeout);
      this.fadeTimeout = null;
      var time = val ? 250 : 500,
          delay = val ? 0 : 300;
      val = val ? '1' : '0';
      this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
      this.fadeTimeout = setTimeout(function (val) {
        this.wrapperStyle.opacity = val;
        this.visible = +val;
      }.bind(this, val), delay);
    }
  };
  IScroll.utils = utils;

  if ( true && module.exports) {
    module.exports = IScroll;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return IScroll;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, document, Math);

/***/ }),

/***/ "6389":
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9dac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e662":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assets/theme/yilu/page.scss": "1c45"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "e662";

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "component", function() { return /* reexport */ src_component_0; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__("6389");
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_vue_default.a ? superProto.constructor : external_vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.5.1 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName].concat(args));
                    }
                }
                else {
                    if (args.length === 0) {
                        _this.$emit(emitName, returnValue);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, returnValue, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName, returnValue].concat(args));
                    }
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./src/options.ts


class VueChooUI {}
let options_Options = class Options extends external_vue_default.a {
  constructor() {
    super(...arguments);
    this.options = new VueChooUI();
  }

};
options_Options = __decorate([vue_class_component_esm], options_Options);
/* harmony default export */ var src_options = (options_Options);
// EXTERNAL MODULE: ./src/style/theme/default/index.scss
var theme_default = __webpack_require__("9dac");

// CONCATENATED MODULE: ./src/mixins/index.ts



class mixins_ChooUiComponentMixins extends external_vue_default.a {
  constructor() {
    super(...arguments);
    this.frameName = '';
    this.frameTheme = '';
  }

  get themeClass() {
    const {
      name,
      frameName,
      frameTheme
    } = this;
    return [`${frameName}-${frameTheme}-${name}`, `${frameName}-${name}`];
  }

  ChooUiOption(newOpt, oldOpt) {
    const {
      name,
      theme: {
        checked,
        map
      }
    } = newOpt;
    this.frameName = name;
    this.frameTheme = map[checked] !== undefined ? checked : 'default';

    try {
      __webpack_require__("e662")(`./${map[checked]}/${this.name}.scss`);
    } catch (err) {
      this.frameTheme = 'default';
    }
  }

}

__decorate([Watch('$choo', {
  immediate: true,
  deep: true
})], mixins_ChooUiComponentMixins.prototype, "ChooUiOption", null);
// CONCATENATED MODULE: ./src/component/page/index.tsx
var Page_1;

/* <template lang="pug">
  section(
    :class="themeClass"
  )
    section(
      v-if="$slots.header"
      :class="`${frameName}-page-header`"
    )
      slot(
        name="header"
      )
    section(
      :class="`${frameName}-page-main`"
    )
      section(
        :class="`${frameName}-page-content`"
      )
        slot
        slot(
          name="content"
        )
      section(
        v-if="$slots.footer"
        :class="`${frameName}-page-footer`"
      )
        slot(
          name="footer"
        )
      slot(
        name="main"
      )
    slot(
      name="page"
    )
</template>

<script lang="ts"> */



let page_Page = Page_1 = class Page extends mixins_ChooUiComponentMixins {
  constructor() {
    super(...arguments);
    this.name = 'page';
    this.test = 'bbb';
  }

  get isRootPage() {
    return this.getParentComponent(this);
  }

  render(h) {
    const {
      themeClass,
      frameName,
      isRootPage,
      $slots
    } = this;
    const Header = $slots.header && (isRootPage ? h("header", {
      "class": `${frameName}-page-header`
    }, [$slots.header]) : h("section", {
      "class": `${frameName}-page-header`
    }, [$slots.header]));
    const Content = isRootPage ? h("main", {
      "class": `${frameName}-page-content`
    }, [$slots.default, $slots.content]) : h("section", {
      "class": `${frameName}-page-content`
    }, [$slots.default, $slots.content]);
    const Footer = $slots.footer && (isRootPage ? h("footer", {
      "class": `${frameName}-page-footer`
    }, [$slots.footer]) : h("section", {
      "class": `${frameName}-page-footer`
    }, [$slots.footer]));
    return h("section", {
      "class": themeClass
    }, [Page_1.isShowHeader && Header, $slots.page, h("section", {
      "class": `${frameName}-page-main`
    }, [Content, Footer, $slots.main])]);
  }

  getParentComponent(component) {
    const rootComponent = this.$root;
    const parentComponent = component.$parent;

    if (rootComponent === parentComponent) {
      return true;
    }

    if (parentComponent.name === this.name) {
      return false;
    } else {
      return this.getParentComponent(parentComponent);
    }
  }

};
page_Page.isShowHeader = true;
page_Page = Page_1 = __decorate([vue_class_component_esm], page_Page);
/* harmony default export */ var page = (page_Page);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a58d78e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/header/index.vue?vue&type=template&id=7966c469&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.themeClass},[(_vm.btnMap.left.length)?_c('ul',{class:(_vm.frameName + "-header-btn")},[_vm._l((_vm.btnMap.left),function(icon,index){return [_c('li',{key:icon ? icon.name : ("left_" + index),on:{"click":function($event){icon && _vm.btnEvent($event, icon.event)}}},[(icon && icon.font)?_c('choo-icon',{attrs:{"type":icon.font.type,"code":icon.font.code}}):(icon && icon.src)?_c('img',{attrs:{"src":icon.src}}):_vm._e(),(icon.text)?_c('p',[_vm._v(_vm._s(icon.text))]):_vm._e()],1)]})],2):_vm._e(),_c('div',{class:(_vm.frameName + "-header-content")},[_vm._t("default")],2),(_vm.btnMap.right.length)?_c('ul',{class:(_vm.frameName + "-header-btn")},[_vm._l((_vm.btnMap.right),function(icon,index){return [_c('li',{key:icon ? icon.name : ("right_" + index)},[(icon && icon.font)?_c('choo-icon',{attrs:{"type":icon.font.type,"code":icon.font.code}}):(icon && icon.src)?_c('img',{attrs:{"src":icon.src}}):_vm._e(),(icon && icon.text)?_c('p',[_vm._v(_vm._s(icon.text))]):_vm._e()],1)]})],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component/header/index.vue?vue&type=template&id=7966c469&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/header/index.vue?vue&type=script&lang=ts&
var Header_1;



let headervue_type_script_lang_ts_Header = Header_1 = class Header extends mixins_ChooUiComponentMixins {
  constructor() {
    super(...arguments);
    this.name = 'header';
    this.btnMap = {
      left: [Header_1.defaultBack],
      right: []
    };
    this.isRootHeader = this.$parent.isRootPage;
  }

  created() {
    if (this.isRootHeader && !this.back) {
      this.btnMap.left.splice(0, 1);
    }
  }

  mounted() {
    this.initEvent();
  }

  destroyed() {
    this.removeEvent();
  }

  initEvent() {
    if (this.isRootHeader) {
      this.$choo.on('chooAddHeaderRightBtn', this.addRightBtnEvent);
      this.$choo.on('chooAddHeaderLeftBtn', this.addLeftBtnEvent);
      this.$choo.on('chooRemoveHeaderRightBtn', this.removeRightBtnEvent);
      this.$choo.on('chooRemoveHeaderLeftBtn', this.removeLeftBtnEvent);
      this.btnUnWatch = this.$watch('btnMap', this.btnWatch, {
        deep: true,
        immediate: true
      });
    }
  }

  btnWatch(val, old) {
    let {
      left,
      right
    } = val;

    if (left.length > 2) {
      left.splice(2, 1);
    }

    if (right.length > 2) {
      right.splice(2, 1);
    }

    if (this.spaceEquality) {
      if (left.length > right.length) {
        right.splice(right.length, 0, ...new Array(left.length - right.length));
      } else if (right.length < left.length) {
        left.splice(left.length, 0, ...new Array(right.length - left.length));
      }

      if (left.length !== right.length) {
        if (left.indexOf(undefined) !== -1) {
          val.left = left.filter(i => i !== undefined);
        }

        if (right.indexOf(undefined) !== -1) {
          val.right = right.filter(i => i !== undefined);
        }
      }
    } else {
      if (left.indexOf(undefined) !== -1) {
        val.left = left.filter(i => i !== undefined);
      }

      if (right.indexOf(undefined) !== -1) {
        val.right = right.filter(i => i !== undefined);
      }
    }
  }

  removeEvent() {
    if (this.isRootHeader) {
      this.btnUnWatch();
      this.$choo.off('chooAddHeaderRightBtn', this.addRightBtnEvent);
      this.$choo.off('chooAddHeaderLeftBtn', this.addLeftBtnEvent);
      this.$choo.off('chooRemoveHeaderRightBtn', this.removeRightBtnEvent);
      this.$choo.off('chooRemoveHeaderLeftBtn', this.removeLeftBtnEvent);
    }
  }

  addRightBtnEvent(event) {
    const detail = event.detail;
    this.btnMap.right.push(detail);
  }

  addLeftBtnEvent(event) {
    const detail = event.detail;
    this.btnMap.left.push(detail);
  }

  removeRightBtnEvent(event) {
    const detail = event.detail;
    this.btnMap.right = this.btnMap.right.filter(btn => btn.name !== detail.name);
  }

  removeLeftBtnEvent(event) {
    const detail = event.detail;
    this.btnMap.left = this.btnMap.left.filter(btn => btn.name !== detail.name);
  }

  btnEvent(event, eventName) {
    const defaultEvent = this.$choo.emit(eventName, event);

    if (eventName === Header_1.defaultBack.event && defaultEvent) {
      this.pageBack();
    }
  }

  pageBack() {
    this.$choo.pop();
  }

};
headervue_type_script_lang_ts_Header.defaultBack = {
  name: 'back',
  event: 'chooPageBack',
  font: {
    type: 'chooui',
    code: 'choo-left'
  }
};
headervue_type_script_lang_ts_Header = Header_1 = __decorate([vue_class_component_esm({
  props: {
    back: {
      default: true
    },
    spaceEquality: {
      default: false
    }
  }
})], headervue_type_script_lang_ts_Header);
/* harmony default export */ var headervue_type_script_lang_ts_ = (headervue_type_script_lang_ts_Header);
// CONCATENATED MODULE: ./src/component/header/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var component_headervue_type_script_lang_ts_ = (headervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component/header/index.vue





/* normalize component */

var component = normalizeComponent(
  component_headervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a58d78e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/icon/index.vue?vue&type=template&id=c3f66b78&lang=pug&
var iconvue_type_template_id_c3f66b78_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.themeClass.concat( [_vm.type], [_vm.code]),style:({fontSize: (_vm.size + "px")})})}
var iconvue_type_template_id_c3f66b78_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/component/icon/index.vue?vue&type=template&id=c3f66b78&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/icon/index.vue?vue&type=script&lang=ts&



let iconvue_type_script_lang_ts_Icon = class Icon extends mixins_ChooUiComponentMixins {
  constructor() {
    super(...arguments);
    this.name = 'icon';
  }

};
iconvue_type_script_lang_ts_Icon = __decorate([vue_class_component_esm({
  props: {
    size: {
      default: 14
    },
    code: {},
    type: {
      default: 'chooui'
    }
  }
})], iconvue_type_script_lang_ts_Icon);
/* harmony default export */ var iconvue_type_script_lang_ts_ = (iconvue_type_script_lang_ts_Icon);
// CONCATENATED MODULE: ./src/component/icon/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var component_iconvue_type_script_lang_ts_ = (iconvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/component/icon/index.vue





/* normalize component */

var icon_component = normalizeComponent(
  component_iconvue_type_script_lang_ts_,
  iconvue_type_template_id_c3f66b78_lang_pug_render,
  iconvue_type_template_id_c3f66b78_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a58d78e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/scroll-view/index.vue?vue&type=template&id=403fff1f&lang=pug&
var scroll_viewvue_type_template_id_403fff1f_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.themeClass,on:{"touchstart":_vm.touchstart,"touchend":_vm.touchend}},[_c('section',{class:(_vm.frameName + "-scroll-view-content")},[(_vm._events['pull-down'])?_c('section',{class:[(_vm.frameName + "-scroll-view-pull-down"), _vm.pullDown.status]},[(_vm.$scopedSlots['pullDown'])?[_vm._t("pullDown",null,{"pullDown":_vm.pullDown})]:_c('pullDown',_vm._b({ref:"pullDown"},'pullDown',_vm.pullDown,false))],2):_vm._e(),_vm._t("default"),_vm._v(_vm._s(_vm.observerList.pulldown))],2)])}
var scroll_viewvue_type_template_id_403fff1f_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/component/scroll-view/index.vue?vue&type=template&id=403fff1f&lang=pug&

// EXTERNAL MODULE: ./src/component/scroll-view/iscroll.js
var iscroll = __webpack_require__("3b3b");
var iscroll_default = /*#__PURE__*/__webpack_require__.n(iscroll);

// CONCATENATED MODULE: ./src/component/pull-down/index.ts


class pull_down_PullDown extends mixins_ChooUiComponentMixins {
  constructor() {
    super(...arguments);
    this.name = 'pull-down';
  }

  init() {
    this.$nextTick(() => {
      this.$parent.pullDown.status = scroll_viewvue_type_script_lang_ts_PullDownStatus.ToBeActivated;
    });
  }

}
// CONCATENATED MODULE: ./src/component/scroll-view/pullDown.tsx



var PullDownStatus;

(function (PullDownStatus) {
  PullDownStatus["NotActive"] = "NotActive";
  PullDownStatus["ToBeActivated"] = "ToBeActivated";
  PullDownStatus["Actived"] = "Actived";
  PullDownStatus["Execute"] = "Execute";
  PullDownStatus["Notice"] = "Notice";
  PullDownStatus["Done"] = "Done";
})(PullDownStatus || (PullDownStatus = {}));

let pullDown_PullDown = class PullDown extends pull_down_PullDown {
  constructor() {
    super(...arguments);
    this.height = 0;
  }

  mounted() {
    super.init();
  }

  render() {
    const h = arguments[0];
    return h("section", {
      "class": [...this.themeClass]
    }, ["pull down---", this.status]);
  }

};
pullDown_PullDown = __decorate([vue_class_component_esm({
  props: {
    status: {
      default: PullDownStatus.NotActive
    }
  }
})], pullDown_PullDown);
/* harmony default export */ var pullDown = (pullDown_PullDown);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/scroll-view/index.vue?vue&type=script&lang=ts&





var scroll_viewvue_type_script_lang_ts_PullDownStatus;

(function (PullDownStatus) {
  PullDownStatus["NotActive"] = "NotActive";
  PullDownStatus["ToBeActivated"] = "ToBeActivated";
  PullDownStatus["Actived"] = "Actived";
  PullDownStatus["Execute"] = "Execute";
  PullDownStatus["Notice"] = "Notice";
  PullDownStatus["Done"] = "Done";
})(scroll_viewvue_type_script_lang_ts_PullDownStatus || (scroll_viewvue_type_script_lang_ts_PullDownStatus = {}));

let scroll_viewvue_type_script_lang_ts_Icon = class Icon extends mixins_ChooUiComponentMixins {
  constructor() {
    super(...arguments);
    this.name = 'scroll-view';
    this.pullDown = {
      status: scroll_viewvue_type_script_lang_ts_PullDownStatus.NotActive
    };
    this.touch = false;
    this.observerList = {
      content: {
        callback: this.listenerContent
      },
      pulldown: {
        width: undefined,
        height: undefined
      },
      pullup: {
        width: undefined,
        height: undefined
      }
    };
  }

  mounted() {
    this.init();
    this.createdObserver('content', ['style']);
    this.initPullDown();
    this.initPullUp();
  }

  updated() {
    this.initPullDown();
    this.initPullUp();
  }

  destroyed() {
    this.destroyObserver('content');
    this.destroyObserver('pullDown');
    this.destroyObserver('pullUp');
  }

  init() {
    this.iscroll = new iscroll_default.a(this.$el, Object.assign({}, {
      probeType: 3,
      forceVerticalScroll: true,
      scrollbars: true,
      fadeScrollbars: true,
      shrinkScrollbars: 'scale'
    }, this.options, {
      startX: this.x,
      starty: this.y
    }));
    this.iscrollEvent();
    this.$emit('init');
  }

  createdObserver(name, attr) {
    const listKey = name.toLowerCase();
    const className = name.replace(/([A-Z])/g, "-$1").toLowerCase();

    if (!this.observerList[listKey].Observer) {
      this.observerList[listKey].Observer = this.listenerDOM(this.$el.querySelector(`.${this.frameName}-scroll-view-${className}`), this.observerList[listKey], attr);
    }
  }

  destroyObserver(name) {
    const listKey = name.toLowerCase();
    const className = name.replace(/([A-Z])/g, "-$1").toLowerCase();

    if (!this.observerList[listKey].Observer) {
      return;
    } else {
      const observer = this.observerList[listKey].Observer;
      observer.disconnect();
      observer.takeRecords();
      delete this.observerList[listKey].Observer;
    }
  }

  iscrollEvent() {
    this.iscroll.on('beforeScrollStart', this.emit('beforeScrollStart'));
    this.iscroll.on('scrollCancel', this.emit('scrollCancel'));
    this.iscroll.on('scrollStart', this.emit('scrollStart'));
    this.iscroll.on('scroll', this.emit('scroll'));
    this.iscroll.on('scrollEnd', this.emit('scrollEnd'));
  }

  emit(type) {
    return () => {
      const {
        x,
        y
      } = this.iscroll;
      this.$emit('update:x', x);
      this.$emit('update:y', y);

      if (this._events[type]) {
        this.$emit('scrollEnd', {
          x,
          y
        });
      }
    };
  }

  initPullDown() {
    this.iscroll.off('scroll', this.pullDownEvent);

    if (!this._events['pull-down']) {
      this.destroyObserver('pullDown');
      return;
    }

    this.createdObserver('pullDown', ['class']);
    this.iscroll.on('scroll', this.pullDownEvent);
  }

  pullDownEvent() {
    let height = this.observerList.pulldown.height;
    height = parseInt(height);

    if (this.touch && (this.pullDown.status === scroll_viewvue_type_script_lang_ts_PullDownStatus.ToBeActivated || this.pullDown.status === scroll_viewvue_type_script_lang_ts_PullDownStatus.Actived)) {
      if (this.iscroll.y > height) {
        this.pullDown.status = scroll_viewvue_type_script_lang_ts_PullDownStatus.Actived;
        this.iscroll.beforeResetPosition = this.pullDownExecuteEvent;
      } else {
        this.pullDown.status = scroll_viewvue_type_script_lang_ts_PullDownStatus.ToBeActivated;
        this.iscroll.beforeResetPosition = undefined;
      }
    }
  }

  initPullUp() {
    if (!this._events['pull-up']) {
      this.destroyObserver('pullUp');
      return;
    }

    this.createdObserver('pullUp', ['class']);
  }

  listenerContent() {
    this.iscroll.refresh();
  }

  listenerDOM(element, observerItem, attr) {
    let MutationObserver = window.MutationObserver;
    const observer = new MutationObserver(() => {
      const width = getComputedStyle(element).getPropertyValue('width');
      const height = getComputedStyle(element).getPropertyValue('height');

      if (observerItem.width === width && observerItem.height === height) {
        return;
      }

      observerItem.width = width;
      observerItem.height = height;
      observerItem.callback && observerItem.callback();
    });
    observer.observe(element, {
      attributes: true,
      attributeFilter: attr,
      attributeOldValue: false
    });
    return observer;
  }

  touchstart(e) {
    this.touch = true;
  }

  touchend(e) {
    this.touch = false;
  }

  pullDownExecuteEvent(next) {
    this.pullDown.status = scroll_viewvue_type_script_lang_ts_PullDownStatus.Execute;
    this.$nextTick(() => {
      let height = this.observerList.pulldown.height;
      height = this.iscroll.y - parseInt(height);
      this.iscroll.scrollTo(0, height, 0.00001, undefined);
    }); // }
  }

};
scroll_viewvue_type_script_lang_ts_Icon = __decorate([vue_class_component_esm({
  props: {
    options() {
      return {};
    },

    x: {
      default: 0
    },
    y: {
      default: 0
    }
  },
  components: {
    pullDown: pullDown
  }
})], scroll_viewvue_type_script_lang_ts_Icon);
/* harmony default export */ var scroll_viewvue_type_script_lang_ts_ = (scroll_viewvue_type_script_lang_ts_Icon);
// CONCATENATED MODULE: ./src/component/scroll-view/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var component_scroll_viewvue_type_script_lang_ts_ = (scroll_viewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/component/scroll-view/index.vue





/* normalize component */

var scroll_view_component = normalizeComponent(
  component_scroll_viewvue_type_script_lang_ts_,
  scroll_viewvue_type_template_id_403fff1f_lang_pug_render,
  scroll_viewvue_type_template_id_403fff1f_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var scroll_view = (scroll_view_component.exports);
// CONCATENATED MODULE: ./src/component/index.ts





const list = {
  page: page,
  icon: icon,
  header: header,
  scrollView: scroll_view,
  PullDown: pull_down_PullDown
};

/* harmony default export */ var src_component = (list);
// CONCATENATED MODULE: ./src/methods/event/on.ts


const on = (eventName, callback, bind = document) => {
  if (bind instanceof external_vue_default.a) {
    bind = bind.$el;
  }

  bind.addEventListener(eventName, callback);
};

/* harmony default export */ var event_on = (on);
// CONCATENATED MODULE: ./src/methods/event/off.ts


const off = (eventName, callback, bind = document) => {
  if (bind instanceof external_vue_default.a) {
    bind = bind.$el;
  }

  bind.addEventListener(eventName, callback);
};

/* harmony default export */ var event_off = (off);
// CONCATENATED MODULE: ./src/methods/event/emit.ts


const emit = (eventName, detail, bind = document) => {
  if (bind instanceof external_vue_default.a) {
    bind = bind.$el;
  }

  const event = new CustomEvent(eventName, {
    detail,
    cancelable: true
  });
  return bind.dispatchEvent(event);
};

/* harmony default export */ var event_emit = (emit);
// CONCATENATED MODULE: ./src/methods/event/index.ts




// CONCATENATED MODULE: ./src/methods/router/push.ts

/* harmony default export */ var push = ((location, onComplete, onAbort) => {
  src_0.router.push(location, onComplete, onAbort);
});
// CONCATENATED MODULE: ./src/methods/router/pop.ts

/* harmony default export */ var pop = (() => {
  console.log(src_0);
  src_0.router.back();
});
// CONCATENATED MODULE: ./src/methods/router/index.ts



// CONCATENATED MODULE: ./src/utils/isJSON.ts
/* harmony default export */ var isJSON = (obj => {
  return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length;
});
// CONCATENATED MODULE: ./src/utils/createDOM.ts

class createDOM_CreateDOM {
  constructor(tag = 'section', attrs, parentNode = document.querySelector('body')) {
    this.DOM = this.createDOM(tag, parentNode, attrs);
  }

  createDOM(tag, parentNode, attrs) {
    const dom = document.createElement(tag);
    const attrKey = Object.keys(attrs || {});
    attrKey.forEach(key => {
      const value = attrs[key];

      if (isJSON(value)) {
        const styleList = Object.keys(value);
        styleList.forEach(style => {
          dom.style[style] = value[style];
        });
      } else {
        dom.setAttribute(key, value);
      }
    });
    parentNode.appendChild(dom);
    return dom;
  }

}
// CONCATENATED MODULE: ./src/utils/index.ts


// CONCATENATED MODULE: ./src/mixins/noBaseMixins.ts


class noBaseMixins_NoBaseMixins extends mixins_ChooUiComponentMixins {
  constructor(opt, tag = 'section') {
    super(opt);
    this.createDOM(tag);
  }

  destroyed() {
    const el = this.$el;
    const parent = el.parentElement;

    if (parent !== null) {
      parent.removeChild(el);
    }
  }

  createDOM(tag) {
    this.DOM = new createDOM_CreateDOM(tag).DOM;
  }

}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5a58d78e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/basic-tips/index.vue?vue&type=template&id=9b7750f4&lang=pug&
var basic_tipsvue_type_template_id_9b7750f4_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.themeClass},[_vm._t("default")],2)}
var basic_tipsvue_type_template_id_9b7750f4_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/component/basic-tips/index.vue?vue&type=template&id=9b7750f4&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/component/basic-tips/index.vue?vue&type=script&lang=ts&



let basic_tipsvue_type_script_lang_ts_Tips = class Tips extends mixins_ChooUiComponentMixins {
  constructor() {
    super(...arguments);
    this.name = 'tips';
  }

};
basic_tipsvue_type_script_lang_ts_Tips = __decorate([vue_class_component_esm], basic_tipsvue_type_script_lang_ts_Tips);
/* harmony default export */ var basic_tipsvue_type_script_lang_ts_ = (basic_tipsvue_type_script_lang_ts_Tips);
// CONCATENATED MODULE: ./src/component/basic-tips/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var component_basic_tipsvue_type_script_lang_ts_ = (basic_tipsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/component/basic-tips/index.vue





/* normalize component */

var basic_tips_component = normalizeComponent(
  component_basic_tipsvue_type_script_lang_ts_,
  basic_tipsvue_type_template_id_9b7750f4_lang_pug_render,
  basic_tipsvue_type_template_id_9b7750f4_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var basic_tips = (basic_tips_component.exports);
// CONCATENATED MODULE: ./src/methods/toast/index.tsx




let toast_CreateToast = class CreateToast extends noBaseMixins_NoBaseMixins {
  constructor(opt) {
    super(opt);
    this.name = 'toast';
    this.message = 'null';
    this.duration = 3000;
    this.show = false;
  }

  mounted() {
    this.show = true;
  }

  render(h) {
    const {
      themeClass,
      message,
      show,
      animateEnter,
      animateLeave
    } = this;
    const transitionName = `${themeClass[0]}-animate`;
    let toast;

    if (show) {
      toast = h("transition", {
        attrs: {
          name: transitionName
        },
        on: {
          "afterEnter": animateEnter,
          "afterLeave": animateLeave
        }
      }, [h("section", {
        "class": themeClass
      }, [h("basic-tips", {
        domProps: {
          "innerHTML": message
        }
      })])]);
    } else {
      toast = h("transition", {
        attrs: {
          name: transitionName
        }
      });
    }

    return toast;
  }

  destroyed() {
    super.destroyed();
  }

  animateEnter() {
    setTimeout(() => {
      this.show = false;
      this.$nextTick(() => {
        if (this.$el.innerHTML === undefined) {
          this.$destroy();
        }
      });
    }, this.duration);
  }

  animateLeave() {
    this.$destroy();
  }

};
toast_CreateToast = __decorate([vue_class_component_esm({
  components: {
    basicTips: basic_tips
  }
})], toast_CreateToast);

class Toast {
  constructor(opt) {
    const example = new toast_CreateToast({
      data() {
        return opt;
      }

    });
    this.message = example.message;
    this.duration = example.duration;
    example.$mount(example.DOM);
  }

}

/* harmony default export */ var toast = ((opt = {}) => {
  return new Toast(opt);
});
// CONCATENATED MODULE: ./src/methods/index.ts



const methodList = {
  on: event_on,
  off: event_off,
  emit: event_emit,
  push: push,
  pop: pop,
  Toast: toast
};

/* harmony default export */ var methods = (methodList);
// CONCATENATED MODULE: ./src/index.ts





class src_ChooUI {
  constructor() {
    this.example = new src_options();
    this.name = 'choo';
    this.theme = {
      checked: 'default',
      map: {}
    };

    this.install = (vue, options) => {
      if (!options) {
        throw new Error('router 为必要参数');
      }

      const router = options.router;

      if (!router) {
        throw new Error('router 为必要参数');
      }

      if (!(router instanceof external_vue_router_default.a)) {
        throw new Error('router 必须为 VueRouter 实例');
      }

      this.router = options.router;

      if (options && options.theme) {
        this.theme.checked = options.theme.checked || 'default';
        Object.assign(this.theme.map, options.theme.map || {});
      }

      Object.defineProperty(vue.prototype, '$choo', {
        get: () => {
          return { ...this.example.options,
            ...methods
          };
        }
      });
      Object.keys(src_component).forEach(componentName => {
        const components = src_component[componentName];
        componentName = componentName.replace(/([A-Z])/g, '-$1').toLowerCase();
        vue.component(`${this.name}-${componentName}`, components);
      });
    };

    const {
      name,
      theme
    } = this;
    this.example.options = {
      name,
      theme
    };
  }

}

const example = new src_ChooUI();
const src_component_0 = src_component;
/* harmony default export */ var src_0 = (example);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=index.common.js.map