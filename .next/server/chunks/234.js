"use strict";
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 9234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ httpFormDataClient),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6725);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _utils_constants__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _utils_constants__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//console.log(_apiUrl);
const httpClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _utils_constants__WEBPACK_IMPORTED_MODULE_1__/* ._apiUrl */ .CC,
    headers: {
        "Content-Type": "application/json"
    }
});
httpClient.interceptors.request.use(function(config) {
    if (false) {} else return config;
}, function(error) {
    console.log("error");
    return Promise.reject(error);
});
const httpFormDataClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _utils_constants__WEBPACK_IMPORTED_MODULE_1__/* ._apiUrl */ .CC,
    headers: {
        "Content-Type": "multipart/form-data"
    }
});
httpFormDataClient.interceptors.request.use(function(config) {
    const token = localStorage.getItem("_token");
    config.headers["Content-Type"] = "multipart/form-data";
    if (token) {
        config.headers["Content-Type"] = "multipart/form-data";
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (httpClient);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;