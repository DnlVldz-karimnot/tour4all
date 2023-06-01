"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 2627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7304);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);





const DataTableCustom = ({ data , columns , buttons  })=>{
    const theme = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const xssize = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.only("xs"));
    const smsize = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.down("sm"));
    const mdsize = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.only("md"));
    const lgsize = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.only("lg"));
    const xlsize = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.only("xl"));
    const options = {
        // ... your options definition
        textLabels: {
            body: {
                noMatch: "No se encontr\xf3 informaci\xf3n",
                toolTip: "Ordenar"
            },
            pagination: {
                next: "Siguiente",
                previous: "Anterior",
                rowsPerPage: "Filas por p\xe1gina:",
                displayRows: "de"
            },
            toolbar: {
                search: "Buscar",
                downloadCsv: "Descargar CSV",
                print: "Imprimir",
                viewColumns: "Vista de columnas",
                filterTable: "Filtro"
            },
            filter: {
                all: "Todos",
                title: "Filtros",
                reset: "Reestablecer"
            },
            viewColumns: {
                title: "Mostrar Columnas",
                titleAria: "Mostrar/Ocultar Columnas de tabla"
            },
            selectedRows: {
                text: "Filas seleccionadas",
                delete: "Borrar",
                deleteAria: "Borrar columnas seleccionadas"
            }
        },
        elevation: 0,
        responsive: "simple",
        customToolbar: ()=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: buttons
            });
        },
        selectableRowsHideCheckboxes: true
    };
    /* const options = {
    setLoading: (isLoading: boolean) => {
      if (isLoading) {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        );
      } else {
        return null;
      }
    },
    selectableRowsHideCheckboxes: true,
  }; */ return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: "100%"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mui_datatables__WEBPACK_IMPORTED_MODULE_2___default()), {
                title: "",
                data: data,
                columns: columns,
                options: options
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTableCustom);


/***/ })

};
;