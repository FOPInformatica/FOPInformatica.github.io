"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/Preloader.js


const Preloader = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "preloader-active",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "preloader flex-1 content-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "logo absolute inset-y-2/4 jump",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/assets/imgs/logos/logo-fopi.svg",
                            alt: "Monst"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-lg font-semibold"
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const elements_Preloader = (Preloader);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !loading ? /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }) : /*#__PURE__*/ jsx_runtime_.jsx(elements_Preloader, {
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7438));
module.exports = __webpack_exports__;

})();