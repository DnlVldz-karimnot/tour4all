"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 9755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/facebook"
const facebook_namespaceObject = require("next-auth/providers/facebook");
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts



/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        facebook_default()({
            clientId: "717168523490973",
            clientSecret: "60bc56be322ddc8140a0f6472a599b97"
        }),
        google_default()({
            clientId: "858988238576-rpvp3v56ulmnngkbnctr8mr63j5okpe7.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9755));
module.exports = __webpack_exports__;

})();