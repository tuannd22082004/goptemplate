/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var navbarCollapse = document.getElementById("navbarCollapse");
  navbarCollapse.addEventListener("show.bs.collapse", function () {
    navbar.classList.add("bg-color-7");
  });
  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    navbar.classList.remove("bg-color-7");
  });
});
function windowScroll() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add("bg-color-5");
    navbar.classList.add("py-3");
    navbar.classList.remove("py-4");
  } else {
    navbar.classList.remove("bg-color-5");
    navbar.classList.remove("py-3");
    navbar.classList.add("py-4");
  }
}
window.addEventListener("scroll", function (ev) {
  ev.preventDefault();
  windowScroll();
});
var TxtType = function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};
__webpack_require__(/*! ./home-1 */ "./public/js/home-1.js");

/***/ }),

/***/ "./public/js/home-1.js":
/*!*****************************!*\
  !*** ./public/js/home-1.js ***!
  \*****************************/
/***/ (() => {

function initMouseHoverEffect(containerId, innerId) {
  var container = document.getElementById(containerId);
  var inner = document.getElementById(innerId);
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function updatePosition(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = e.clientY - this._y;
    },
    setOrigin: function setOrigin(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    }
  };
  mouse.setOrigin(container);
  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function isTimeToUpdate() {
    return counter++ % refreshRate === 0;
  };
  var updateTransformStyle = function updateTransformStyle(x, y) {
    var style = "rotateX(".concat(x, "deg) rotateY(").concat(y, "deg)");
    Object.assign(inner.style, {
      transform: style,
      webkitTransform: style,
      mozTransform: style,
      msTransform: style,
      oTransform: style
    });
  };
  var update = function update(event) {
    mouse.updatePosition(event);
    updateTransformStyle((mouse.y / inner.offsetHeight / 5).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));
  };
  container.onmousemove = function (event) {
    return isTimeToUpdate() && update(event);
  };
  container.onmouseleave = function () {
    return inner.style = '';
  };
  container.onmouseenter = function (event) {
    return update(event);
  };
}
initMouseHoverEffect('features-primary', 'inner-primary');
initMouseHoverEffect('features-secondary', 'inner-secondary');
document.addEventListener('DOMContentLoaded', function () {
  function initSwipers() {
    new Swiper('.brands__swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      breakpoints: {
        1920: {
          slidesPerView: 9,
          spaceBetween: 50
        },
        1028: {
          slidesPerView: 6,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 12
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 12
        }
      }
    });
    new Swiper('.testimonial__swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        1028: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    });
  }
  initSwipers();
});
function applyParallax(selectors) {
  selectors.forEach(function (selector) {
    var elem = document.querySelector(selector);
    if (!elem) {
      console.error("Ph\u1EA7n t\u1EED ".concat(selector, " kh\xF4ng t\u1ED3n t\u1EA1i trong DOM."));
      return;
    }
    document.addEventListener('mousemove', function parallax(e) {
      var _w = window.innerWidth / 2;
      var _h = window.innerHeight / 2;
      var _mouseX = e.clientX;
      var _mouseY = e.clientY;
      var _depth1 = "".concat(50 - (_mouseX - _w) * 0.01, "% ").concat(50 - (_mouseY - _h) * 0.01, "%");
      var _depth2 = "".concat(50 - (_mouseX - _w) * 0.02, "% ").concat(50 - (_mouseY - _h) * 0.02, "%");
      var _depth3 = "".concat(50 - (_mouseX - _w) * 0.06, "% ").concat(50 - (_mouseY - _h) * 0.06, "%");
      var x = "".concat(_depth3, ", ").concat(_depth2, ", ").concat(_depth1);
      elem.style.backgroundPosition = x;
    });
  });
}
applyParallax(['.banner__background', '.banner__round', '.cta', '.subscribe']);
var counter = document.querySelectorAll('.counter__title');
var speed = 35;
counter.forEach(function (counter__title) {
  var updateCount = function updateCount() {
    var target = +counter__title.getAttribute('data-bs-target');
    var count = +counter__title.innerText;
    var inc = target / speed;
    if (count < target) {
      counter__title.innerText = (count + inc).toFixed(0);
      setTimeout(updateCount, 5);
    } else {
      counter__title.innerText = target;
    }
  };
  updateCount();
});

/***/ }),

/***/ "./public/scss/global.scss":
/*!*********************************!*\
  !*** ./public/scss/global.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/scss/common.scss":
/*!*********************************!*\
  !*** ./public/scss/common.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/scss/home_page.scss":
/*!************************************!*\
  !*** ./public/scss/home_page.scss ***!
  \************************************/
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
/******/ 			"/public/dist/js/app": 0,
/******/ 			"public/dist/css/common": 0,
/******/ 			"public/dist/css/home_page": 0,
/******/ 			"public/dist/css/global": 0
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
/******/ 	__webpack_require__.O(undefined, ["public/dist/css/common","public/dist/css/home_page","public/dist/css/global"], () => (__webpack_require__("./public/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["public/dist/css/common","public/dist/css/home_page","public/dist/css/global"], () => (__webpack_require__("./public/scss/global.scss")))
/******/ 	__webpack_require__.O(undefined, ["public/dist/css/common","public/dist/css/home_page","public/dist/css/global"], () => (__webpack_require__("./public/scss/common.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/dist/css/common","public/dist/css/home_page","public/dist/css/global"], () => (__webpack_require__("./public/scss/home_page.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;