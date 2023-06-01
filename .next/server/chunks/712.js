"use strict";
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 7712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "aC": () => (/* binding */ useAuth)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_constants__WEBPACK_IMPORTED_MODULE_1__]);
_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    isAuthenticated: false,
    login: ()=>{},
    logout: ()=>{}
});
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);
const AuthProvider = ({ children  })=>{
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const login = ()=>{
        if (localStorage.getItem("_user")) {
            const user = JSON.parse(localStorage.getItem("_user") || "");
            if (user.id) {
                setIsAuthenticated(true);
            }
        } else {
            (0,_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .notify */ .h4)("error", "Necesita autenticarse");
        }
    };
    const logout = ()=>{
        (0,_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .notify */ .h4)("success", "Sesi\xf3n cerrada");
        localStorage.removeItem("_user");
        localStorage.removeItem("_token");
        setIsAuthenticated(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isAuthenticated,
            login,
            logout
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* binding */ _apiUrl),
/* harmony export */   "Oj": () => (/* binding */ phoneRegExp),
/* harmony export */   "h4": () => (/* binding */ notify),
/* harmony export */   "mv": () => (/* binding */ _clientSecret)
/* harmony export */ });
/* unused harmony exports yearRegExp, salleEmailRegExp */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _apiUrl = "https://car4allapi.software4all.dev/";
const _clientSecret = process.env.NEXT_PUBLIC_SECRET;
const phoneRegExp = /^[1-9]\d{9}$/;
const yearRegExp = /^(20|20)\d{2}$/;
const salleEmailRegExp = /^[A-Za-z0-9._%+-]+@.*?ulsaoaxaca\.edu\.mx$/;
const notify = (action, message)=>{
    const configuration = {
        position: "top-right",
        autoClose: 1500,
        theme: "light"
    };
    action === "success" ? react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(message, configuration) : react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(message, configuration);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;