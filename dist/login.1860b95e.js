// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var items = [{
  id: "item01",
  gender: "공용",
  name: "테니스 퍼포먼스 반팔티셔츠",
  price: "49,000\uC6D0",
  src: "./img/sub_img/item01.jpg",
  srchover: "./img/sub_img/item01_hover.jpg",
  color: "white"
}, {
  id: "item02",
  gender: "남자",
  name: "컴포트핏 인터내셔널 반팔 카라티",
  price: "69,000\uC6D0",
  src: "./img/sub_img/item02.jpg",
  srchover: "./img/sub_img/item02_hover.jpg",
  color: "beige"
}, {
  id: "item03",
  gender: "남자",
  name: "인터내셔널 반팔 카라티",
  price: "69,000\uC6D0",
  src: "./img/sub_img/item03.jpg",
  srchover: "./img/sub_img/item03_hover.jpg",
  color: "blue"
}, {
  id: "item04",
  gender: "공용",
  name: "스포츠 인터내셔널 로고 반팔티",
  price: "49,000\uC6D0",
  src: "./img/sub_img/item04.jpg",
  srchover: "./img/sub_img/item04_hover.jpg",
  color: "white"
}, {
  id: "item05",
  gender: "공용",
  name: "인터내셔널 그래픽 반팔티",
  price: "49,000\uC6D0",
  src: "./img/sub_img/item05.jpg",
  srchover: "./img/sub_img/item05_hover.jpg",
  color: "black"
}, {
  id: "item06",
  gender: "공용",
  name: "레터링 그래픽 티셔츠",
  price: "49,000\uC6D0",
  src: "./img/sub_img/item06.jpg",
  srchover: "./img/sub_img/item06_hover.jpg",
  color: "white"
}, {
  id: "item07",
  gender: "남자",
  name: "핫써머 Joyful 나시티",
  price: "45,000\uC6D0",
  src: "./img/sub_img/item07.jpg",
  srchover: "./img/sub_img/item07_hover.jpg",
  color: "black"
}, {
  id: "item08",
  gender: "남자",
  name: "테니스 퍼포먼스 반팔티셔츠",
  price: "49,000\uC6D0",
  src: "./img/sub_img/item08.jpg",
  srchover: "./img/sub_img/item08_hover.jpg",
  color: "black"
}, {
  id: "item09",
  gender: "남자",
  name: "테니스 퍼포먼스 카라티셔츠",
  price: "79,000\uC6D0",
  src: "./img/sub_img/item09.jpg",
  srchover: "./img/sub_img/item09_hover.jpg",
  color: "black"
}, {
  id: "item10",
  gender: "공용",
  name: "테니스 라이프 스테디움 자켓",
  price: "149,000\uC6D0",
  src: "./img/sub_img/item10.jpg",
  srchover: "./img/sub_img/item10_hover.jpg",
  color: "green"
}, {
  id: "item11",
  gender: "공용",
  name: "테잎 오버핏 바람막이 자켓",
  price: "159,000\uC6D0",
  src: "./img/sub_img/item11.jpg",
  srchover: "./img/sub_img/item11_hover.jpg",
  color: "grey"
}, {
  id: "item12",
  gender: "공용",
  name: "테니스 라이프 카라 맨투맨",
  price: "99,000\uC6D0",
  src: "./img/sub_img/item12.jpg",
  srchover: "./img/sub_img/item12_hover.jpg",
  color: "green"
}, {
  id: "item13",
  gender: "공용",
  name: "베이직 리니어 후드집업",
  price: "79,000\uC6D0",
  src: "./img/sub_img/item13.jpg",
  srchover: "./img/sub_img/item13_hover.jpg",
  color: "grey"
}, {
  id: "item14",
  gender: "공용",
  name: "헤리티지 레귤러핏 케이블 스웨터",
  price: "109,000\uC6D0",
  src: "./img/sub_img/item14.jpg",
  srchover: "./img/sub_img/item14_hover.jpg",
  color: "white"
}, {
  id: "item15",
  gender: "공용",
  name: "테잎 오버핏 우븐 반바지",
  price: "79,000\uC6D0",
  src: "./img/sub_img/item15.jpg",
  srchover: "./img/sub_img/item15_hover.jpg",
  color: "green"
}, {
  id: "item16",
  gender: "공용",
  name: "아티스트 이진 반바지",
  price: "59,000\uC6D0",
  src: "./img/sub_img/item16.jpg",
  srchover: "./img/sub_img/item16_hover.jpg",
  color: "beige"
}];

//export default items

var info = [{
  id: 'green123',
  pw: '123456789'
}, {
  id: 'greenweb',
  pw: '123456789'
}, {
  id: 'gunnnna',
  pw: '123456789'
}];

//login 페이지 적용
//join_02 페이지 적용

//export default info
var _default = {
  items: items,
  info: info
};
exports.default = _default;
},{}],"js/login.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* DB 연결 ------------------------------------------------------------------------ */

var items = _data.default.items,
  info = _data.default.info;

//데이터 출력 확인
for (var i = 0; i < info.length; i++) {
  console.log(info[i].id);
  console.log(info[i].pw);
}

// [제이쿼리]wingbanner------------------------------------------

var moveTop = document.querySelector('#moveTop');
var moveBottom = document.querySelector('#moveBottom');
moveTop.addEventListener('click', function () {
  var scrollInterval = setInterval(function () {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, -50);
    }
  }, 16);
});
moveBottom.addEventListener('click', function () {
  var scrollInterval = setInterval(function () {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, 50);
    }
  }, 16);
});

// menu------------------------------------------

var lnbMenuWrap = document.querySelector(".lnb_menu_wrap");
var menuLi = document.querySelector('.gnb ul'); //기존 header 메뉴
var menuLiWrap = document.querySelector('.lnb_menu_wrap .gnb'); //덮은 header 메뉴
var menuLiWrapli = document.querySelectorAll('.lnb_menu_wrap .gnb ul li'); //덮은 header 메뉴

var lnbMenuAll = Array.from(document.querySelectorAll(".lnb_menu"));
var lnbListAll = Array.from(document.querySelectorAll(".lnb_list"));

//메뉴에 마우스 올릴때 해당하는 sheet 나옴
function handleMouseover(index) {
  lnbListAll.forEach(function (sheet, sheetIndex) {
    if (index == sheetIndex) {
      sheet.style.display = "block";
    } else {
      sheet.style.display = "none";
    }
  });
}

//기존 메뉴 gnb
menuLi.addEventListener("mouseover", function () {
  lnbMenuWrap.style.display = 'block';
  lnbMenuWrap.style.backdropFilter = "blur(50px)";
  lnbMenuAll[0].style.display = 'block';
});
lnbMenuAll.forEach(function (box, index) {
  box.addEventListener('mouseleave', function () {
    lnbMenuWrap.style.backdropFilter = "none";
    lnbMenuWrap.style.display = 'none';
    box.style.display = 'none';
  });
});
menuLiWrapli.forEach(function (li, index) {
  if (li.classList.contains("women") || li.classList.contains("men") || li.classList.contains("kids") || li.classList.contains("brand")) {
    li.addEventListener("mouseover", function () {
      handleMouseover(index);
    });
  }
});

//메인메뉴 스크롤에 따라 변화

var lastScrollTop = 0;
$(window).scroll(function () {
  var currentScrollTop = $(this).scrollTop();
  if (currentScrollTop > lastScrollTop) {
    // 스크롤을 내릴 때
    $(".header_outer").slideUp();
  } else {
    // 스크롤을 올릴 때
    $(".header_outer").slideDown();
  }
  lastScrollTop = currentScrollTop;
  if (currentScrollTop == 0) {
    // 스크롤이 제일 위에 있을 때
    $(".header_outer").css("background-color", "transparent");
  } else {
    // 스크롤이 제일 위에 있지 않을 때
    $(".header_outer").css("background-color", "#fff");
  }
});

/* 로그인 기능 ------------------------------------------------------------------------ */

var userId = document.querySelector('.user_id');
var userPw = document.querySelector('.user_pw');
var loginBtn = document.querySelector('.login01');
var loginBtnAttr = document.querySelector('.login_btn ul li a');
loginBtn.addEventListener('click', function () {
  var loginSuccess = false;
  for (var _i = 0; _i < info.length; _i++) {
    if (info[_i].id == userId.value && info[_i].pw == userPw.value) {
      alert('FILA 방문을 환영합니다');
      loginSuccess = true;
      break;
    } else if (info[_i].id !== userId.value && info[_i].pw == userPw.value) {
      alert('아이디를 잘못 입력하셨습니다.');
      loginSuccess = true;
      loginBtnAttr.setAttribute('href', 'login.html');
    } else if (info[_i].id == userId.value && info[_i].pw !== userPw.value) {
      alert('비밀번호를 잘못 입력하셨습니다.');
      loginSuccess = true;
      loginBtnAttr.setAttribute('href', 'login.html');
    } else if (userId.value == '' || userPw.value == '') {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      loginSuccess = true;
      loginBtnAttr.setAttribute('href', 'login.html');
      break;
    }
  }
  if (!loginSuccess) {
    alert('잘못 입력하셨습니다.');
    loginBtnAttr.setAttribute('href', 'login.html');
  }
});

/* 패스워드 보이는 기능 ------------------------------------------------------------------------ */

var icon = document.querySelector('.fa-eye-slash');
icon.addEventListener('click', function () {
  if (icon.classList.contains('fa-eye-slash')) {
    icon.setAttribute('class', 'fas fa-eye');
    userPw.setAttribute('type', 'text');
  } else {
    icon.setAttribute('class', 'fas fa-eye-slash');
    userPw.setAttribute('type', 'password');
  }
});
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55529" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/login.js"], null)
//# sourceMappingURL=/login.1860b95e.js.map