"use strict";
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 5336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e5": () => (/* binding */ createCompany),
/* harmony export */   "j1": () => (/* binding */ updateCompany),
/* harmony export */   "r7": () => (/* binding */ getAllCompany)
/* harmony export */ });
/* unused harmony export deleteCompany */
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpClient__WEBPACK_IMPORTED_MODULE_0__]);
_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const prefix = "/company";
async function getAllCompany() {
    try {
        const response = await _HttpClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(prefix + "/");
        return {
            state: true,
            data: response.data,
            error: ""
        };
    } catch (error) {
        return {
            state: false,
            data: [],
            error
        };
    }
}
async function createCompany(values) {
    try {
        const response = await _HttpClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(prefix + "/", values);
        return {
            state: true,
            data: response,
            error: ""
        };
    } catch (error) {
        return {
            state: false,
            data: [],
            error
        };
    }
}
async function updateCompany(id, values) {
    try {
        const response = await _HttpClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(prefix + "/" + id, values);
        return {
            state: true,
            data: response,
            error: ""
        };
    } catch (error) {
        return {
            state: false,
            data: [],
            error
        };
    }
}
async function deleteCompany(id) {
    try {
        const response = await httpClient.delete(prefix + "/" + id);
        return {
            state: true,
            data: response,
            error: ""
        };
    } catch (error) {
        return {
            state: false,
            data: [],
            error
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;