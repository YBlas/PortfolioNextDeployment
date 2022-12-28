(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
;// CONCATENATED MODULE: ./src/apollo/client.tsx

const client = new client_.ApolloClient({
    uri: "https://yebel-portfolio-api.herokuapp.com/graphql",
    cache: new client_.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);

// EXTERNAL MODULE: ./src/components/styles/general.css
var general = __webpack_require__(492);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(client_.ApolloProvider, {
        client: apollo_client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 492:
/***/ (() => {



/***/ }),

/***/ 114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(677));
module.exports = __webpack_exports__;

})();