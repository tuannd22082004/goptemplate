/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//  Window scroll sticky class add

function windowScroll() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}
window.addEventListener("scroll", function (ev) {
  ev.preventDefault();
  windowScroll();
});

// tiny slider

var slider = tns({
  container: '.client-slider',
  loop: true,
  autoplay: true,
  mouseDrag: true,
  controls: false,
  navPosition: "bottom",
  nav: false,
  autoplayTimeout: 4000,
  speed: 900,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  controlsText: ['&#8592;', '&#8594;'],
  autoplayButtonOutput: false,
  responsive: {
    992: {
      gutter: 20,
      items: 6
    },
    768: {
      gutter: 20,
      items: 3
    },
    576: {
      gutter: 20,
      items: 2
    }
  }
});

// ===========================================================
// See tutorial at : 
// mouse hover effect
// ===========================================================

(function () {
  // Init
  var container = document.getElementById("features"),
    inner = document.getElementById("inner-2");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function updatePosition(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * 1;
    },
    setOrigin: function setOrigin(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function show() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function isTimeToUpdate() {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function onMouseEnterHandler(event) {
    update(event);
  };
  var onMouseLeaveHandler = function onMouseLeaveHandler() {
    inner.style = "";
  };
  var onMouseMoveHandler = function onMouseMoveHandler(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function update(event) {
    mouse.updatePosition(event);
    updateTransformStyle((mouse.y / inner.offsetHeight / 5).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
  };
  var updateTransformStyle = function updateTransformStyle(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //--------------------------------------------------------

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
})();

// swiper slider

new Swiper('.swiper-container', _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  loop: true,
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 20,
  pagination: '.swiper-pagination'
}, "slidesPerView", 'auto'), "paginationClickable", true), "spaceBetween", 0), "centeredSlides", true), "speed", 1500), "breakpoints", {
  1920: {
    slidesPerView: 3,
    spaceBetween: 50
  },
  1028: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 10
  }
}));

// ===========================================================
// See tutorial at : 
// mouse hover effect
// ===========================================================

(function () {
  // Init
  var container = document.getElementById("part2"),
    inner = document.getElementById("inner-3");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function updatePosition(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * 1;
    },
    setOrigin: function setOrigin(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function show() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function isTimeToUpdate() {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function onMouseEnterHandler(event) {
    update(event);
  };
  var onMouseLeaveHandler = function onMouseLeaveHandler() {
    inner.style = "";
  };
  var onMouseMoveHandler = function onMouseMoveHandler(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function update(event) {
    mouse.updatePosition(event);
    updateTransformStyle((mouse.y / inner.offsetHeight / 5).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
  };
  var updateTransformStyle = function updateTransformStyle(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //--------------------------------------------------------

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
})();

// ===========================================================
// See tutorial at : 
// mouse hover effect
// cta
// ===========================================================
(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  var elem = document.querySelector("#cta-ani");
  // Magic happens here
  function parallax(e) {
    var _w = window.innerWidth / 2;
    var _h = window.innerHeight / 2;
    var _mouseX = e.clientX;
    var _mouseY = e.clientY;
    var _depth1 = "".concat(50 - (_mouseX - _w) * 0.10, "% ").concat(50 - (_mouseY - _h) * 0.10, "%");
    var _depth2 = "".concat(50 - (_mouseX - _w) * 0.02, "% ").concat(50 - (_mouseY - _h) * 0.02, "%");
    var _depth3 = "".concat(50 - (_mouseX - _w) * 0.06, "% ").concat(50 - (_mouseY - _h) * 0.06, "%");
    var x = "".concat(_depth3, ", ").concat(_depth2, ", ").concat(_depth1);
    elem.style.backgroundPosition = x;
  }
})();

// ===========================================================
// See tutorial at : 
// mouse hover effect
// ===========================================================
(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  var elem = document.querySelector("#cta-footer");
  // Magic happens here
  function parallax(e) {
    var _w = window.innerWidth / 2;
    var _h = window.innerHeight / 2;
    var _mouseX = e.clientX;
    var _mouseY = e.clientY;
    var _depth1 = "".concat(50 - (_mouseX - _w) * 0.10, "% ").concat(50 - (_mouseY - _h) * 0.10, "%");
    var _depth2 = "".concat(50 - (_mouseX - _w) * 0.02, "% ").concat(50 - (_mouseY - _h) * 0.02, "%");
    var _depth3 = "".concat(50 - (_mouseX - _w) * 0.06, "% ").concat(50 - (_mouseY - _h) * 0.06, "%");
    var x = "".concat(_depth3, ", ").concat(_depth2, ", ").concat(_depth1);
    elem.style.backgroundPosition = x;
  }
})();

//*****************/ The typewriter element*****************//

// Type demo-6

var TxtType = function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
function typewrite() {
  if (toRotate === 'undefined') {
    changeText();
  } else var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
}
;

/***/ }),

/***/ "./public/scss/style.scss":
/*!********************************!*\
  !*** ./public/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/app": 0,
/******/ 			"dist/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/style"], () => (__webpack_require__("./public/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/style"], () => (__webpack_require__("./public/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;