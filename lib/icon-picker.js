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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/autocomplete");

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon-picker/src/icon-picker.vue?vue&type=template&id=38020b76&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-autocomplete",
    {
      ref: "input",
      staticClass: "el-iconpicker",
      attrs: {
        "popper-class": "el-iconpicker-popper",
        value: _vm.currentValue,
        name: _vm.name,
        size: _vm.inputIconpickerSize,
        disabled: _vm.inputIconpickerDisabled,
        clearable: _vm.clearable,
        placeholder: _vm.placeholder,
        fetchSuggestions: _vm.querySearch
      },
      on: { input: _vm.handleInput, select: _vm.handleSelect },
      scopedSlots: _vm._u([
        {
          key: "default",
          fn: function(ref) {
            var item = ref.item
            return [
              _c("div", { attrs: { title: item.name } }, [
                _c("i", { class: item.name })
              ])
            ]
          }
        }
      ])
    },
    [
      _c("template", { slot: "prepend" }, [
        _c("i", { class: _vm.currentValue })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/icon-picker/src/icon-picker.vue?vue&type=template&id=38020b76&

// EXTERNAL MODULE: external "element-ui/lib/autocomplete"
var autocomplete_ = __webpack_require__(46);
var autocomplete_default = /*#__PURE__*/__webpack_require__.n(autocomplete_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon-picker/src/icon-picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var icon_pickervue_type_script_lang_js_ = ({
    name: 'ElIconPicker',

    inject: {
        elForm: {
            default: ''
        },
        elFormItem: {
            default: ''
        }
    },

    components: {
        ElAutocomplete: autocomplete_default.a
    },

    data: function data() {
        return {
            searchQuery: null,
            currentValue: null
        };
    },


    props: {
        value: String,
        disabled: Boolean,
        size: String,
        name: String,
        clearable: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: 'Choose icon'
        },
        icons: {
            type: Array,
            default: function _default() {
                return [{ "name": "icon-home" }, { "name": "icon-home2" }, { "name": "icon-home5" }, { "name": "icon-home7" }, { "name": "icon-home8" }, { "name": "icon-home9" }, { "name": "icon-office" }, { "name": "icon-city" }, { "name": "icon-newspaper" }, { "name": "icon-magazine" }, { "name": "icon-design" }, { "name": "icon-pencil" }, { "name": "icon-pencil3" }, { "name": "icon-pencil4" }, { "name": "icon-pencil5" }, { "name": "icon-pencil6" }, { "name": "icon-pencil7" }, { "name": "icon-eraser" }, { "name": "icon-eraser2" }, { "name": "icon-eraser3" }, { "name": "icon-quill2" }, { "name": "icon-quill4" }, { "name": "icon-pen" }, { "name": "icon-pen-plus" }, { "name": "icon-pen-minus" }, { "name": "icon-pen2" }, { "name": "icon-blog" }, { "name": "icon-pen6" }, { "name": "icon-brush" }, { "name": "icon-spray" }, { "name": "icon-color-sampler" }, { "name": "icon-toggle" }, { "name": "icon-bucket" }, { "name": "icon-gradient" }, { "name": "icon-eyedropper" }, { "name": "icon-eyedropper2" }, { "name": "icon-eyedropper3" }, { "name": "icon-droplet" }, { "name": "icon-droplet2" }, { "name": "icon-color-clear" }, { "name": "icon-paint-format" }, { "name": "icon-stamp" }, { "name": "icon-image2" }, { "name": "icon-image-compare" }, { "name": "icon-images2" }, { "name": "icon-image3" }, { "name": "icon-images3" }, { "name": "icon-image4" }, { "name": "icon-image5" }, { "name": "icon-camera" }, { "name": "icon-shutter" }, { "name": "icon-headphones" }, { "name": "icon-headset" }, { "name": "icon-music" }, { "name": "icon-album" }, { "name": "icon-tape" }, { "name": "icon-piano" }, { "name": "icon-speakers" }, { "name": "icon-play" }, { "name": "icon-clapboard-play" }, { "name": "icon-clapboard" }, { "name": "icon-media" }, { "name": "icon-presentation" }, { "name": "icon-movie" }, { "name": "icon-film" }, { "name": "icon-film2" }, { "name": "icon-film3" }, { "name": "icon-film4" }, { "name": "icon-video-camera" }, { "name": "icon-video-camera2" }, { "name": "icon-video-camera-slash" }, { "name": "icon-video-camera3" }, { "name": "icon-dice" }, { "name": "icon-chess-king" }, { "name": "icon-chess-queen" }, { "name": "icon-chess" }, { "name": "icon-megaphone" }, { "name": "icon-new" }, { "name": "icon-connection" }, { "name": "icon-station" }, { "name": "icon-satellite-dish2" }, { "name": "icon-feed" }, { "name": "icon-mic2" }, { "name": "icon-mic-off2" }, { "name": "icon-book" }, { "name": "icon-book2" }, { "name": "icon-book-play" }, { "name": "icon-book3" }, { "name": "icon-bookmark" }, { "name": "icon-books" }, { "name": "icon-archive" }, { "name": "icon-reading" }, { "name": "icon-library2" }, { "name": "icon-graduation2" }, { "name": "icon-file-text" }, { "name": "icon-profile" }, { "name": "icon-file-empty" }, { "name": "icon-file-empty2" }, { "name": "icon-files-empty" }, { "name": "icon-files-empty2" }, { "name": "icon-file-plus" }, { "name": "icon-file-plus2" }, { "name": "icon-file-minus" }, { "name": "icon-file-minus2" }, { "name": "icon-file-download" }, { "name": "icon-file-download2" }, { "name": "icon-file-upload" }, { "name": "icon-file-upload2" }, { "name": "icon-file-check" }, { "name": "icon-file-check2" }, { "name": "icon-file-eye" }, { "name": "icon-file-eye2" }, { "name": "icon-file-text2" }, { "name": "icon-file-text3" }, { "name": "icon-file-picture" }, { "name": "icon-file-picture2" }, { "name": "icon-file-music" }, { "name": "icon-file-music2" }, { "name": "icon-file-play" }, { "name": "icon-file-play2" }, { "name": "icon-file-video" }, { "name": "icon-file-video2" }, { "name": "icon-copy" }, { "name": "icon-copy2" }, { "name": "icon-file-zip" }, { "name": "icon-file-zip2" }, { "name": "icon-file-xml" }, { "name": "icon-file-xml2" }, { "name": "icon-file-css" }, { "name": "icon-file-css2" }, { "name": "icon-file-presentation" }, { "name": "icon-file-presentation2" }, { "name": "icon-file-stats" }, { "name": "icon-file-stats2" }, { "name": "icon-file-locked" }, { "name": "icon-file-locked2" }, { "name": "icon-file-spreadsheet" }, { "name": "icon-file-spreadsheet2" }, { "name": "icon-copy3" }, { "name": "icon-copy4" }, { "name": "icon-paste" }, { "name": "icon-paste2" }, { "name": "icon-paste3" }, { "name": "icon-paste4" }, { "name": "icon-stack" }, { "name": "icon-stack2" }, { "name": "icon-stack3" }, { "name": "icon-folder" }, { "name": "icon-folder-search" }, { "name": "icon-folder-download" }, { "name": "icon-folder-upload" }, { "name": "icon-folder-plus" }, { "name": "icon-folder-plus2" }, { "name": "icon-folder-minus" }, { "name": "icon-folder-minus2" }, { "name": "icon-folder-check" }, { "name": "icon-folder-heart" }, { "name": "icon-folder-remove" }, { "name": "icon-folder2" }, { "name": "icon-folder-open" }, { "name": "icon-folder3" }, { "name": "icon-folder4" }, { "name": "icon-folder-plus3" }, { "name": "icon-folder-minus3" }, { "name": "icon-folder-plus4" }, { "name": "icon-folder-minus4" }, { "name": "icon-folder-download2" }, { "name": "icon-folder-upload2" }, { "name": "icon-folder-download3" }, { "name": "icon-folder-upload3" }, { "name": "icon-folder5" }, { "name": "icon-folder-open2" }, { "name": "icon-folder6" }, { "name": "icon-folder-open3" }, { "name": "icon-certificate" }, { "name": "icon-cc" }, { "name": "icon-price-tag" }, { "name": "icon-price-tag2" }, { "name": "icon-price-tags" }, { "name": "icon-price-tag3" }, { "name": "icon-price-tags2" }, { "name": "icon-barcode2" }, { "name": "icon-qrcode" }, { "name": "icon-ticket" }, { "name": "icon-theater" }, { "name": "icon-store" }, { "name": "icon-store2" }, { "name": "icon-cart" }, { "name": "icon-cart2" }, { "name": "icon-cart4" }, { "name": "icon-cart5" }, { "name": "icon-cart-add" }, { "name": "icon-cart-add2" }, { "name": "icon-cart-remove" }, { "name": "icon-basket" }, { "name": "icon-bag" }, { "name": "icon-percent" }, { "name": "icon-coins" }, { "name": "icon-coin-dollar" }, { "name": "icon-coin-euro" }, { "name": "icon-coin-pound" }, { "name": "icon-coin-yen" }, { "name": "icon-piggy-bank" }, { "name": "icon-wallet" }, { "name": "icon-cash" }, { "name": "icon-cash2" }, { "name": "icon-cash3" }, { "name": "icon-cash4" }, { "name": "icon-credit-card" }, { "name": "icon-credit-card2" }, { "name": "icon-calculator4" }, { "name": "icon-calculator2" }, { "name": "icon-calculator3" }, { "name": "icon-chip" }, { "name": "icon-lifebuoy" }, { "name": "icon-phone" }, { "name": "icon-phone2" }, { "name": "icon-phone-slash" }, { "name": "icon-phone-wave" }, { "name": "icon-phone-plus" }, { "name": "icon-phone-minus" }, { "name": "icon-phone-plus2" }, { "name": "icon-phone-minus2" }, { "name": "icon-phone-incoming" }, { "name": "icon-phone-outgoing" }, { "name": "icon-phone-hang-up" }, { "name": "icon-address-book" }, { "name": "icon-address-book2" }, { "name": "icon-address-book3" }, { "name": "icon-notebook" }, { "name": "icon-envelop" }, { "name": "icon-envelop2" }, { "name": "icon-envelop3" }, { "name": "icon-envelop4" }, { "name": "icon-envelop5" }, { "name": "icon-mailbox" }, { "name": "icon-pushpin" }, { "name": "icon-location3" }, { "name": "icon-location4" }, { "name": "icon-compass4" }, { "name": "icon-map" }, { "name": "icon-map4" }, { "name": "icon-map5" }, { "name": "icon-direction" }, { "name": "icon-reset" }, { "name": "icon-history" }, { "name": "icon-watch" }, { "name": "icon-watch2" }, { "name": "icon-alarm" }, { "name": "icon-alarm-add" }, { "name": "icon-alarm-check" }, { "name": "icon-alarm-cancel" }, { "name": "icon-bell2" }, { "name": "icon-bell3" }, { "name": "icon-bell-plus" }, { "name": "icon-bell-minus" }, { "name": "icon-bell-check" }, { "name": "icon-bell-cross" }, { "name": "icon-calendar" }, { "name": "icon-calendar2" }, { "name": "icon-calendar3" }, { "name": "icon-calendar52" }, { "name": "icon-printer" }, { "name": "icon-printer2" }, { "name": "icon-printer4" }, { "name": "icon-shredder" }, { "name": "icon-mouse" }, { "name": "icon-mouse-left" }, { "name": "icon-mouse-right" }, { "name": "icon-keyboard" }, { "name": "icon-typewriter" }, { "name": "icon-display" }, { "name": "icon-display4" }, { "name": "icon-laptop" }, { "name": "icon-mobile" }, { "name": "icon-mobile2" }, { "name": "icon-tablet" }, { "name": "icon-mobile3" }, { "name": "icon-tv" }, { "name": "icon-radio" }, { "name": "icon-cabinet" }, { "name": "icon-drawer" }, { "name": "icon-drawer2" }, { "name": "icon-drawer-out" }, { "name": "icon-drawer-in" }, { "name": "icon-drawer3" }, { "name": "icon-box" }, { "name": "icon-box-add" }, { "name": "icon-box-remove" }, { "name": "icon-download" }, { "name": "icon-upload" }, { "name": "icon-floppy-disk" }, { "name": "icon-floppy-disks" }, { "name": "icon-usb-stick" }, { "name": "icon-drive" }, { "name": "icon-server" }, { "name": "icon-database" }, { "name": "icon-database2" }, { "name": "icon-database4" }, { "name": "icon-database-menu" }, { "name": "icon-database-add" }, { "name": "icon-database-remove" }, { "name": "icon-database-insert" }, { "name": "icon-database-export" }, { "name": "icon-database-upload" }, { "name": "icon-database-refresh" }, { "name": "icon-database-diff" }, { "name": "icon-database-edit2" }, { "name": "icon-database-check" }, { "name": "icon-database-arrow" }, { "name": "icon-database-time2" }, { "name": "icon-undo" }, { "name": "icon-redo" }, { "name": "icon-rotate-ccw" }, { "name": "icon-rotate-cw" }, { "name": "icon-rotate-ccw2" }, { "name": "icon-rotate-cw2" }, { "name": "icon-rotate-ccw3" }, { "name": "icon-rotate-cw3" }, { "name": "icon-flip-vertical2" }, { "name": "icon-flip-horizontal2" }, { "name": "icon-flip-vertical3" }, { "name": "icon-flip-vertical4" }, { "name": "icon-angle" }, { "name": "icon-shear" }, { "name": "icon-align-left" }, { "name": "icon-align-center-horizontal" }, { "name": "icon-align-right" }, { "name": "icon-align-top" }, { "name": "icon-align-center-vertical" }, { "name": "icon-align-bottom" }, { "name": "icon-undo2" }, { "name": "icon-redo2" }, { "name": "icon-forward" }, { "name": "icon-reply" }, { "name": "icon-reply-all" }, { "name": "icon-bubble" }, { "name": "icon-bubbles" }, { "name": "icon-bubbles2" }, { "name": "icon-bubble2" }, { "name": "icon-bubbles3" }, { "name": "icon-bubbles4" }, { "name": "icon-bubble-notification" }, { "name": "icon-bubbles5" }, { "name": "icon-bubbles6" }, { "name": "icon-bubble6" }, { "name": "icon-bubbles7" }, { "name": "icon-bubble7" }, { "name": "icon-bubbles8" }, { "name": "icon-bubble8" }, { "name": "icon-bubble-dots3" }, { "name": "icon-bubble-lines3" }, { "name": "icon-bubble9" }, { "name": "icon-bubble-dots4" }, { "name": "icon-bubble-lines4" }, { "name": "icon-bubbles9" }, { "name": "icon-bubbles10" }, { "name": "icon-user" }, { "name": "icon-users" }, { "name": "icon-user-plus" }, { "name": "icon-user-minus" }, { "name": "icon-user-cancel" }, { "name": "icon-user-block" }, { "name": "icon-user-lock" }, { "name": "icon-user-check" }, { "name": "icon-users2" }, { "name": "icon-users4" }, { "name": "icon-user-tie" }, { "name": "icon-collaboration" }, { "name": "icon-vcard" }, { "name": "icon-hat" }, { "name": "icon-bowtie" }, { "name": "icon-quotes-left" }, { "name": "icon-quotes-right" }, { "name": "icon-quotes-left2" }, { "name": "icon-quotes-right2" }, { "name": "icon-hour-glass" }, { "name": "icon-hour-glass2" }, { "name": "icon-hour-glass3" }, { "name": "icon-spinner" }, { "name": "icon-spinner2" }, { "name": "icon-spinner3" }, { "name": "icon-spinner4" }, { "name": "icon-spinner6" }, { "name": "icon-spinner9" }, { "name": "icon-spinner10" }, { "name": "icon-spinner11" }, { "name": "icon-microscope" }, { "name": "icon-enlarge" }, { "name": "icon-shrink" }, { "name": "icon-enlarge3" }, { "name": "icon-shrink3" }, { "name": "icon-enlarge5" }, { "name": "icon-shrink5" }, { "name": "icon-enlarge6" }, { "name": "icon-shrink6" }, { "name": "icon-enlarge7" }, { "name": "icon-shrink7" }, { "name": "icon-key" }, { "name": "icon-lock" }, { "name": "icon-lock2" }, { "name": "icon-lock4" }, { "name": "icon-unlocked" }, { "name": "icon-lock5" }, { "name": "icon-unlocked2" }, { "name": "icon-safe" }, { "name": "icon-wrench" }, { "name": "icon-wrench2" }, { "name": "icon-wrench3" }, { "name": "icon-equalizer" }, { "name": "icon-equalizer2" }, { "name": "icon-equalizer3" }, { "name": "icon-equalizer4" }, { "name": "icon-cog" }, { "name": "icon-cogs" }, { "name": "icon-cog2" }, { "name": "icon-cog3" }, { "name": "icon-cog4" }, { "name": "icon-cog52" }, { "name": "icon-cog6" }, { "name": "icon-cog7" }, { "name": "icon-hammer" }, { "name": "icon-hammer-wrench" }, { "name": "icon-magic-wand" }, { "name": "icon-magic-wand2" }, { "name": "icon-pulse2" }, { "name": "icon-aid-kit" }, { "name": "icon-bug2" }, { "name": "icon-construction" }, { "name": "icon-traffic-cone" }, { "name": "icon-traffic-lights" }, { "name": "icon-pie-chart" }, { "name": "icon-pie-chart2" }, { "name": "icon-pie-chart3" }, { "name": "icon-pie-chart4" }, { "name": "icon-pie-chart5" }, { "name": "icon-pie-chart6" }, { "name": "icon-pie-chart7" }, { "name": "icon-stats-dots" }, { "name": "icon-stats-bars" }, { "name": "icon-pie-chart8" }, { "name": "icon-stats-bars2" }, { "name": "icon-stats-bars3" }, { "name": "icon-stats-bars4" }, { "name": "icon-chart" }, { "name": "icon-stats-growth" }, { "name": "icon-stats-decline" }, { "name": "icon-stats-growth2" }, { "name": "icon-stats-decline2" }, { "name": "icon-stairs-up" }, { "name": "icon-stairs-down" }, { "name": "icon-stairs" }, { "name": "icon-ladder" }, { "name": "icon-rating" }, { "name": "icon-rating2" }, { "name": "icon-rating3" }, { "name": "icon-podium" }, { "name": "icon-stars" }, { "name": "icon-medal-star" }, { "name": "icon-medal" }, { "name": "icon-medal2" }, { "name": "icon-medal-first" }, { "name": "icon-medal-second" }, { "name": "icon-medal-third" }, { "name": "icon-crown" }, { "name": "icon-trophy2" }, { "name": "icon-trophy3" }, { "name": "icon-diamond" }, { "name": "icon-trophy4" }, { "name": "icon-gift" }, { "name": "icon-pipe" }, { "name": "icon-mustache" }, { "name": "icon-cup2" }, { "name": "icon-coffee" }, { "name": "icon-paw" }, { "name": "icon-footprint" }, { "name": "icon-rocket" }, { "name": "icon-meter2" }, { "name": "icon-meter-slow" }, { "name": "icon-meter-fast" }, { "name": "icon-hammer2" }, { "name": "icon-balance" }, { "name": "icon-fire" }, { "name": "icon-fire2" }, { "name": "icon-lab" }, { "name": "icon-atom" }, { "name": "icon-atom2" }, { "name": "icon-bin" }, { "name": "icon-bin2" }, { "name": "icon-briefcase" }, { "name": "icon-briefcase3" }, { "name": "icon-airplane2" }, { "name": "icon-airplane3" }, { "name": "icon-airplane4" }, { "name": "icon-paperplane" }, { "name": "icon-car" }, { "name": "icon-steering-wheel" }, { "name": "icon-car2" }, { "name": "icon-gas" }, { "name": "icon-bus" }, { "name": "icon-truck" }, { "name": "icon-bike" }, { "name": "icon-road" }, { "name": "icon-train" }, { "name": "icon-train2" }, { "name": "icon-ship" }, { "name": "icon-boat" }, { "name": "icon-chopper" }, { "name": "icon-cube" }, { "name": "icon-cube2" }, { "name": "icon-cube3" }, { "name": "icon-cube4" }, { "name": "icon-pyramid" }, { "name": "icon-pyramid2" }, { "name": "icon-package" }, { "name": "icon-puzzle" }, { "name": "icon-puzzle2" }, { "name": "icon-puzzle3" }, { "name": "icon-puzzle4" }, { "name": "icon-glasses-3d2" }, { "name": "icon-brain" }, { "name": "icon-accessibility" }, { "name": "icon-accessibility2" }, { "name": "icon-strategy" }, { "name": "icon-target" }, { "name": "icon-target2" }, { "name": "icon-shield-check" }, { "name": "icon-shield-notice" }, { "name": "icon-shield2" }, { "name": "icon-racing" }, { "name": "icon-finish" }, { "name": "icon-power2" }, { "name": "icon-power3" }, { "name": "icon-switch" }, { "name": "icon-switch22" }, { "name": "icon-power-cord" }, { "name": "icon-clipboard" }, { "name": "icon-clipboard2" }, { "name": "icon-clipboard3" }, { "name": "icon-clipboard4" }, { "name": "icon-clipboard5" }, { "name": "icon-clipboard6" }, { "name": "icon-playlist" }, { "name": "icon-playlist-add" }, { "name": "icon-list-numbered" }, { "name": "icon-list" }, { "name": "icon-list2" }, { "name": "icon-more" }, { "name": "icon-more2" }, { "name": "icon-grid" }, { "name": "icon-grid2" }, { "name": "icon-grid3" }, { "name": "icon-grid4" }, { "name": "icon-grid52" }, { "name": "icon-grid6" }, { "name": "icon-grid7" }, { "name": "icon-tree5" }, { "name": "icon-tree6" }, { "name": "icon-tree7" }, { "name": "icon-lan" }, { "name": "icon-lan2" }, { "name": "icon-lan3" }, { "name": "icon-menu" }, { "name": "icon-circle-small" }, { "name": "icon-menu2" }, { "name": "icon-menu3" }, { "name": "icon-menu4" }, { "name": "icon-menu5" }, { "name": "icon-menu62" }, { "name": "icon-menu7" }, { "name": "icon-menu8" }, { "name": "icon-menu9" }, { "name": "icon-menu10" }, { "name": "icon-cloud" }, { "name": "icon-cloud-download" }, { "name": "icon-cloud-upload" }, { "name": "icon-cloud-check" }, { "name": "icon-cloud2" }, { "name": "icon-cloud-download2" }, { "name": "icon-cloud-upload2" }, { "name": "icon-cloud-check2" }, { "name": "icon-import" }, { "name": "icon-download4" }, { "name": "icon-upload4" }, { "name": "icon-download7" }, { "name": "icon-upload7" }, { "name": "icon-download10" }, { "name": "icon-upload10" }, { "name": "icon-sphere" }, { "name": "icon-sphere3" }, { "name": "icon-earth" }, { "name": "icon-link" }, { "name": "icon-unlink" }, { "name": "icon-link2" }, { "name": "icon-unlink2" }, { "name": "icon-anchor" }, { "name": "icon-flag3" }, { "name": "icon-flag4" }, { "name": "icon-flag7" }, { "name": "icon-flag8" }, { "name": "icon-attachment" }, { "name": "icon-attachment2" }, { "name": "icon-eye" }, { "name": "icon-eye-plus" }, { "name": "icon-eye-minus" }, { "name": "icon-eye-blocked" }, { "name": "icon-eye2" }, { "name": "icon-eye-blocked2" }, { "name": "icon-eye4" }, { "name": "icon-bookmark2" }, { "name": "icon-bookmark3" }, { "name": "icon-bookmarks" }, { "name": "icon-bookmark4" }, { "name": "icon-spotlight2" }, { "name": "icon-starburst" }, { "name": "icon-snowflake" }, { "name": "icon-weather-windy" }, { "name": "icon-fan" }, { "name": "icon-umbrella" }, { "name": "icon-sun3" }, { "name": "icon-contrast" }, { "name": "icon-bed2" }, { "name": "icon-furniture" }, { "name": "icon-chair" }, { "name": "icon-star-empty3" }, { "name": "icon-star-half" }, { "name": "icon-star-full2" }, { "name": "icon-heart5" }, { "name": "icon-heart6" }, { "name": "icon-heart-broken2" }, { "name": "icon-thumbs-up2" }, { "name": "icon-thumbs-down2" }, { "name": "icon-thumbs-up3" }, { "name": "icon-thumbs-down3" }, { "name": "icon-height" }, { "name": "icon-man" }, { "name": "icon-woman" }, { "name": "icon-man-woman" }, { "name": "icon-yin-yang" }, { "name": "icon-cursor" }, { "name": "icon-cursor2" }, { "name": "icon-lasso2" }, { "name": "icon-select2" }, { "name": "icon-point-up" }, { "name": "icon-point-right" }, { "name": "icon-point-down" }, { "name": "icon-point-left" }, { "name": "icon-pointer" }, { "name": "icon-reminder" }, { "name": "icon-drag-left-right" }, { "name": "icon-drag-left" }, { "name": "icon-drag-right" }, { "name": "icon-touch" }, { "name": "icon-multitouch" }, { "name": "icon-touch-zoom" }, { "name": "icon-touch-pinch" }, { "name": "icon-hand" }, { "name": "icon-grab" }, { "name": "icon-stack-empty" }, { "name": "icon-stack-plus" }, { "name": "icon-stack-minus" }, { "name": "icon-stack-star" }, { "name": "icon-stack-picture" }, { "name": "icon-stack-down" }, { "name": "icon-stack-up" }, { "name": "icon-stack-cancel" }, { "name": "icon-stack-check" }, { "name": "icon-stack-text" }, { "name": "icon-stack4" }, { "name": "icon-stack-music" }, { "name": "icon-stack-play" }, { "name": "icon-move" }, { "name": "icon-dots" }, { "name": "icon-warning" }, { "name": "icon-warning22" }, { "name": "icon-notification2" }, { "name": "icon-question3" }, { "name": "icon-question4" }, { "name": "icon-plus3" }, { "name": "icon-minus3" }, { "name": "icon-plus-circle2" }, { "name": "icon-minus-circle2" }, { "name": "icon-cancel-circle2" }, { "name": "icon-blocked" }, { "name": "icon-cancel-square" }, { "name": "icon-cancel-square2" }, { "name": "icon-spam" }, { "name": "icon-cross2" }, { "name": "icon-cross3" }, { "name": "icon-checkmark" }, { "name": "icon-checkmark3" }, { "name": "icon-checkmark2" }, { "name": "icon-checkmark4" }, { "name": "icon-spell-check" }, { "name": "icon-spell-check2" }, { "name": "icon-enter" }, { "name": "icon-exit" }, { "name": "icon-enter2" }, { "name": "icon-exit2" }, { "name": "icon-enter3" }, { "name": "icon-exit3" }, { "name": "icon-wall" }, { "name": "icon-fence" }, { "name": "icon-play3" }, { "name": "icon-pause" }, { "name": "icon-stop" }, { "name": "icon-previous" }, { "name": "icon-next" }, { "name": "icon-backward" }, { "name": "icon-forward2" }, { "name": "icon-play4" }, { "name": "icon-pause2" }, { "name": "icon-stop2" }, { "name": "icon-backward2" }, { "name": "icon-forward3" }, { "name": "icon-first" }, { "name": "icon-last" }, { "name": "icon-previous2" }, { "name": "icon-next2" }, { "name": "icon-eject" }, { "name": "icon-volume-high" }, { "name": "icon-volume-medium" }, { "name": "icon-volume-low" }, { "name": "icon-volume-mute" }, { "name": "icon-speaker-left" }, { "name": "icon-speaker-right" }, { "name": "icon-volume-mute2" }, { "name": "icon-volume-increase" }, { "name": "icon-volume-decrease" }, { "name": "icon-volume-mute5" }, { "name": "icon-loop" }, { "name": "icon-loop3" }, { "name": "icon-infinite-square" }, { "name": "icon-infinite" }, { "name": "icon-loop4" }, { "name": "icon-shuffle" }, { "name": "icon-wave" }, { "name": "icon-wave2" }, { "name": "icon-split" }, { "name": "icon-merge" }, { "name": "icon-arrow-up5" }, { "name": "icon-arrow-right5" }, { "name": "icon-arrow-down5" }, { "name": "icon-arrow-left5" }, { "name": "icon-arrow-up-left2" }, { "name": "icon-arrow-up7" }, { "name": "icon-arrow-up-right2" }, { "name": "icon-arrow-right7" }, { "name": "icon-arrow-down-right2" }, { "name": "icon-arrow-down7" }, { "name": "icon-arrow-down-left2" }, { "name": "icon-arrow-left7" }, { "name": "icon-arrow-up-left3" }, { "name": "icon-arrow-up8" }, { "name": "icon-arrow-up-right3" }, { "name": "icon-arrow-right8" }, { "name": "icon-arrow-down-right3" }, { "name": "icon-arrow-down8" }, { "name": "icon-arrow-down-left3" }, { "name": "icon-arrow-left8" }, { "name": "icon-circle-up2" }, { "name": "icon-circle-right2" }, { "name": "icon-circle-down2" }, { "name": "icon-circle-left2" }, { "name": "icon-arrow-resize7" }, { "name": "icon-arrow-resize8" }, { "name": "icon-square-up-left" }, { "name": "icon-square-up" }, { "name": "icon-square-up-right" }, { "name": "icon-square-right" }, { "name": "icon-square-down-right" }, { "name": "icon-square-down" }, { "name": "icon-square-down-left" }, { "name": "icon-square-left" }, { "name": "icon-arrow-up15" }, { "name": "icon-arrow-right15" }, { "name": "icon-arrow-down15" }, { "name": "icon-arrow-left15" }, { "name": "icon-arrow-up16" }, { "name": "icon-arrow-right16" }, { "name": "icon-arrow-down16" }, { "name": "icon-arrow-left16" }, { "name": "icon-menu-open" }, { "name": "icon-menu-open2" }, { "name": "icon-menu-close" }, { "name": "icon-menu-close2" }, { "name": "icon-enter5" }, { "name": "icon-esc" }, { "name": "icon-enter6" }, { "name": "icon-backspace" }, { "name": "icon-backspace2" }, { "name": "icon-tab" }, { "name": "icon-transmission" }, { "name": "icon-sort" }, { "name": "icon-move-up2" }, { "name": "icon-move-down2" }, { "name": "icon-sort-alpha-asc" }, { "name": "icon-sort-alpha-desc" }, { "name": "icon-sort-numeric-asc" }, { "name": "icon-sort-numberic-desc" }, { "name": "icon-sort-amount-asc" }, { "name": "icon-sort-amount-desc" }, { "name": "icon-sort-time-asc" }, { "name": "icon-sort-time-desc" }, { "name": "icon-battery-6" }, { "name": "icon-battery-0" }, { "name": "icon-battery-charging" }, { "name": "icon-command" }, { "name": "icon-shift" }, { "name": "icon-ctrl" }, { "name": "icon-opt" }, { "name": "icon-checkbox-checked" }, { "name": "icon-checkbox-unchecked" }, { "name": "icon-checkbox-partial" }, { "name": "icon-square" }, { "name": "icon-triangle" }, { "name": "icon-triangle2" }, { "name": "icon-diamond3" }, { "name": "icon-diamond4" }, { "name": "icon-checkbox-checked2" }, { "name": "icon-checkbox-unchecked2" }, { "name": "icon-checkbox-partial2" }, { "name": "icon-radio-checked" }, { "name": "icon-radio-checked2" }, { "name": "icon-radio-unchecked" }, { "name": "icon-checkmark-circle" }, { "name": "icon-circle" }, { "name": "icon-circle2" }, { "name": "icon-circles" }, { "name": "icon-circles2" }, { "name": "icon-crop" }, { "name": "icon-crop2" }, { "name": "icon-make-group" }, { "name": "icon-ungroup" }, { "name": "icon-vector" }, { "name": "icon-vector2" }, { "name": "icon-rulers" }, { "name": "icon-pencil-ruler" }, { "name": "icon-scissors" }, { "name": "icon-filter3" }, { "name": "icon-filter4" }, { "name": "icon-font" }, { "name": "icon-ampersand2" }, { "name": "icon-ligature" }, { "name": "icon-font-size" }, { "name": "icon-typography" }, { "name": "icon-text-height" }, { "name": "icon-text-width" }, { "name": "icon-height2" }, { "name": "icon-width" }, { "name": "icon-strikethrough2" }, { "name": "icon-font-size2" }, { "name": "icon-bold2" }, { "name": "icon-underline2" }, { "name": "icon-italic2" }, { "name": "icon-strikethrough3" }, { "name": "icon-omega" }, { "name": "icon-sigma" }, { "name": "icon-nbsp" }, { "name": "icon-page-break" }, { "name": "icon-page-break2" }, { "name": "icon-superscript" }, { "name": "icon-subscript" }, { "name": "icon-superscript2" }, { "name": "icon-subscript2" }, { "name": "icon-text-color" }, { "name": "icon-highlight" }, { "name": "icon-pagebreak" }, { "name": "icon-clear-formatting" }, { "name": "icon-table" }, { "name": "icon-table2" }, { "name": "icon-insert-template" }, { "name": "icon-pilcrow" }, { "name": "icon-ltr" }, { "name": "icon-rtl" }, { "name": "icon-ltr2" }, { "name": "icon-rtl2" }, { "name": "icon-section" }, { "name": "icon-paragraph-left2" }, { "name": "icon-paragraph-center2" }, { "name": "icon-paragraph-right2" }, { "name": "icon-paragraph-justify2" }, { "name": "icon-indent-increase" }, { "name": "icon-indent-decrease" }, { "name": "icon-paragraph-left3" }, { "name": "icon-paragraph-center3" }, { "name": "icon-paragraph-right3" }, { "name": "icon-paragraph-justify3" }, { "name": "icon-indent-increase2" }, { "name": "icon-indent-decrease2" }, { "name": "icon-share" }, { "name": "icon-share2" }, { "name": "icon-new-tab" }, { "name": "icon-new-tab2" }, { "name": "icon-popout" }, { "name": "icon-embed" }, { "name": "icon-embed2" }, { "name": "icon-markup" }, { "name": "icon-regexp" }, { "name": "icon-regexp2" }, { "name": "icon-code" }, { "name": "icon-circle-css" }, { "name": "icon-circle-code" }, { "name": "icon-terminal" }, { "name": "icon-unicode" }, { "name": "icon-seven-segment-0" }, { "name": "icon-seven-segment-1" }, { "name": "icon-seven-segment-2" }, { "name": "icon-seven-segment-3" }, { "name": "icon-seven-segment-4" }, { "name": "icon-seven-segment-5" }, { "name": "icon-seven-segment-6" }, { "name": "icon-seven-segment-7" }, { "name": "icon-seven-segment-8" }, { "name": "icon-seven-segment-9" }, { "name": "icon-share3" }, { "name": "icon-share4" }, { "name": "icon-google" }, { "name": "icon-google-plus" }, { "name": "icon-google-plus2" }, { "name": "icon-google-drive" }, { "name": "icon-facebook" }, { "name": "icon-facebook2" }, { "name": "icon-instagram" }, { "name": "icon-twitter" }, { "name": "icon-twitter2" }, { "name": "icon-feed2" }, { "name": "icon-feed3" }, { "name": "icon-youtube" }, { "name": "icon-youtube2" }, { "name": "icon-youtube3" }, { "name": "icon-vimeo" }, { "name": "icon-vimeo2" }, { "name": "icon-lanyrd" }, { "name": "icon-flickr" }, { "name": "icon-flickr2" }, { "name": "icon-flickr3" }, { "name": "icon-picassa" }, { "name": "icon-picassa2" }, { "name": "icon-dribbble" }, { "name": "icon-dribbble2" }, { "name": "icon-dribbble3" }, { "name": "icon-forrst" }, { "name": "icon-forrst2" }, { "name": "icon-deviantart" }, { "name": "icon-deviantart2" }, { "name": "icon-steam" }, { "name": "icon-steam2" }, { "name": "icon-dropbox" }, { "name": "icon-onedrive" }, { "name": "icon-github" }, { "name": "icon-github4" }, { "name": "icon-github5" }, { "name": "icon-wordpress" }, { "name": "icon-wordpress2" }, { "name": "icon-joomla" }, { "name": "icon-blogger" }, { "name": "icon-blogger2" }, { "name": "icon-tumblr" }, { "name": "icon-tumblr2" }, { "name": "icon-yahoo" }, { "name": "icon-tux" }, { "name": "icon-apple2" }, { "name": "icon-finder" }, { "name": "icon-android" }, { "name": "icon-windows" }, { "name": "icon-windows8" }, { "name": "icon-soundcloud" }, { "name": "icon-soundcloud2" }, { "name": "icon-skype" }, { "name": "icon-reddit" }, { "name": "icon-linkedin" }, { "name": "icon-linkedin2" }, { "name": "icon-lastfm" }, { "name": "icon-lastfm2" }, { "name": "icon-delicious" }, { "name": "icon-stumbleupon" }, { "name": "icon-stumbleupon2" }, { "name": "icon-stackoverflow" }, { "name": "icon-pinterest2" }, { "name": "icon-xing" }, { "name": "icon-flattr" }, { "name": "icon-foursquare" }, { "name": "icon-paypal" }, { "name": "icon-paypal2" }, { "name": "icon-yelp" }, { "name": "icon-file-pdf" }, { "name": "icon-file-openoffice" }, { "name": "icon-file-word" }, { "name": "icon-file-excel" }, { "name": "icon-libreoffice" }, { "name": "icon-html5" }, { "name": "icon-html52" }, { "name": "icon-css3" }, { "name": "icon-git" }, { "name": "icon-svg" }, { "name": "icon-codepen" }, { "name": "icon-chrome" }, { "name": "icon-firefox" }, { "name": "icon-IE" }, { "name": "icon-opera" }, { "name": "icon-safari" }, { "name": "icon-check2" }, { "name": "icon-home4" }, { "name": "icon-people" }, { "name": "icon-checkmark-circle2" }, { "name": "icon-arrow-up-left32" }, { "name": "icon-arrow-up52" }, { "name": "icon-arrow-up-right32" }, { "name": "icon-arrow-right6" }, { "name": "icon-arrow-down-right32" }, { "name": "icon-arrow-down52" }, { "name": "icon-arrow-down-left32" }, { "name": "icon-arrow-left52" }, { "name": "icon-calendar5" }, { "name": "icon-move-alt1" }, { "name": "icon-reload-alt" }, { "name": "icon-move-vertical" }, { "name": "icon-move-horizontal" }, { "name": "icon-hash" }, { "name": "icon-bars-alt" }, { "name": "icon-eye8" }, { "name": "icon-search4" }, { "name": "icon-zoomin3" }, { "name": "icon-zoomout3" }, { "name": "icon-add" }, { "name": "icon-subtract" }, { "name": "icon-exclamation" }, { "name": "icon-question6" }, { "name": "icon-close2" }, { "name": "icon-task" }, { "name": "icon-inbox" }, { "name": "icon-inbox-alt" }, { "name": "icon-envelope" }, { "name": "icon-compose" }, { "name": "icon-newspaper2" }, { "name": "icon-calendar22" }, { "name": "icon-hyperlink" }, { "name": "icon-trash" }, { "name": "icon-trash-alt" }, { "name": "icon-grid5" }, { "name": "icon-grid-alt" }, { "name": "icon-menu6" }, { "name": "icon-list3" }, { "name": "icon-gallery" }, { "name": "icon-calculator" }, { "name": "icon-windows2" }, { "name": "icon-browser" }, { "name": "icon-portfolio" }, { "name": "icon-comments" }, { "name": "icon-screen3" }, { "name": "icon-iphone" }, { "name": "icon-ipad" }, { "name": "icon-googleplus5" }, { "name": "icon-pin" }, { "name": "icon-pin-alt" }, { "name": "icon-cog5" }, { "name": "icon-graduation" }, { "name": "icon-air" }, { "name": "icon-droplets" }, { "name": "icon-statistics" }, { "name": "icon-pie5" }, { "name": "icon-cross" }, { "name": "icon-minus2" }, { "name": "icon-plus2" }, { "name": "icon-info3" }, { "name": "icon-info22" }, { "name": "icon-question7" }, { "name": "icon-help" }, { "name": "icon-warning2" }, { "name": "icon-add-to-list" }, { "name": "icon-arrow-left12" }, { "name": "icon-arrow-down12" }, { "name": "icon-arrow-up12" }, { "name": "icon-arrow-right13" }, { "name": "icon-arrow-left22" }, { "name": "icon-arrow-down22" }, { "name": "icon-arrow-up22" }, { "name": "icon-arrow-right22" }, { "name": "icon-arrow-left32" }, { "name": "icon-arrow-down32" }, { "name": "icon-arrow-up32" }, { "name": "icon-arrow-right32" }, { "name": "icon-switch2" }, { "name": "icon-checkmark5" }, { "name": "icon-ampersand" }, { "name": "icon-alert" }, { "name": "icon-alignment-align" }, { "name": "icon-alignment-aligned-to" }, { "name": "icon-alignment-unalign" }, { "name": "icon-arrow-down132" }, { "name": "icon-arrow-up13" }, { "name": "icon-arrow-left13" }, { "name": "icon-arrow-right14" }, { "name": "icon-arrow-small-down" }, { "name": "icon-arrow-small-left" }, { "name": "icon-arrow-small-right" }, { "name": "icon-arrow-small-up" }, { "name": "icon-check" }, { "name": "icon-chevron-down" }, { "name": "icon-chevron-left" }, { "name": "icon-chevron-right" }, { "name": "icon-chevron-up" }, { "name": "icon-clippy" }, { "name": "icon-comment" }, { "name": "icon-comment-discussion" }, { "name": "icon-dash" }, { "name": "icon-diff" }, { "name": "icon-diff-added" }, { "name": "icon-diff-ignored" }, { "name": "icon-diff-modified" }, { "name": "icon-diff-removed" }, { "name": "icon-diff-renamed" }, { "name": "icon-file-media" }, { "name": "icon-fold" }, { "name": "icon-gear" }, { "name": "icon-git-branch" }, { "name": "icon-git-commit" }, { "name": "icon-git-compare" }, { "name": "icon-git-merge" }, { "name": "icon-git-pull-request" }, { "name": "icon-graph" }, { "name": "icon-law" }, { "name": "icon-list-ordered" }, { "name": "icon-list-unordered" }, { "name": "icon-mail5" }, { "name": "icon-mail-read" }, { "name": "icon-mention" }, { "name": "icon-mirror" }, { "name": "icon-move-down" }, { "name": "icon-move-left" }, { "name": "icon-move-right" }, { "name": "icon-move-up" }, { "name": "icon-person" }, { "name": "icon-plus22" }, { "name": "icon-primitive-dot" }, { "name": "icon-primitive-square" }, { "name": "icon-repo-forked" }, { "name": "icon-screen-full" }, { "name": "icon-screen-normal" }, { "name": "icon-sync" }, { "name": "icon-three-bars" }, { "name": "icon-unfold" }, { "name": "icon-versions" }, { "name": "icon-x" }];
            }
        }
    },

    watch: {
        value: {
            immediate: true,
            handler: function handler(value) {
                this.currentValue = value;
                this.$emit('input', value);
            }
        }
    },

    methods: {
        focus: function focus() {
            this.$refs.input.focus();
        },
        blur: function blur() {
            this.$refs.input.blur();
        },
        handleInput: function handleInput(value) {
            this.searchQuery = value;
            this.currentValue = value;
        },
        handleSelect: function handleSelect(value) {
            this.currentValue = value.name;
            this.$emit('input', value.name);
            this.$emit('select', value.name);
        },

        querySearch: function querySearch(value, callback) {
            var results = this.filteredCollection;
            callback(results);
        }
    },

    computed: {
        _elFormItemSize: function _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        inputIconpickerSize: function inputIconpickerSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        inputIconpickerDisabled: function inputIconpickerDisabled() {
            return this.disabled || !!(this.elForm || {}).disabled;
        },
        filteredCollection: function filteredCollection() {
            var _this = this;

            if (!this.searchQuery) {
                return this.icons;
            }
            return this.icons.filter(function (row, index) {
                return row.name.includes(_this.searchQuery);
            });
        }
    }
});
// CONCATENATED MODULE: ./packages/icon-picker/src/icon-picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_icon_pickervue_type_script_lang_js_ = (icon_pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/icon-picker/src/icon-picker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_icon_pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/icon-picker/src/icon-picker.vue"
/* harmony default export */ var icon_picker = (component.exports);
// CONCATENATED MODULE: ./packages/icon-picker/index.js


icon_picker.install = function (Vue) {
    Vue.component(icon_picker.name, icon_picker);
};

/* harmony default export */ var packages_icon_picker = __webpack_exports__["default"] = (icon_picker);

/***/ })

/******/ });