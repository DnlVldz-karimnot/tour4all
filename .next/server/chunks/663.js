"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 7663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1": () => (/* binding */ deleteCarrer),
/* harmony export */   "Im": () => (/* binding */ getAllCarrers)
/* harmony export */ });
/* unused harmony exports createCarrer, updateCarrer */
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HttpClient__WEBPACK_IMPORTED_MODULE_0__]);
_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const prefix = "/licenciatura";
async function getAllCarrers() {
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
async function createCarrer(values) {
    try {
        const response = await httpClient.post(prefix + "/", values);
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
async function updateCarrer(id, values) {
    try {
        const response = await httpClient.patch(prefix + "/" + id, values);
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
async function deleteCarrer(id) {
    try {
        const response = await _HttpClient__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](prefix + "/" + id);
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